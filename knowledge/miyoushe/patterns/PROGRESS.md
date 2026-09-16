# Miyoushe UGC → MCP patterns PROGRESS

- updated: 2026-09-16 17:35 CST
- Ch1 ASR: **6/6 ok** (faster-whisper `tiny`, cpu/int8; API TLS → `raw-*.json` URL fallback)
- Priority Ch2–3 ASR (short/recipe-critical): **8** additional transcripts (total ASR **14/35**)
- Period pattern notes: **35/35**
- Catalog recipes: **10**
- MCP: `list_patterns` / `get_pattern` / `generate_logic.patternId` — tests green
- Git: **not pushed** (per request)

## Example pattern ids
- `collision_trigger_setup`
- `custom_variable_score`
- `signal_bus`
- `shop_open`
- `timer_stage_settle`
- `mount_entity_graph`
- `hit_detection_projectile`
- `loot_inventory_drop`
- `follow_mover_camera`
- `debug_log_print`

## Counts
| metric | count |
|---|---:|
| period notes | 35 |
| catalog recipes | 10 |
| ASR transcripts | 14 |
| Ch1 ASR | 6 |

## Per-period

| period | post_id | title | ASR | pattern |
|---|---|---|---|---|
| 1.1 | `71079866` | 编辑器界面基础认识 | asr_ok | yes |
| 1.2 | `71079867` | 创建关卡与试玩 | asr_ok | yes |
| 1.3 | `71079870` | 节点图编写与挂载 | asr_ok | yes |
| 1.4 | `71079869` | 存档导入与导出 | asr_ok | yes |
| 1.5 | `71079887` | Debug调试 | asr_ok | yes |
| 1.6 | `71080285` | 局内摆放与操作按键 | asr_ok | yes |
| 2.1 | `71081311` | 碰撞与交互 | pattern_only | yes |
| 2.2 | `71080887` | 角色设置 | pattern_only | yes |
| 2.3 | `71080585` | 镜头设置 | pattern_only | yes |
| 2.4 | `71081814` | 基础运动 | pattern_only | yes |
| 2.5 | `71081015` | 特效 | pattern_only | yes |
| 2.6 | `71081492` | 界面控件 | pattern_only | yes |
| 2.7 | `71081097` | 阵营设置 | pattern_only | yes |
| 2.8 | `71081485` | 技能设置 | pattern_only | yes |
| 2.9 | `71081312` | 角色扰动装置 | pattern_only | yes |
| 2.10 | `71081435` | 环境配置 | pattern_only | yes |
| 2.11 | `71081727` | 关卡结算 | pattern_only | yes |
| 3.1 | `71082203` | 自定义变量 | pattern_only | yes |
| 3.2 | `71096476` | 定时器 | asr_ok | yes |
| 3.3 | `71096475` | 跟随运动器 | asr_ok | yes |
| 3.4 | `71096473` | 自定义挂接点 | pattern_only | yes |
| 3.5 | `71096520` | 单位状态 | pattern_only | yes |
| 3.6 | `71096472` | 信号通信 | asr_ok | yes |
| 3.7 | `71096523` | 过滤节点图 | pattern_only | yes |
| 3.8 | `71096562` | 投射运动器 | pattern_only | yes |
| 3.9 | `71096522` | 能力单元 | pattern_only | yes |
| 3.10 | `71096521` | 命中与受击 | asr_ok | yes |
| 3.11 | `71096561` | 铭牌与气泡对话 | pattern_only | yes |
| 3.12 | `71096550` | 卡牌选择器 | pattern_only | yes |
| 3.13 | `71096813` | 字典与结构体 | pattern_only | yes |
| 3.14 | `71096524` | 掉落物、道具、背包 | asr_ok | yes |
| 3.15 | `71096548` | 装备 | pattern_only | yes |
| 3.16 | `71096549` | 货币与商店 | asr_ok | yes |
| 3.17 | `71096551` | 小地图标识 | asr_ok | yes |
| 3.18 | `71096547` | 描边与透视 | asr_ok | yes |

## Pipeline notes
- Prefer 480P; delete mp4 after ASR; one video at a time.
- Signed URL refresh: live API currently TLS EOF from box — use cached raw JSON URLs; re-fetch when API recovers.
- Remaining periods: pattern notes grounded in title + official nodes; `needs_visual_pass=true` until ASR.
