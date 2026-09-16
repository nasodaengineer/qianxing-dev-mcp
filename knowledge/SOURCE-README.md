# 千星奇域（Miliastra Wonderland）UGC 技能草稿

基于官方《原神千星奇域·综合指南》整理的可复用助手技能草稿（SKILL body）。正文偏中文；步骤保持通用、可执行。

官方入口：https://act.mihoyo.com/ys/ugc/tutorial/  
静态目录 API：`https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/catalog.json`  
正文：`…/zh-cn/{path_id}/content.html?v=1016`  
完整目录快照：见同目录 [OFFICIAL-TOC.md](./OFFICIAL-TOC.md)（约 207 条）

社区对照：米游社「千星奇域 UGC入门教程」https://www.miyoushe.com/ys/article/71094964

---

## 草稿技能一览

| 文件 | Suggested name | 覆盖要点 |
|------|----------------|----------|
| [qianxing-sandbox-basics.md](./qianxing-sandbox-basics.md) | 千星沙箱与编辑器基础 | 四模式、系统菜单、沙箱窗口、动态/静态、试玩、`.gia` 导入导出 |
| [qianxing-node-graphs.md](./qianxing-node-graphs.md) | 节点图类型与挂载 | 服务端/客户端类型表、挂载入口、执行流/运算流、强类型、过滤器 |
| [qianxing-variables-signals.md](./qianxing-variables-signals.md) | 自定义变量、节点图变量与信号 | 三层数据选型、容器引用传值、信号解耦 |
| [qianxing-collision-interaction.md](./qianxing-collision-interaction.md) | 碰撞、触发器与交互判定 | 原生/额外碰撞 vs 触发器+触发源、命中检测 |
| [qianxing-combat-skills-jobs.md](./qianxing-combat-skills-jobs.md) | 战斗、技能与职业 | 阵营、战斗属性/设置、技能时间轴、职业打包 |
| [qianxing-scene-generation.md](./qianxing-scene-generation.md) | 场景生成模板 | 预设/自建、层级剔除与植被伴生、参数调优 |
| [qianxing-minigame-design.md](./qianxing-minigame-design.md) | 小玩法从构思到试玩清单 | 端到端 checklist + 最小「踩圈得分」实例 |
| [qianxing-debug-publish.md](./qianxing-debug-publish.md) | 调试、负载与发布准备 | 日志、试玩校验 vs 风险检查、负载、上传前清单 |

---

## 官方 TOC 覆盖地图（相对 catalog）

### 已深读并写入技能
- 界面介绍：整体界面、实体摆放、元件库、试玩、千星沙箱、资产导入导出、编辑工具、奇域资产中心（部分）
- 概念：变换/原生碰撞、阵营、自定义变量、碰撞触发器/源、额外碰撞、命中检测、节点图总览+基础概念+编辑指引
- 高级：技能、职业、单位状态（部分）、场景生成模板、关卡结算、界面控件/控件组（概要）
- 附录：节点图变量、信号、节点图日志
- 辅助：负载计算、风险检查

### 仅进 TOC / 浅覆盖（技能中点到但未逐页精读）
- 地形编辑、多人试玩、撤销还原、关卡设置全文
- 玩家/角色/造物/物件/水物件/白盒/本地投射物/复杂造物 各专章
- 多数通用组件：运动器、定时器、跟随/投射、背包、商店、铭牌、气泡、光源、寻路阻挡、物件镜头等
- 特效、预设状态、技能动画资产
- 各具体 UI 控件专页（交互按钮、进度条、卡牌选择器、全屏动效…）
- 外围系统大半（排行榜、段位、成就、礼盒、任务、订阅…）
- 资源系统（道具/装备/货币/背包/掉落/商店）细节
- 节点介绍整棵树（服务器/客户端各类执行·事件·查询·运算节点百科）
- 附录：能力单元效果、造物行为模式图鉴、字典/结构体/复合节点/泛型引脚、编辑项范围限制、经典模式角色编号等

### Coverage gaps / 未能充分加载的内容
1. **米游社合集正文**：`WebFetch` 对 https://www.miyoushe.com/ys/article/71094964 几乎只返回壳页；未逐期抓取 35 期实操文。技能中仅用搜索摘要中的章节目录作学习路径对照。
2. **官方 SPA 页**：直接抓 `act.mihoyo.com` / `act.hoyoverse.com` HTML 多为壳；正文改走 `act-webstatic…/content.html` 成功。部分 **父级目录页**（如「界面介绍」「概念介绍」「附录」「节点图高级特性」根页）本身几乎无正文（仅引导），属预期。
3. **未批量下载的大量节点百科与 UI/外围/资源专章**：若要做「节点速查」「UI 控件大全」类技能，需第二轮按 catalog 继续拉 `content.html`。
4. **英文 SEA catalog** 可用（`…/knowledge/sea/en-us/catalog.json`），本次技能正文以 CN 为准。
5. **游戏内实际 UI 与文档截图差异**：未进客户端验证；草稿以文档为准，遇版本差应以现网编辑器为准。

---

## 建议后续迭代
- 按社区第 2/3 章补：定时器、跟随运动器、过滤器实战、字典/结构体、背包商店。
- 拆或增补：`qianxing-ui-controls`、`qianxing-nodes-cookbook`（高频事件/执行节点菜谱）。
- 将各草稿加上 YAML frontmatter（`name` / `description`）即可升级为正式 Agent Skill。
