# qianxing-dev-mcp

千星奇域（Miliastra Wonderland / 原神 UGC）**开发工具向** MCP 服务器（TypeScript / stdio）。

面向 UGC 开发：脚手架 genshin-ts 工程、查节点做 codegen、生成 TypeScript 逻辑 stub、编译出 `.gia`。  
知识检索 / 技能草稿仍可用，但是**次要**能力。

**不是**游戏客户端修改器；`inject_hint` 只打印本机配置步骤，不宣称向实时游戏注入。

## 从想法到 .gia（3 步）

1. **`scaffold_project`** — 在目标目录生成最小 genshin-ts 工程（`src/main.ts` + `gsts.config.ts`）
2. **`generate_logic`** + **`lookup_node`** — 生成可粘贴的 `g.server(...).on(...)` stub，并用 1275 节点索引核对官方节点名
3. **`compile_project`** — `npm run build` / `gsts`，收集 `dist` 下 `.gs.ts` / `.json` / `.gia`

需要本机地图注入时再看 **`inject_hint`**，自行填写 `gsts.config.ts` 的 `inject` 字段。

## 要求

- Node.js ≥ 20
- 用户工程侧会安装 `genshin-ts`（scaffold 已写入 dependency）

## 安装与构建（本 MCP）

```bash
cd /workspace/qianxing-dev-mcp
npm install
npm run build
npm test
```

## Cursor MCP 配置

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

## 工具一览

### 开发主工具

| 工具 | 参数 | 作用 |
|------|------|------|
| `scaffold_project` | `targetDir`, `name?`, `mode?` classic\|beyond | 手写最小 genshin-ts 工程 |
| `compile_project` | `projectDir` | 跑 build，返回日志 + dist 产物 |
| `lookup_node` | `query`, `side?`, `limit?` | 查节点索引（JSON，便于 codegen） |
| `list_nodes` | `category?`, `side?`, `prefix?` | 列出匹配节点名 |
| `generate_logic` | `goal`, `mode?`, `graphType?` | 生成 genshin-ts TS stub |
| `project_status` | `projectDir` | 检查是否像 genshin-ts 工程 |
| `inject_hint` | — | 打印本地 inject 配置步骤 |
| `diagnose` | `symptom` | 开发/试玩故障排查 |

### 次要知识工具

| 工具 | 作用 |
|------|------|
| `list_skills` / `get_skill` | 技能草稿 |
| `search_knowledge` | 知识库检索（节点请用 `lookup_node`） |
| `lookup_official_doc` | 官方 TOC |
| `minigame_checklist` | 小玩法清单 |
| `list_community_tools` | 工具对照 |
| `recommend_workflow` | 推荐调用顺序 |

## 数据

- 节点索引：`knowledge/nodes/node-index.json`（1275）
- 精简副本：`data/nodes.json`（运行时优先 knowledge 索引）


## 端到端示例（本仓库验证）

```bash
# 1) scaffold
# MCP: scaffold_project { targetDir: "/workspace/qx-demo-score", name: "qx-demo-score" }
# 2) generate_logic → 写入 src/main.ts（进入触发器得分 + 30s 结算）
# 3) compile
cd /workspace/qx-demo-score && npm install && npm run build
# → dist/src/main.gs.ts / main.json / main.gia
```

说明：scaffold 默认在 `gsts.config.ts` 写入 `lang: 'en'`，避免部分 Linux 环境因系统 locale 导致 `Incorrect locale information provided`。可按需改成 `'zh-CN'`。

## 编译说明

- scaffold **不**交互运行 `npm create genshin-ts`；布局对齐 [gsts.moe](https://gsts.moe) / 官方模板（`g.server`、`gsts.config.ts`、`npm run build` → `gsts`）。
- 未配置 `inject.mapId` / `nodeGraphId` 时，`gsts` 仍应尝试编译；可能出现注入相关警告——属预期，以 dist 产物或清晰错误为准。
- 完整注入需要 Windows + 本机 BeyondLocal 路径；本 MCP 只给配置提示。

## 安全

- 禁止：游戏破解、盗版、绕过反作弊、未授权向他人客户端注入。
- 不 git push 到 GitHub，除非用户明确要求。

## 开发结构

```
src/
  index.ts       # stdio MCP 入口
  handlers.ts    # 工具实现
  project.ts     # scaffold / compile / status
  generate.ts    # logic stub
  nodes.ts       # node-index 查询
  knowledge.ts   # 次要知识检索
data/nodes.json
knowledge/nodes/node-index.json
test/smoke.test.ts
```

## License

MIT
