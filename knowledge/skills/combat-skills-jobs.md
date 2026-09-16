# qianxing-combat-skills-jobs

## Suggested name
战斗、技能与职业

## Suggested description
在创作者配置阵营与战斗属性、做自定义技能时间轴、职业打包、单位受击/索敌，或经典/超限技能差异不清楚时使用。

---

## Body

### 配置地图（先问清玩法）
1. **关卡设置 → 阵营**：定义阵营名、默认归属、阵营关系（关系是 **单向** 的敌对/友善）。
2. **实体基础战斗属性**：生命/攻击/防御；造物还可配等级成长曲线（无成长 / 预制 / 自定义）。实际值 = 基础 × 等级倍率（还可能被装备、单位状态改动）。
3. **特化配置 → 战斗设置**：不可元素附着、不可锁定、不可被友方/敌方索敌选中（注意：仍可能被选为技能攻击目标）、子弹追踪点、受击/击倒特效等。
4. **战斗预设**：
   - **技能**：动画 + 客户端技能节点图
   - **职业**：打包镜头/布局/属性/技能/状态/节点图（切换时覆写一次）
   - **单位状态 / 道具 / 本地投射物**

### 技能（战斗预设 → 技能）
技能三件事：播角色动画、在时间轴触发 **客户端节点图**、挂技能状态窗口。

**技能类型**：瞬发 / 长按 / 普通 / 连段 / 瞄准 / 空中 / 套组（如蹲伏）。

常用参数：冷却、次数、消耗（技能资源）、索敌范围（圆柱/扇形）、空中/受击/游泳/攀爬可用性、生命周期次数上限销毁等。

**动画编辑时间轴**：
- 动作轴：选角色动画（尺度）
- 事件轨道：开始 / 结束 / **节点图事件**（按进度打点挂技能节点图） / 状态轨道（持续表现）
- 坑：节点图事件轨道极小概率跳事件 → **关键逻辑放结束轨道兜底**
- 角色技能节点图：**超限模式**；造物技能：经典+超限

技能节点图从「节点图开始」顺次执行（非事件驱动）。可用信号把结果通知服务端图。

### 职业（战斗预设 → 职业）
职业 ≈ 打包一整套玩家/角色初始配置，切换时统一覆写（等级除外会记忆）。

可配：镜头模板、主屏布局、扫描规则、跳跃/冲刺/攀爬/滑翔许可、等级与升级经验、基础战斗属性与成长、仇恨倍率、附加单位状态、抗打断三段状态（抗打断→易受打断→受保护）、职业技能槽（含自定义冲刺/空中技能）、职业组件（玩家：自定义变量/单位状态；角色：另加小地图/铭牌/挂接点）、职业节点图（玩家图/角色图）。

注意：「初始化角色技能」会把技能 **还原成职业模板默认技能**。

### 阵营与索敌协作
- 命中检测/造物 AI/攻击盒会读阵营关系。
- 「不可被敌方阵营索敌选中」不等于完全免疫技能点名。
- 先在关卡定义阵营，再在实体基础信息里选阵营。

### 协助时应索取
- 玩法是 PvE / PvP / 合作；经典还是超限
- 阵营关系表截图
- 技能：类型 + 时间轴（尤其节点图事件点）截图
- 职业：技能槽与节点图页签截图
- 出问题实体的战斗设置 / 基础战斗属性页

### Sources
- 技能 `mho81frl33im` — https://act.mihoyo.com/ys/ugc/tutorial/detail/mho81frl33im
- 技能资源 `mh6ate95agb6` — https://act.mihoyo.com/ys/ugc/tutorial/detail/mh6ate95agb6
- 技能变量 `mhhzqw98264i` — https://act.mihoyo.com/ys/ugc/tutorial/detail/mhhzqw98264i
- 职业 `mhodlcrpht3q` — https://act.mihoyo.com/ys/ugc/tutorial/detail/mhodlcrpht3q
- 基础战斗属性 `mhvyqz9xwu0q` — https://act.mihoyo.com/ys/ugc/tutorial/detail/mhvyqz9xwu0q
- 战斗设置 `mha42r0cwx74` — https://act.mihoyo.com/ys/ugc/tutorial/detail/mha42r0cwx74
- 阵营 `mhe1ixri46ta` — https://act.mihoyo.com/ys/ugc/tutorial/detail/mhe1ixri46ta
- 单位状态（高级）`mh6rh59iil2i` — https://act.mihoyo.com/ys/ugc/tutorial/detail/mh6rh59iil2i
- 仇恨配置 `mhw9ut96q96y` — https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw9ut96q96y
- 战斗预设界面 `mhexhcr1qjh2` — https://act.mihoyo.com/ys/ugc/tutorial/detail/mhexhcr1qjh2
