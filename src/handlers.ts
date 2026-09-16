/**
 * MCP tool handlers — development-first (scaffold / compile / nodes / generate).
 * Knowledge helpers remain available but secondary.
 */
import {
  getCommunityTools,
  getSkillById,
  listSkills,
  lookupOfficialDoc,
  searchKnowledge,
  type KnowledgeHit,
  type SkillMeta,
} from "./knowledge.js";
import { lookupNodes, listNodes, loadNodes, nodeToJsonFriendly } from "./nodes.js";
import {
  scaffoldProject,
  compileProject,
  projectStatus,
  injectHint,
  UnsafePathError,
} from "./project.js";
import { generateLogic } from "./generate.js";
import {
  listPatterns,
  getPatternById,
  getPeriodNote,
  formatRecipe,
  listPeriodNoteIds,
  loadCatalog,
} from "./patterns.js";
import {
  lookupSystem,
  loadSystemItems,
  systemItemToJsonFriendly,
  formatSystemHit,
  type SystemDomain,
} from "./systems.js";

function textResult(text: string) {
  return { content: [{ type: "text" as const, text }] };
}

function formatHits(hits: KnowledgeHit[]): string {
  if (hits.length === 0) {
    return "未找到匹配结果。开发向可试 lookup_node / list_nodes；知识向可试 list_skills。";
  }
  return hits
    .map((h, i) => {
      const id = h.id ? ` \`${h.id}\`` : "";
      return `### ${i + 1}. [${h.source}] ${h.title}${id}\n${h.snippet}`;
    })
    .join("\n\n");
}

/* ---------- Primary: development tools ---------- */

export function handleScaffoldProject(args: {
  targetDir: string;
  name?: string;
  mode?: "classic" | "beyond";
}) {
  try {
    const result = scaffoldProject(args);
    return textResult(
      [
        `# scaffold_project → ${result.targetDir}`,
        `- name: ${result.name}`,
        `- mode: ${result.mode}`,
        `- files:`,
        ...result.files.map((f) => `  - ${f}`),
        "",
        "## Notes",
        ...result.notes.map((n) => `- ${n}`),
        "",
        "下一步：`cd` 到目录后 `npm install && npm run build`，或调用 `compile_project`。",
      ].join("\n"),
    );
  } catch (e) {
    if (e instanceof UnsafePathError) {
      return textResult(`# scaffold_project 拒绝\n\n${e.message}`);
    }
    throw e;
  }
}

export function handleCompileProject(args: { projectDir: string }) {
  const result = compileProject(args);
  return textResult(
    [
      `# compile_project → ${result.projectDir}`,
      `- command: \`${result.command}\``,
      `- exitCode: ${result.exitCode}`,
      `- hint: ${result.hint}`,
      "",
      "## Outputs",
      result.outputs.length
        ? result.outputs.map((f) => `- ${f}`).join("\n")
        : "- （无）",
      "",
      "## stdout",
      "```",
      result.stdout || "(empty)",
      "```",
      "",
      "## stderr",
      "```",
      result.stderr || "(empty)",
      "```",
    ].join("\n"),
  );
}

export function handleLookupNode(args: {
  query: string;
  side?: "server" | "client" | "any";
  limit?: number;
}) {
  const hits = lookupNodes(args.query, {
    side: args.side ?? "any",
    limit: args.limit ?? 10,
  });
  const payload = {
    query: args.query,
    side: args.side ?? "any",
    total_index: loadNodes().length,
    count: hits.length,
    nodes: hits.map(nodeToJsonFriendly),
  };
  return textResult(JSON.stringify(payload, null, 2));
}

export function handleListNodes(args: {
  category?: string;
  side?: "server" | "client" | "any";
  prefix?: string;
  limit?: number;
}) {
  const hits = listNodes({
    category: args.category,
    side: args.side ?? "any",
    prefix: args.prefix,
    limit: args.limit ?? 100,
  });
  const names = hits.map((n) => ({
    name: n.name,
    side: n.side,
    category: n.category,
    graphKinds: n.graphKinds?.length ? n.graphKinds : undefined,
    description: n.desc || undefined,
    param_count: Array.isArray(n.params) ? n.params.length : 0,
    path_id: n.path_id || undefined,
  }));
  return textResult(
    JSON.stringify(
      {
        filters: {
          category: args.category ?? null,
          side: args.side ?? "any",
          prefix: args.prefix ?? null,
        },
        total_index: loadNodes().length,
        count: names.length,
        nodes: names,
      },
      null,
      2,
    ),
  );
}

