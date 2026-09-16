import {
  getCommunityTools,
  getSkillById,
  listSkills,
  lookupOfficialDoc,
  searchKnowledge,
  type KnowledgeHit,
  type SkillMeta,
} from "./knowledge.js";

function textResult(text: string) {
  return { content: [{ type: "text" as const, text }] };
}

function formatHits(hits: KnowledgeHit[]): string {
  if (hits.length === 0) return "未找到匹配结果。请尝试更短的关键词，或先调用 list_skills / lookup_official_doc。";
  return hits
    .map((h, i) => {
      const id = h.id ? ` \`${h.id}\`` : "";
      return `### ${i + 1}. [${h.source}] ${h.title}${id}\n${h.snippet}`;
    })
    .join("\n\n");
}

export function handleListSkills() {
  const skills = listSkills();
  const lines = skills.map(
    (s: SkillMeta) => `- **${s.id}** — ${s.name}\n  ${s.description}`,
  );
  return textResult(
    `# 千星奇域技能草稿（${skills.length}）\n\n${lines.join("\n\n")}\n\n使用 get_skill { id } 读取全文。`,
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
  return textResult(`# 知识检索：${args.query}\n\n${formatHits(hits)}`);
}

export function handleLookupOfficialDoc(args: { query: string }) {
  const hits = lookupOfficialDoc(args.query, 15);
  return textResult(
    `# 官方目录检索：${args.query}\n\n入口：https://act.mihoyo.com/ys/ugc/tutorial/\n\n${formatHits(hits)}`,
  );
}

/** Symptom → fault-tree style advice grounded in skills. */
const DIAGNOSE_RULES: { keys: string[]; title: string; advice: string; skills: string[] }[] = [
  {
    keys: ["走进去没反应", "触发器", "进入碰撞", "碰撞没触发", "踩了没反应", "触发源"],
    title: "碰撞触发器未生效",
    advice: [
      "1. 确认探测方挂了「碰撞触发器」，进入方挂了「碰撞触发源」（角色/造物默认有；物件通常要手动加）。",
      "2. 触发器「生效目标」是否勾选了角色/物件/造物。",
      "3. 监听事件应在**触发器所在实体**的服务端节点图：`进入碰撞触发器时` / `离开…`。",
      "4. 区分：原生/额外碰撞是物理阻挡；触发器是纯逻辑，不挡人。",
      "5. 用沙箱日志 +「打印字符串」确认事件是否进图。",
    ].join("\n"),
    skills: ["collision-interaction", "node-graphs", "debug-publish"],
  },
  {
    keys: ["节点图不生效", "挂了不跑", "事件不触发", "写了没用", "节点图"],
    title: "节点图不执行 / 事件未进",
    advice: [
      "1. 核对类型与挂载：实体逻辑用服务端实体节点图；技能动画事件用客户端技能节点图。",
      "2. 技能图要挂在动画「节点图事件」轨道，跑到时点才执行；关键逻辑可放结束轨道兜底。",
      "3. 执行流（白）与运算流（蓝）勿混；强类型引脚必须同类型。",
      "4. 换职业/销毁实体后旧图会失效。",
      "5. 沙箱 → 窗口 → 日志：勾选目标图，看时间线与打印。",
    ].join("\n"),
    skills: ["node-graphs", "debug-publish", "combat-skills-jobs"],
  },
  {
    keys: ["变量", "分数", "得分", "同步", "ui读不到", "自定义变量", "信号"],
    title: "变量/信号/UI 读数问题",
    advice: [
      "1. 跨图共享得分/开关 → 实体「自定义变量」；仅图内临时 → 节点图变量；多方解耦 → 服务器信号。",
      "2. 只有组件里**预定义**的自定义变量会同步到本地，UI/本地过滤器才能读。",
      "3. 本地节点图只能读自定义变量，不能写。",
      "4. 容器（列表/字典）Get 后是引用；原地插入不触发「变化时」，需再「设置自定义变量」。",
      "5. 改名/改类型可能导致节点静默找不到变量。",
    ].join("\n"),
    skills: ["variables-signals", "minigame-design", "debug-publish"],
  },
  {
    keys: ["试玩", "校验失败", "风险检查", "上传", "负载", "卡顿", "性能"],
    title: "试玩 / 校验 / 负载",
    advice: [
      "1. 试玩校验失败会**阻断**试玩，看错误码弹窗；风险检查不阻断，系统菜单入口。",
      "2. 多人试玩房间未解散时无法单人试玩。",
      "3. 负载：关卡设置选最低负载档；布景改静态实体、降场景生成密度、少用每帧重逻辑。",
      "4. 发布前：风险检查 → 试玩 → 日志核对 → `.gia` 导出玩法相关动态元件+节点图。",
    ].join("\n"),
    skills: ["debug-publish", "sandbox-basics", "scene-generation"],
  },
  {
    keys: ["沙箱", "编辑器", "怎么开", "四模式", "导出", "导入", ".gia", "元件库"],
    title: "编辑器 / 沙箱入门",
    advice: [
      "1. 系统菜单（Esc）：保存、试玩、千星沙箱、资产导入导出、风险检查。",
      "2. 四模式：地形编辑 / 实体摆放 / 元件库 / 战斗预设。",
      "3. 玩法逻辑用动态实体；纯布景用静态省性能。",
      "4. 沙箱默认开启；关闭后从系统菜单左下再开。",
    ].join("\n"),
    skills: ["sandbox-basics"],
  },
  {
    keys: ["技能", "职业", "阵营", "战斗", "冷却", "时间轴"],
    title: "战斗 / 技能 / 职业",
    advice: [
      "1. 先配关卡阵营关系（单向），再配实体战斗属性与战斗设置。",
      "2. 技能 = 动画 + 客户端技能节点图时间轴事件；职业 = 打包镜头/属性/技能/节点图。",
      "3. 角色技能图偏超限；造物技能经典+超限。",
      "4. 用信号把客户端技能结果通知服务端改分/结算。",
    ].join("\n"),
    skills: ["combat-skills-jobs", "variables-signals"],
  },
  {
    keys: ["场景生成", "植被", "密度", "布景", "模板"],
    title: "场景生成模板",
    advice: [
      "1. 实体摆放 → 场景生成模板 → 预设导入或自建。",
      "2. 层依次生成；上层过密会剔除导致下层没地。",
      "3. 植被伴生树木：树木间隔过大或伴生范围过小 → 植被不生成。",
    ].join("\n"),
    skills: ["scene-generation"],
  },
  {
    keys: ["脚本", "typescript", "genshin-ts", "gsts", "客户端脚本", "7.1"],
    title: "脚本 / 社区工具链",
    advice: [
      "1. 当前官方逻辑主路径仍是可视化节点图；Ver 7.1 预告客户端脚本模块，官方脚本文档尚未完全公开，本 MCP **暂不覆盖 7.1 客户端脚本细则**。",
      "2. 社区可用 genshin-ts（MIT）：TypeScript → `.gs.ts` → IR → `.gia`，见 list_community_tools / genshin_ts_hint。",
      "3. 不要使用游戏破解或未授权注入；仅在本地配置的路径上使用社区 CLI。",
    ].join("\n"),
    skills: [],
  },
];

export function handleDiagnose(args: { symptom: string }) {
  const s = args.symptom.toLowerCase();
  const matched = DIAGNOSE_RULES.map((rule) => {
    const hit = rule.keys.filter((k) => s.includes(k.toLowerCase()) || args.symptom.includes(k));
    return { rule, score: hit.length };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (matched.length === 0) {
    const fallback = searchKnowledge(args.symptom, 5);
    return textResult(
      `# 诊断：未命中专用故障树\n\n症状：${args.symptom}\n\n建议先浏览相关技能，或换更具体的关键词（如「触发器」「变量同步」「试玩校验」「负载」）。\n\n${formatHits(fallback)}`,
    );
  }

  const blocks = matched.slice(0, 3).map(({ rule }, i) => {
    const skillLinks =
      rule.skills.length > 0
        ? `\n推荐技能：${rule.skills.map((id) => `\`${id}\``).join(", ")}（get_skill）`
        : "";
    return `## ${i + 1}. ${rule.title}\n\n${rule.advice}${skillLinks}`;
  });

  return textResult(`# 诊断：${args.symptom}\n\n${blocks.join("\n\n")}`);
}

export function handleMinigameChecklist(args: {
  players?: string;
  mode?: string;
  loop?: string;
}) {
  const players = args.players ?? "未指定（默认按单人设计，多人需加阵营/人数）";
  const mode = args.mode ?? "未指定（经典 / 超限会影响职业与技能图）";
  const loop = args.loop ?? "未指定（请用一句话描述核心循环，如「30 秒踩点得分」）";

  const body = `# 小玩法试玩清单

## 你的约束
- 人数：${players}
- 模式：${mode}
- 核心循环：${loop}

## Checklist
1. **关卡骨架**：保存存档 → 关卡设置（人数/出生点/阵营/负载档）→ 场景生成铺底，玩法区用动态实体。
2. **核心交互**：区域用触发器+触发源；攻击用命中检测；多方响应用信号解耦。
3. **数据**：得分/计时放关卡或玩家自定义变量；图内临时用节点图变量；UI 要读的变量必须预定义。
4. **反馈**：特效 / 计分板/计时器控件 / 气泡铭牌。
5. **结束**：设置玩家结算状态 → 关卡结算；试玩期可关「启用试玩结算」。
6. **验证**：风险检查 → 试玩 → 沙箱日志 → 负载 → 稳定后导出 \`.gia\` 组合包。

## 最小实例「踩圈得分」
1. 地面动态物件放大触发区，生效目标勾选角色。
2. 关卡变量 \`Score\`（整数）。
3. \`进入碰撞触发器时\` → 归属玩家 → Score+1。
4. UI 计分板绑定该变量。
5. 定时器到时 → 结算。

详细步骤见技能 \`minigame-design\`（get_skill）。
`;
  return textResult(body);
}

export function handleListCommunityTools() {
  return textResult(`# 社区与官方工具对照\n\n${getCommunityTools()}`);
}

const WORKFLOWS: { keys: string[]; title: string; steps: string[] }[] = [
  {
    keys: ["入门", "新手", "第一次", "编辑器", "沙箱"],
    title: "从零认识编辑器",
    steps: [
      "get_skill sandbox-basics — 四模式与沙箱",
      "lookup_official_doc 整体界面 / 试玩 / 千星沙箱",
      "建空关卡 → 摆一个动态物件 → 试玩一次",
    ],
  },
  {
    keys: ["小玩法", "小游戏", "得分", "踩圈", "minigame", "玩法"],
    title: "落地一个最小可玩切片",
    steps: [
      "minigame_checklist — 填人数/模式/核心循环",
      "get_skill collision-interaction + variables-signals",
      "get_skill minigame-design — 踩圈得分实例",
      "diagnose 若试玩无反应",
      "get_skill debug-publish — 发布前检查",
    ],
  },
  {
    keys: ["战斗", "技能", "职业", "pvp", "对抗"],
    title: "战斗向玩法",
    steps: [
      "get_skill combat-skills-jobs — 阵营→属性→技能→职业",
      "lookup_official_doc 技能 / 职业 / 阵营",
      "用信号把客户端技能结果回服务端",
      "debug-publish 试玩与负载",
    ],
  },
  {
    keys: ["布景", "大地图", "场景", "植被", "生成"],
    title: "快速布大场景",
    steps: [
      "get_skill scene-generation",
      "lookup_official_doc 场景生成模板",
      "玩法关键区改回动态手摆；布景尽量静态",
    ],
  },
  {
    keys: ["节点", "逻辑", "脚本", "typescript", "genshin"],
    title: "逻辑与可选 TS 工具链",
    steps: [
      "get_skill node-graphs — 官方主路径（节点图）",
      "list_community_tools / genshin_ts_hint — 社区 TS→GIA（可选）",
      "注意：7.1 客户端脚本官方文档未全量公开，本 MCP 暂不覆盖",
    ],
  },
  {
    keys: ["调试", "发布", "上传", "导出", "bug"],
    title: "调试到发布",
    steps: [
      "get_skill debug-publish",
      "diagnose { 具体症状 }",
      "风险检查 → 试玩 → 日志 → .gia 导出",
    ],
  },
];

export function handleRecommendWorkflow(args: { goal: string }) {
  const g = args.goal.toLowerCase();
  const matched = WORKFLOWS.map((w) => ({
    w,
    score: w.keys.filter((k) => g.includes(k.toLowerCase()) || args.goal.includes(k)).length,
  }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (matched.length === 0) {
    return textResult(
      `# 工作流建议：${args.goal}\n\n未命中专用模板。通用路径：\n1. list_skills 浏览技能\n2. search_knowledge / lookup_official_doc 定位文档\n3. minigame_checklist（若做玩法）\n4. diagnose（若遇故障）\n5. list_community_tools（若需外部工具链）`,
    );
  }

  const blocks = matched.slice(0, 2).map(({ w }, i) => {
    const steps = w.steps.map((s, j) => `${j + 1}. ${s}`).join("\n");
    return `## ${i + 1}. ${w.title}\n\n${steps}`;
  });
  return textResult(`# 工作流建议：${args.goal}\n\n${blocks.join("\n\n")}`);
}

export function handleGenshinTsHint() {
  const community = getCommunityTools();
  const text = `# genshin-ts 使用提示（社区，MIT）

> 本工具仅提供文档向指引，不捆绑逆向二进制，不协助游戏破解或未授权注入。

## 定位
- 官方主路径：可视化**节点图**（服务端/客户端）。
- Ver 7.1 预告「客户端脚本模块」；官方脚本文档未完全公开前，细节以现网为准。
- genshin-ts：TypeScript → \`.gs.ts\` → IR \`.json\` → 可导入的 \`.gia\`。

## 快速开始（需本机自行安装）
\`\`\`bash
npm create genshin-ts@latest
# 或全局 CLI
npm i -g genshin-ts   # 包名以官方 README 为准
gsts --help
npm run build
npm run dev
\`\`\`

## 风格
- API 形如 \`g.server(...).on(...)\`、定时器等，可注入本地地图（路径由你本地配置）。
- 模板含 AI 友好文件：CLAUDE.md / AGENTS.md。
- 文档：https://gsts.moe/ ｜ 仓库：https://github.com/josStorer/genshin-ts

## 相关底层研究（进阶）
- Wu-Yijun GIA/DSL/IR 工具包
- Ayaya 离线沙箱 + Python Graph Code → \`.gil\`/\`.gia\`

---
${community}
`;
  return textResult(text);
}

/** Exported for smoke tests without starting stdio transport. */
export const handlers = {
  list_skills: handleListSkills,
  get_skill: handleGetSkill,
  search_knowledge: handleSearchKnowledge,
  lookup_official_doc: handleLookupOfficialDoc,
  diagnose: handleDiagnose,
  minigame_checklist: handleMinigameChecklist,
  list_community_tools: handleListCommunityTools,
  recommend_workflow: handleRecommendWorkflow,
  genshin_ts_hint: handleGenshinTsHint,
};
