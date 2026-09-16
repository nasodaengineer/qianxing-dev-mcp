# qianxing-dev-mcp

千星奇域（Miliastra Wonderland / 原神 UGC）**知识向** MCP 服务器（TypeScript / stdio）。

为助手提供技能草稿、官方目录检索、故障诊断、小玩法清单、社区工具链指引。  
**不是**游戏客户端修改器，也不提供破解或未授权注入。

## 要求

- Node.js ≥ 20
- 已安装依赖并完成构建

## 安装与构建

```bash
cd /workspace/qianxing-dev-mcp
npm install
npm run build
npm test
```

- `npm run build` → 编译到 `dist/`
- `npm start` → 启动 stdio MCP（供编辑器拉起，勿在普通终端交互使用）
- `npm test` → 冒烟测试（断言技能数 ≥ 8）

## Cursor MCP 配置

将下列片段写入 Cursor 的 MCP 设置（`mcp.json`）。**command 使用本机绝对路径**：

```json
{
  "mcpServers": {
    "qianxing-dev-mcp": {
      "command": "node",
      "args": ["/workspace/qianxing-dev-mcp/dist/index.js"]
    }
  }
}
```

构建产物绝对路径：

`/workspace/qianxing-dev-mcp/dist/index.js`

知识数据目录（运行时相对包根读取，无需拷贝进 dist）：

`/workspace/qianxing-dev-mcp/knowledge/`

## 工具一览

| 工具 | 参数 | 作用 |
|------|------|------|
| `list_skills` | — | 列出 8+ 技能草稿 |
| `get_skill` | `id` | 读取技能全文 |
| `search_knowledge` | `query`, `limit?` | 技能 + 目录 + 社区文档检索 |
| `lookup_official_doc` | `query` | 官方 TOC 条目与 URL |
| `diagnose` | `symptom` | 故障树排查建议 |
| `minigame_checklist` | `players?`, `mode?`, `loop?` | 小玩法端到端清单 |
| `list_community_tools` | — | 官方/社区工具对照 |
| `recommend_workflow` | `goal` | 按目标推荐调用顺序 |
| `genshin_ts_hint` | — | genshin-ts（TS→GIA）提示 |

## 知识覆盖

- **已落地 deep research**：节点百科索引（`knowledge/nodes/node-index.json`）、UI / 外围 / 资源正文与概览、4 份 deep skill drafts（`nodes-cookbook` / `ui-controls` / `peripheral-systems` / `resource-systems`）、米游社苦雪合集索引（正文多为视频壳）。
- `search_knowledge` 递归检索整个 `knowledge/`（不仅 skills/）。
- **仍待补**：原神 **7.1** 客户端脚本模块等细则（官方文档未完全公开，本 MCP 暂不覆盖）。
- **米游社**：合集索引与分期末数据已收录；内容以视频为主，未做 ASR 转写。

## 安全与范围说明

- **禁止用途**：游戏破解、盗版、绕过反作弊、未授权向他人客户端注入。
- **社区 CLI**：仅文档指引；请在你本机自行安装并配置本地路径，本仓库不 vendoring 逆向二进制。
- **版本缺口**：原神 **7.1** 预告的「客户端脚本模块」等能力，官方文档尚未完全公开；本 MCP **暂不覆盖 7.1 客户端脚本细则**，以现网编辑器与后续官方文档为准。
- 知识来源：官方《综合指南》目录快照、整理的技能草稿，以及 deep research 包（见 `knowledge/`；原始 HTML 见研究归档说明）。

## 开发结构

```
knowledge/          # 技能、deep 语料与目录（运行时读取）
  skills/           # 技能 index + 原 8 份草稿
  drafts/           # deep skill bodies（由 index 引用）
  summaries/ nodes/ ui/ peripheral/ resources/ miyoushe/
src/
  index.ts          # stdio MCP 入口
  handlers.ts       # 工具实现（可供测试直接 import）
  knowledge.ts      # 文件加载与检索
test/smoke.test.ts
```

## License

MIT