export function handleGenerateLogic(args: {
  goal: string;
  mode?: "beyond" | "classic";
  graphType?: "entity" | "characterSkill" | "creationSkill" | "boolFilter" | "intFilter";
  patternId?: string;
}) {
  let goal = args.goal;
  let patternPrefix = "";
  if (args.patternId) {
    const recipe = getPatternById(args.patternId);
    if (recipe) {
      patternPrefix = [
        `# pattern: ${recipe.id} — ${recipe.title}`,
        `nodes: ${recipe.related_nodes.join(", ") || "(none)"}`,
        `components: ${recipe.related_components.join(", ") || "(none)"}`,
        `source_periods: ${recipe.source_periods.join(", ")}`,
        "",
      ].join("\n");
      if (!goal || goal === args.patternId) {
        goal = recipe.title + "；" + recipe.steps.slice(0, 3).join("；");
      }
    } else {
      patternPrefix = `# warning: unknown patternId=${args.patternId}\n\n`;
    }
  }
  const result = generateLogic({ ...args, goal });
  return textResult(
    [
      patternPrefix + `# generate_logic`,
      `- goal: ${result.goal}`,
      `- mode: ${result.mode}`,
      `- graphType: ${result.graphType}`,
      `- mappedEvents: ${result.mappedEvents.join(", ") || "—"}`,
      `- mappedNodes: ${result.mappedNodes.join(", ") || "—"}`,
      "",
      "## Notes",
      ...result.notes.map((n) => `- ${n}`),
      "",
      "## TypeScript (genshin-ts)",
      "```ts",
      result.code.trimEnd(),
      "```",
    ].join("\n"),
  );
}

export function handleProjectStatus(args: { projectDir: string }) {
  const s = projectStatus(args);
  return textResult(JSON.stringify(s, null, 2));
}

export function handleInjectHint() {
  return textResult(injectHint());
}

/* ---------- Secondary: diagnose + knowledge ---------- */

const DIAGNOSE_RULES: { keys: string[]; title: string; advice: string; skills: string[] }[] = [
  {
    keys: ["走进去没反应", "触发器", "进入碰撞", "碰撞没触发", "踩了没反应", "触发源"],
    title: "碰撞触发器未生效",
    advice: [
      "1. 探测方挂「碰撞触发器」，进入方挂「碰撞触发源」。",
      "2. 触发器「生效目标」勾选角色/物件/造物。",
      "3. 监听 `whenEnteringCollisionTrigger` / 进入碰撞触发器时（挂在触发器实体服务端图）。",
      "4. genshin-ts：在对应实体图 `.on('whenEnteringCollisionTrigger', ...)`。",
      "5. 沙箱日志 + printString 确认事件进图。",
    ].join("\n"),
    skills: ["collision-interaction", "node-graphs", "debug-publish"],
  },
  {
    keys: ["节点图不生效", "挂了不跑", "事件不触发", "写了没用", "节点图", "编译", "gia"],
    title: "节点图 / 编译不生效",
    advice: [
      "1. 核对图类型与挂载；TS 工程核对 g.server({ id }) 与地图 NodeGraph ID。",
      "2. 注入目标须为空图或 `_GSTS_` 前缀；保存地图后再 inject。",
      "3. `compile_project` / `npm run build` 查看 dist `.gs.ts`/`.json`/`.gia`。",
      "4. 换职业/销毁实体后旧图失效。",
    ].join("\n"),
    skills: ["node-graphs", "debug-publish"],
  },
  {
    keys: ["变量", "分数", "得分", "同步", "ui读不到", "自定义变量", "信号"],
    title: "变量/信号/UI 读数问题",
    advice: [
      "1. UI 要读的自定义变量必须在组件里预定义。",
      "2. 图内临时用 g.server variables + f.get/f.set；跨系统用 stage/player.set。",
      "3. 信号：send('name') + onSignal('name')。",
    ].join("\n"),
    skills: ["variables-signals", "minigame-design"],
  },
  {
    keys: ["试玩", "校验失败", "风险检查", "上传", "负载", "卡顿", "性能"],
    title: "试玩 / 校验 / 负载",
    advice: [
      "1. 试玩校验失败会阻断试玩。",
      "2. 负载：关卡最低负载档；布景静态化。",
      "3. 发布前：风险检查 → 试玩 → 导出 .gia。",
    ].join("\n"),
    skills: ["debug-publish", "sandbox-basics"],
  },
  {
    keys: ["脚本", "typescript", "genshin-ts", "gsts", "scaffold", "编译失败"],
    title: "genshin-ts 工程问题",
    advice: [
      "1. scaffold_project → npm install → compile_project。",
      "2. 未配置 inject 时警告可忽略，只要 dist 有产物或错误信息清晰。",
      "3. inject_hint 查看本地注入字段；本 MCP 不直接注入游戏。",
    ].join("\n"),
    skills: [],
  },
];

