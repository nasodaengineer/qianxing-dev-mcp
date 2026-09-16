# FETCH-LOG

Fetched at: 2026-09-16 16:57:51 CST

## Official CDN (`act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/`)

- Catalog: `catalog-raw.json` / filtered `catalog-filtered.json` (**98** target pages)
- Attempted content.html: **98**
- Succeeded with usable body: **97**
- Empty/stub parent marked emptyish: **1** (资源系统 parent)
- Tiny directory shells (<800B, still saved): **12** (节点介绍/服务器节点/客户端节点 若干父级、外围系统父级等)
- Failed HTTP: **0**
- Individual **node entries extracted** from category pages: **1275** across 33 leaf docs
  - Server-side named nodes: ~485
  - Client-side named nodes (all graph types): ~790

### By area (from catalog-filtered)

| area | pages in filter |
|---|---:|
| nodes | 42 |
| nodes-related | 13 |
| ui | 24 |
| peripheral | 9 |
| resources | 7 |
| resources-related | 3 |

### Notable gaps / quirks

1. **No per-node path_id**: 节点百科是分类大页（如执行节点单页 ~799KB / 205 个 `##`），不是数百个独立 URL。已用抽取索引弥补。
2. **父级目录页**多为短介绍或空壳：`节点介绍`、`服务器节点`、`客户端节点`、各「*节点图」根、`外围系统`、`资源系统`、`节点图高级特性`。
3. HTML→MD 表格转换有冗余空 `****` 行（来自复杂 table DOM）；正文与参数表主体可读。
4. 图片仍为 CDN 外链（`.undefined` 扩展名的官方图床 URL），未本地化。

### Per-page table

见下文（与 `fetch-results.json` 同步）。

