#!/usr/bin/env node
/**
 * qianxing-dev-mcp — 千星奇域 UGC 知识 MCP（stdio）
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  handleDiagnose,
  handleGenshinTsHint,
  handleGetSkill,
  handleListCommunityTools,
  handleListSkills,
  handleLookupOfficialDoc,
  handleMinigameChecklist,
  handleRecommendWorkflow,
  handleSearchKnowledge,
} from "./handlers.js";

const server = new McpServer({
  name: "qianxing-dev-mcp",
  version: "1.0.0",
});

server.registerTool(
  "list_skills",
  {
    description: "列出全部千星奇域技能草稿（id / 名称 / 简介）",
  },
  async () => handleListSkills(),
);

server.registerTool(
  "get_skill",
  {
    description: "按 id 读取技能草稿全文（如 sandbox-basics、node-graphs）",
    inputSchema: {
      id: z.string().describe("技能 id，见 list_skills"),
    },
  },
  async (args) => handleGetSkill(args),
);

server.registerTool(
  "search_knowledge",
  {
    description: "在技能正文、官方目录、社区工具说明中全文检索",
    inputSchema: {
      query: z.string().describe("检索关键词"),
      limit: z.number().int().min(1).max(50).optional().describe("返回条数，默认 8"),
    },
  },
  async (args) => handleSearchKnowledge(args),
);

server.registerTool(
  "lookup_official_doc",
  {
    description: "在官方综合指南目录（OFFICIAL-TOC）中查找文档条目与 URL",
    inputSchema: {
      query: z.string().describe("文档标题或关键词，如「碰撞触发器」「技能」"),
    },
  },
  async (args) => handleLookupOfficialDoc(args),
);

server.registerTool(
  "diagnose",
  {
    description: "根据故障症状给出排查步骤，并推荐相关技能 id",
    inputSchema: {
      symptom: z.string().describe("现象描述，如「走进去没反应」「变量 UI 读不到」"),
    },
  },
  async (args) => handleDiagnose(args),
);

server.registerTool(
  "minigame_checklist",
  {
    description: "生成小玩法从构思到试玩的端到端 checklist",
    inputSchema: {
      players: z.string().optional().describe("人数/对抗或合作，如「单人」或「4 人对抗」"),
      mode: z.string().optional().describe("经典 / 超限"),
      loop: z.string().optional().describe("核心循环一句话"),
    },
  },
  async (args) => handleMinigameChecklist(args),
);

server.registerTool(
  "list_community_tools",
  {
    description: "列出官方入口与社区开源工具链（genshin-ts 等）对照",
  },
  async () => handleListCommunityTools(),
);

server.registerTool(
  "recommend_workflow",
  {
    description: "按创作目标推荐工具调用顺序与技能阅读路径",
    inputSchema: {
      goal: z.string().describe("目标，如「做个踩圈得分小玩法」「调试节点图」"),
    },
  },
  async (args) => handleRecommendWorkflow(args),
);

server.registerTool(
  "genshin_ts_hint",
  {
    description: "社区 genshin-ts（TypeScript→GIA）使用提示；不含破解或未授权注入",
  },
  async () => handleGenshinTsHint(),
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("qianxing-dev-mcp failed:", err);
  process.exit(1);
});