export function handleDiagnose(args: { symptom: string }) {
  const s = args.symptom.toLowerCase();
  const matched = DIAGNOSE_RULES.map((rule) => {
    const hit = rule.keys.filter(
      (k) => s.includes(k.toLowerCase()) || args.symptom.includes(k),
    );
    return { rule, score: hit.length };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (matched.length === 0) {
    const fallback = searchKnowledge(args.symptom, 5);
    return textResult(
      `# 诊断：未命中专用故障树\n\n症状：${args.symptom}\n\n可换关键词（触发器 / 变量同步 / inject / 编译）。\n\n${formatHits(fallback)}`,
    );
  }

  const blocks = matched.slice(0, 3).map(({ rule }, i) => {
    const skillLinks =
      rule.skills.length > 0
        ? `\n相关技能（次要）：${rule.skills.map((id) => `\`${id}\``).join(", ")}`
        : "";
    return `## ${i + 1}. ${rule.title}\n\n${rule.advice}${skillLinks}`;
  });

  return textResult(`# 诊断：${args.symptom}\n\n${blocks.join("\n\n")}`);
}

export function handleListSkills() {
  const skills = listSkills();
  const lines = skills.map(
    (s: SkillMeta) => `- **${s.id}** — ${s.name}\n  ${s.description}`,
  );
  return textResult(
    `# 技能草稿（次要知识工具，${skills.length}）\n\n${lines.join("\n\n")}\n\n开发主路径请用 scaffold_project / lookup_node / generate_logic。`,
  );
}

export function handleGetSkill(args: { id: string }) {
  const found = getSkillById(args.id);
  if (!found) {
    const ids = listSkills()
      .map((s) => s.id)
      .join(", ");
    return textResult(`未找到技能 id="${args.id}"。可用 id：${ids}`);
  }
  return textResult(
    `# ${found.meta.name} (\`${found.meta.id}\`)\n\n${found.meta.description}\n\n---\n\n${found.content}`,
  );
}

export function handleSearchKnowledge(args: { query: string; limit?: number }) {
  const hits = searchKnowledge(args.query, args.limit ?? 8);
  return textResult(
    `# 知识检索（次要）：${args.query}\n\n节点查询请优先 lookup_node。\n\n${formatHits(hits)}`,
  );
}

export function handleLookupOfficialDoc(args: { query: string }) {
  const hits = lookupOfficialDoc(args.query, 15);
  return textResult(
    `# 官方目录检索：${args.query}\n\n入口：https://act.mihoyo.com/ys/ugc/tutorial/\n\n${formatHits(hits)}`,
  );
}

export function handleMinigameChecklist(args: {
  players?: string;
  mode?: string;
  loop?: string;
}) {
  const players = args.players ?? "未指定";
  const mode = args.mode ?? "未指定";
  const loop = args.loop ?? "未指定";
  return textResult(`# 小玩法清单（可与 generate_logic 配合）

- 人数：${players}
- 模式：${mode}
- 核心循环：${loop}

## 开发向路径
1. \`scaffold_project\` 建 TS 工程
2. \`generate_logic\` 生成得分/定时/结算 stub
3. \`lookup_node\` 核对官方节点名
4. \`compile_project\` 产出 .gia
5. 编辑器挂碰撞触发器 + 预定义 Score 变量 + 试玩

## 编辑器侧仍需
- 触发器/触发源组件、UI 计分板绑定、出生点与结算开关
`);
}