| status | bytes | h2 | area | title | path_id |
|---|---:|---:|---|---|---|
| SHELL | 235 | 0 | nodes | 节点介绍 | `mhsok60iqlxk` |
| SHELL | 314 | 0 | nodes | 客户端节点 | `mhlv230i3opc` |
| SHELL | 136 | 0 | nodes | 角色技能节点图 | `mhuf56rvxhgm` |
| OK | 3125 | 1 | nodes | 其它节点 | `mhor3u09y7u0` |
| OK | 272069 | 44 | nodes | 执行节点 | `mh6obvipqv1g` |
| OK | 209059 | 73 | nodes | 查询节点 | `mholjx05ji8w` |
| OK | 4757 | 2 | nodes | 流程控制节点 | `mhxppurzujfq` |
| OK | 142496 | 47 | nodes | 运算节点 | `mhfmxw9fn6n6` |
| SHELL | 80 | 0 | nodes | 角色操控技能节点图 | `mho2iu0eaia0` |
| OK | 3167 | 1 | nodes | 其它节点 | `mhodmo0n3xg8` |
| OK | 288783 | 48 | nodes | 执行节点 | `mhf9gq9ssw9e` |
| OK | 230632 | 80 | nodes | 查询节点 | `mh65asiyhv2k` |
| OK | 4757 | 2 | nodes | 流程控制节点 | `mhxc8ord091y` |
| OK | 142496 | 47 | nodes | 运算节点 | `mho82r0ip7v4` |
| SHELL | 130 | 0 | nodes | 过滤器节点图 | `mhcnh29kjjua` |
| OK | 6193 | 2 | nodes | 其它节点 | `mhbgxo0eavlk` |
| OK | 200982 | 70 | nodes | 查询节点 | `mh2crq9jzueq` |
| OK | 142496 | 47 | nodes | 运算节点 | `mhte5piu3it0` |
| SHELL | 136 | 0 | nodes | 造物技能节点图 | `mhlgj60615uw` |
| OK | 3190 | 1 | nodes | 其它节点 | `mh84c29jwjgy` |
| OK | 303108 | 38 | nodes | 执行节点 | `mhz064iplia4` |
| OK | 152362 | 52 | nodes | 查询节点 | `mhpw06rvah3a` |
| OK | 2386 | 1 | nodes | 流程控制节点 | `mhq1k3rzp6oe` |
| OK | 162012 | 47 | nodes | 运算节点 | `mh7ys59fhtvu` |
| SHELL | 149 | 0 | nodes | 造物状态决策节点图 | `mhukp3r0c71q` |
| OK | 5255 | 1 | nodes | 其它节点 | `mhbbdr09w60g` |
| OK | 3361 | 1 | nodes | 执行节点 | `mh277t9fl4tm` |
| OK | 104317 | 40 | nodes | 查询节点 | `mhk4furvds12` |
| OK | 4750 | 2 | nodes | 流程控制节点 | `mhk9zrrzshm6` |
| OK | 127927 | 43 | nodes | 运算节点 | `mhb5tu05hgfc` |
| SHELL | 132 | 0 | nodes | 造物状态节点图 | `mhchx59g4u96` |
| OK | 5083 | 1 | nodes | 其它节点 | `mht31vila3ms` |
| OK | 109206 | 14 | nodes | 执行节点 | `mhb09x012qu8` |
| OK | 104680 | 40 | nodes | 查询节点 | `mh1w3z96rpne` |
| OK | 4757 | 2 | nodes | 流程控制节点 | `mh21nw9b6f8i` |
| OK | 127927 | 43 | nodes | 运算节点 | `mhjyvxrqz2fy` |
| SHELL | 172 | 0 | nodes | 服务器节点 | `mhuto3r800b2` |
| OK | 307851 | 65 | nodes | 事件节点 | `mhn7ko01v3yw` |
| OK | 799141 | 205 | nodes | 执行节点 | `mhw66orrrfkm` |
| OK | 480926 | 151 | nodes | 查询节点 | `mhwbqlrw655q` |
| OK | 4750 | 2 | nodes | 流程控制节点 | `mhe8yn9bysd6` |
| OK | 229459 | 62 | nodes | 运算节点 | `mhnd4l069tk0` |
| OK | 37005 | 11 | nodes-related | 节点图 | `mhjwjrr5n73i` |
| OK | 104987 | 13 | nodes-related | 基础概念 | `mhk23ora1wom` |
| OK | 23470 | 5 | nodes-related | 节点图编辑指引 | `mhb3ho0k5l2w` |
| SHELL | 322 | 0 | nodes-related | 节点图高级特性 | `mhk7nlregm9q` |
| OK | 19490 | 0 | nodes-related | 信号 | `mhlaj0r9bldi` |
| OK | 28566 | 7 | nodes-related | 复合节点 | `mhty17iqeht0` |
| OK | 4354 | 3 | nodes-related | 复合节点图日志 | `mhip8yit341o` |
| OK | 38591 | 5 | nodes-related | 字典 | `mhubgk9yy8gy` |
| OK | 6760 | 5 | nodes-related | 客户端节点图日志 | `mhrnuz9izfne` |
| OK | 13846 | 4 | nodes-related | 泛型引脚 | `mhkirfrna1fy` |
| OK | 39823 | 4 | nodes-related | 结构体 | `mh3fmi0t99ns` |
| OK | 22199 | 6 | nodes-related | 节点图变量 | `mhtshailzs7w` |
| OK | 7747 | 2 | nodes-related | 节点图日志 | `mhu951iz7wz8` |
| SHELL | 421 | 0 | peripheral | 外围系统 | `mhjsw9rluwou` |
| OK | 2993 | 3 | peripheral | 先行体验 | `mh8clk9nmkua` |
| OK | 13134 | 0 | peripheral | 关卡结算 | `mhx1du08nhwo` |
| OK | 3186 | 2 | peripheral | 奇匠订阅 | `mhzdzjixq98k` |
| OK | 11446 | 3 | peripheral | 奇域任务 | `mhv1zh9x9nbe` |
| OK | 15786 | 4 | peripheral | 奇域礼盒 | `mhjdhpi4sd10` |
| OK | 11592 | 2 | peripheral | 成就 | `mh65jrr2yj3i` |
| OK | 10969 | 0 | peripheral | 排行榜 | `mho2rt9ir6ay` |
| OK | 39529 | 4 | peripheral | 竞技段位 | `mhf45sisuup8` |
| EMPTY | 441 | 0 | resources | 资源系统 | `mht8l59439d6` |
| OK | 16758 | 4 | resources | 商店 | `mhi9s7isvp50` |
| OK | 14482 | 5 | resources | 掉落物 | `mhkfj1iilnck` |
| OK | 9136 | 0 | resources | 背包 | `mhogfq9bf86q` |
| OK | 40210 | 11 | resources | 装备 | `mhkl2yin0cxo` |
| OK | 8131 | 0 | resources | 货币 | `mh2cr30yeak0` |
| OK | 13304 | 3 | resources | 道具 | `mhbgx0rspbqu` |
| OK | 25513 | 5 | resources-related | 商店组件 | `mho6gviqhsqs` |
| OK | 9188 | 2 | resources-related | 战利品 | `mh63ox06afy8` |
| OK | 20571 | 5 | resources-related | 背包组件 | `mh5y5001vqd4` |
| OK | 80195 | 5 | ui | 界面控件 | `mhnapxrumtzy` |
| OK | 19838 | 0 | ui | 交互按钮界面控件 | `mhwkfsitckrw` |
| OK | 4151 | 3 | ui | 全屏界面动效控件 | `mhbn4i09l5ns` |
| OK | 61202 | 3 | ui | 卡牌选择器界面控件 | `mh2teu0bmfbc` |
| OK | 3560 | 3 | ui | 图文输入框控件 | `mh496c08hooo` |
| OK | 13158 | 2 | ui | 图片控件 | `mh2oih9jou22` |
| OK | 2525 | 0 | ui | 弹窗界面控件 | `mhen7r0djxkg` |
| OK | 114334 | 10 | ui | 悬浮交互页控件 | `mh2u2e9o3jn6` |
| OK | 24614 | 0 | ui | 文本框界面控件 | `mhnltrr3g966` |
| OK | 9767 | 4 | ui | 消息队列控件 | `mhs1f7ibtc6c` |
| OK | 16970 | 3 | ui | 特殊数字控件 | `mhkwucr8awfq` |
| OK | 14845 | 7 | ui | 状态显示区控件 | `mh4ve00q4j14` |
| OK | 4092 | 3 | ui | 界面动效控件 | `mh2iyk9fa4gy` |
| OK | 11790 | 5 | ui | 自定义小地图控件 | `mhls9miyjwjg` |
| OK | 33120 | 2 | ui | 自定义开关控件 | `mhkrafr3w6um` |
| OK | 32386 | 2 | ui | 自定义按钮控件 | `mhtpwgitsigc` |
| OK | 11104 | 0 | ui | 计分板界面控件 | `mhesro0hyn5k` |
| OK | 4930 | 0 | ui | 计时器界面控件 | `mhnrdor7uyra` |
| OK | 12469 | 0 | ui | 进度条界面控件 | `mhwpzpixrad0` |
| OK | 20745 | 0 | ui | 道具展示界面控件 | `mhjja1ipq9ck` |
| OK | 48737 | 8 | ui | 界面控件组管理 | `mhewyi0fjfvs` |
| OK | 69874 | 8 | ui | 界面布局 | `mhozt0r74ng6` |
| OK | 15835 | 4 | ui | 界面控件组 | `mhg1700h8bug` |
| OK | 4164 | 3 | ui | 素材库 | `mhwylormozcm` |

