#!/usr/bin/env node
/**
 * qianxing-dev-mcp — 千星奇域 UGC 开发工具 MCP（stdio）
 * Primary: scaffold / compile / node lookup / generate_logic / patterns
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  handleCompileProject,
  handleDiagnose,
  handleGenerateLogic,
  handleGetSkill,
  handleInjectHint,
  handleListCommunityTools,
  handleListNodes,
  handleListSkills,
  handleLookupNode,
  handleLookupOfficialDoc,
  handleMinigameChecklist,
  handleProjectStatus,
  handleRecommendWorkflow,
  handleScaffoldProject,
  handleSearchKnowledge,
  handleListPatterns,
  handleGetPattern,
  handleLookupSystem,
} from "./handlers.js";

const server = new McpServer({
  name: "qianxing-dev-mcp",
  version: "1.1.0",
});

/* ---- Primary development tools ---- */

server.registerTool(
  "scaffold_project",
  {
    description:
      "在 targetDir 创建最小可用 genshin-ts 工程（package.json / gsts.config.ts / src/main.ts）。mode: classic|beyond",
    inputSchema: {
      targetDir: z.string().describe("目标目录绝对或相对路径"),
      name: z.string().optional().describe("项目显示名，默认取目录名"),
      mode: z.enum(["classic", "beyond"]).optional().describe("默认 beyond"),
    },
  },
  async (args) => handleScaffoldProject(args),
);

server.registerTool(
  "compile_project",
  {
    description:
      "在 projectDir 运行 npm run build / gsts，返回 stdout/stderr 与 dist 产物列表（.gia/.json/.gs.ts）",
    inputSchema: {
      projectDir: z.string().describe("genshin-ts 工程目录"),
    },
  },
  async (args) => handleCompileProject(args),
);

server.registerTool(
  "lookup_node",
  {
    description:
      "在 1275 节点索引中查询节点（名/描述/侧/分类/参数），返回 JSON 便于 codegen",
    inputSchema: {
      query: z.string().describe("关键词，如「进入碰撞」「结算」「定时器」"),
      side: z.enum(["server", "client", "any"]).optional().describe("默认 any"),
      limit: z.number().int().min(1).max(50).optional().describe("默认 10"),
    },
  },
  async (args) => handleLookupNode(args),
);

server.registerTool(
  "list_nodes",
  {
    description: "按 category / side / prefix 列出节点名，便于发现 API",
    inputSchema: {
      category: z.string().optional().describe("分类关键词，如 事件节点 / 执行节点"),
      side: z.enum(["server", "client", "any"]).optional(),
      prefix: z.string().optional().describe("名称前缀或包含"),
      limit: z.number().int().min(1).max(500).optional(),
    },
  },
  async (args) => handleListNodes(args),
);

server.registerTool(
  "generate_logic",
  {
    description:
      "根据目标生成可粘贴的 genshin-ts TypeScript stub（g.server / .on / 定时结算等），并标注对应官方节点",
    inputSchema: {
      goal: z
        .string()
        .describe("如「进入触发器得分，30 秒后结算」"),
      mode: z.enum(["beyond", "classic"]).optional(),
      graphType: z
        .enum(["entity", "characterSkill", "creationSkill", "boolFilter", "intFilter"])
        .optional()
        .describe("默认 entity（服务端实体图）"),
      patternId: z
        .string()
        .optional()
        .describe("可选：data/patterns catalog 中的 recipe id，如 collision_trigger_setup"),
    },
  },
  async (args) => handleGenerateLogic(args),
);

server.registerTool(
  "list_patterns",
  {
    description:
      "列出可复用 UGC 开发配方（碰撞触发、计分、信号、商店等），来自米游社教程蒸馏 + 官方节点名",
    inputSchema: {
      filter: z.string().optional().describe("可选关键词过滤，如 碰撞 / shop / 信号"),
    },
  },
  async (args) => handleListPatterns(args),
);

server.registerTool(
  "get_pattern",
  {
    description:
      "按 recipe id（如 collision_trigger_setup）或期次（如 2.1 / 3.16）读取完整步骤与关联节点",
    inputSchema: {
      id: z.string().describe("recipe id 或 period code"),
    },
  },
  async (args) => handleGetPattern(args),
);


server.registerTool(
  "lookup_system",
  {
    description:
      "查 UI 控件 / 外围系统 / 资源系统目录（config 字段、关联服务器节点、官方 path_id）。domain: ui|peripheral|resources；与 lookup_node 风格一致",
    inputSchema: {
      domain: z
        .enum(["ui", "peripheral", "resources"])
        .optional()
        .describe("省略则三域一起搜"),
      query: z.string().describe("关键词，如「计分板」「结算」「商店」「背包」"),
      limit: z.number().int().min(1).max(40).optional().describe("默认 8"),
    },
  },
  async (args) => handleLookupSystem(args),
);

server.registerTool(
  "project_status",
  {
    description: "检查目录是否像 genshin-ts 工程，报告 package/config/dist 产物",
    inputSchema: {
      projectDir: z.string(),
    },
  },
  async (args) => handleProjectStatus(args),
);

server.registerTool(
  "inject_hint",
  {
    description:
      "打印本地 inject 所需配置字段与步骤（不声称注入到实时游戏；需本机路径）",
  },
  async () => handleInjectHint(),
);

server.registerTool(
  "diagnose",
  {
    description: "根据开发/试玩故障症状给出排查步骤",
    inputSchema: {
      symptom: z.string().describe("如「走进去没反应」「编译失败」「变量 UI 读不到」"),
    },
  },
  async (args) => handleDiagnose(args),
);

/* ---- Secondary knowledge tools ---- */

server.registerTool(
  "list_skills",
  {
    description: "【次要】列出技能草稿",
  },
  async () => handleListSkills(),
);

server.registerTool(
  "get_skill",
  {
    description: "【次要】按 id 读取技能草稿全文",
    inputSchema: {
      id: z.string(),
    },
  },
  async (args) => handleGetSkill(args),
);

server.registerTool(
  "search_knowledge",
  {
    description: "【次要】知识库全文检索；节点请优先 lookup_node",
    inputSchema: {
      query: z.string(),
      limit: z.number().int().min(1).max(50).optional(),
    },
  },
  async (args) => handleSearchKnowledge(args),
);

server.registerTool(
  "lookup_official_doc",
  {
    description: "【次要】官方综合指南目录检索",
    inputSchema: {
      query: z.string(),
    },
  },
  async (args) => handleLookupOfficialDoc(args),
);

server.registerTool(
  "minigame_checklist",
  {
    description: "小玩法 checklist（配合 generate_logic）",
    inputSchema: {
      players: z.string().optional(),
      mode: z.string().optional(),
      loop: z.string().optional(),
    },
  },
  async (args) => handleMinigameChecklist(args),
);

server.registerTool(
  "list_community_tools",
  {
    description: "【次要】官方/社区工具对照",
  },
  async () => handleListCommunityTools(),
);

server.registerTool(
  "recommend_workflow",
  {
    description: "推荐从想法到 .gia 的工具调用顺序",
    inputSchema: {
      goal: z.string(),
    },
  },
  async (args) => handleRecommendWorkflow(args),
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("qianxing-dev-mcp failed:", err);
  process.exit(1);
});