export function handleListCommunityTools() {
  return textResult(`# 社区与官方工具对照\n\n${getCommunityTools()}`);
}

export function handleRecommendWorkflow(args: { goal: string }) {
  return textResult(`# 工作流：${args.goal}

## 从想法到 .gia（推荐）
1. \`scaffold_project { targetDir, name?, mode? }\`
2. \`generate_logic { goal }\` → 粘贴进 src/main.ts
3. \`lookup_node\` / \`list_nodes\` 核对节点；UI/外围/资源用 \`lookup_system\`
4. \`compile_project { projectDir }\`
5. 需要本机注入时看 \`inject_hint\`（自行改 gsts.config.ts）
6. 遇障 \`diagnose { symptom }\`

次要：search_knowledge / get_skill / lookup_official_doc
`);
}


export function handleLookupSystem(args: {
  domain?: "ui" | "peripheral" | "resources";
  query: string;
  limit?: number;
}) {
  const domain = args.domain;
  const hits = lookupSystem(args.query, {
    domain: domain as SystemDomain | undefined,
    limit: args.limit ?? 8,
  });
  const payload = {
    domain: domain ?? "all",
    query: args.query,
    total_index: loadSystemItems(domain as SystemDomain | undefined).length,
    count: hits.length,
    items: hits.map(systemItemToJsonFriendly),
  };
  const summary =
    hits.length === 0
      ? "未命中。可试 domain=ui|peripheral|resources，关键词如 计分板 / 结算 / 商店。"
      : hits.map(formatSystemHit).join("\n\n");
  return textResult(
    JSON.stringify(payload, null, 2) + "\n\n---\n\n" + summary,
  );
}

export function handleListPatterns(args: { filter?: string } = {}) {
  const recipes = listPatterns(args.filter);
  const catalog = loadCatalog();
  const periods = listPeriodNoteIds();
  const lines = recipes.map(
    (r) =>
      `- **${r.id}** — ${r.title}\n  nodes: ${r.related_nodes.slice(0, 5).join(", ") || "—"}\n  periods: ${r.source_periods.join(", ")}`,
  );
  return textResult(
    [
      `# list_patterns (${recipes.length}/${catalog.recipes.length} recipes)`,
      catalog.description ? `> ${catalog.description}` : "",
      args.filter ? `filter: ${args.filter}` : "",
      "",
      ...lines,
      "",
      `Period notes available: ${periods.length} (${periods.slice(0, 8).join(", ")}${periods.length > 8 ? ", …" : ""})`,
      "Use get_pattern { id } for full steps; id may be recipe id or period like 2.1",
    ]
      .filter(Boolean)
      .join("\n"),
  );
}

export function handleGetPattern(args: { id: string }) {
  const id = args.id.trim();
  const recipe = getPatternById(id);
  if (recipe) {
    return textResult(formatRecipe(recipe));
  }
  // try period note
  const note = getPeriodNote(id);
  if (note) {
    return textResult(note);
  }
  const ids = listPatterns()
    .map((r) => r.id)
    .join(", ");
  const periods = listPeriodNoteIds().join(", ");
  return textResult(
    `未找到 pattern id="${id}"。\n\n可用 recipe id：${ids}\n\n可用 period notes：${periods}`,
  );
}

/** Exported for smoke tests without starting stdio transport. */
export const handlers = {
  scaffold_project: handleScaffoldProject,
  compile_project: handleCompileProject,
  lookup_node: handleLookupNode,
  list_nodes: handleListNodes,
  generate_logic: handleGenerateLogic,
  list_patterns: handleListPatterns,
  get_pattern: handleGetPattern,
  lookup_system: handleLookupSystem,
  project_status: handleProjectStatus,
  inject_hint: handleInjectHint,
  diagnose: handleDiagnose,
  // secondary
  list_skills: handleListSkills,
  get_skill: handleGetSkill,
  search_knowledge: handleSearchKnowledge,
  lookup_official_doc: handleLookupOfficialDoc,
  minigame_checklist: handleMinigameChecklist,
  list_community_tools: handleListCommunityTools,
  recommend_workflow: handleRecommendWorkflow,
};