## Miyoushe 35-period series

- Collection: https://www.miyoushe.com/ys/article/71094964
- HTML curl/WebFetch: **SPA shell only** (~99KB 无正文)
- API: `https://bbs-api.miyoushe.com/post/wapi/getPostFull?post_id=...` **works**
- Periods resolved from collection link-cards: **35/35**
- Articles fetched via API: **35/35**
- Nature: almost all are **录屏·演示 video posts** (`vod_count=1`), body text ~13–15 chars (period label only)
- Stored under `miyoushe/` with `miyoushe-index.md`, `period-map.json`, per-period `.md` + `raw-*.json`

### Period map (code → post_id)

- 1.1 编辑器界面基础认识 → `71079866` ok=True vod=1
- 1.2 创建关卡与试玩 → `71079867` ok=True vod=1
- 1.3 节点图编写与挂载 → `71079870` ok=True vod=1
- 1.4 存档导入与导出 → `71079869` ok=True vod=1
- 1.5 Debug调试 → `71079887` ok=True vod=1
- 1.6 局内摆放与操作按键 → `71080285` ok=True vod=1
- 2.1 碰撞与交互 → `71081311` ok=True vod=1
- 2.2 角色设置 → `71080887` ok=True vod=1
- 2.3 镜头设置 → `71080585` ok=True vod=1
- 2.4 基础运动 → `71081814` ok=True vod=1
- 2.5 特效 → `71081015` ok=True vod=1
- 2.6 界面控件 → `71081492` ok=True vod=1
- 2.7 阵营设置 → `71081097` ok=True vod=1
- 2.8 技能设置 → `71081485` ok=True vod=1
- 2.9 角色扰动装置 → `71081312` ok=True vod=1
- 2.10 环境配置 → `71081435` ok=True vod=1
- 2.11 关卡结算 → `71081727` ok=True vod=1
- 3.1 自定义变量 → `71082203` ok=True vod=1
- 3.2 定时器 → `71096476` ok=True vod=1
- 3.3 跟随运动器 → `71096475` ok=True vod=1
- 3.4 自定义挂接点 → `71096473` ok=True vod=1
- 3.5 单位状态 → `71096520` ok=True vod=1
- 3.6 信号通信 → `71096472` ok=True vod=1
- 3.7 过滤节点图 → `71096523` ok=True vod=1
- 3.8 投射运动器 → `71096562` ok=True vod=1
- 3.9 能力单元 → `71096522` ok=True vod=1
- 3.10 命中与受击 → `71096521` ok=True vod=1
- 3.11 铭牌与气泡对话 → `71096561` ok=True vod=1
- 3.12 卡牌选择器 → `71096550` ok=True vod=1
- 3.13 字典与结构体 → `71096813` ok=True vod=1
- 3.14 掉落物、道具、背包 → `71096524` ok=True vod=1
- 3.15 装备 → `71096548` ok=True vod=1
- 3.16 货币与商店 → `71096549` ok=True vod=1
- 3.17 小地图标识 → `71096551` ok=True vod=1
- 3.18 描边与透视 → `71096547` ok=True vod=1

## Outputs checklist

- [x] catalog-filtered.json
- [x] nodes/ (+ related/, node-index.json)
- [x] ui/
- [x] peripheral/
- [x] resources/ (+ related/)
- [x] SUMMARIES/{nodes,ui,peripheral,resources}-overview.md
- [x] drafts/qianxing-{nodes-cookbook,ui-controls,peripheral-systems,resource-systems}.md
- [x] miyoushe/ + miyoushe-index.md
- [x] FETCH-LOG.md
