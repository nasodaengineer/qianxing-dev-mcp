# 查询节点

- path_id: `mholjx05ji8w`
- path: `节点介绍 / 客户端节点 / 角色技能节点图 / 查询节点`
- source: https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/content.html?v=1016
- detail: https://act.mihoyo.com/ys/ugc/tutorial/detail/mholjx05ji8w

# **一、列表相关**

## **1. 获取列表对应值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/877d457e-f5f3-437c-b6f4-67ceca56d693.undefined)

**节点功能**

返回列表中指定序号对应的值。列表中序号从0开始

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 序号 | 整数 |  |

| 入参 | 数据列表 | 泛型 |  |

| 出参 | 结果 | 泛型 |  |

## **2. 获取列表长度**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/598cdd05-0f8c-4f9e-8fda-93f8558e0ba7.undefined)

**节点功能**

获取列表长度（列表中的元素个数）

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入列表 | 泛型 |  |

| 出参 | 长度 | 整数 |  |

## **3. 获取列表最大值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/03373aca-3cf6-4680-870c-7c43a3daf89f.undefined)

**节点功能**

仅对浮点数列表和整数列表有意义，返回列表中的最大值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 列表 | 泛型 |  |

| 出参 | 最大值 | 泛型 |  |

## **4. 获取列表最小值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/cb138bec-5ab2-4e74-8711-dccf18b7777f.undefined)

**节点功能**

仅对浮点数列表和整数列表有意义，返回列表中的最小值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 列表 | 泛型 |  |

| 出参 | 最小值 | 泛型 |  |

## **5. 获取实体类型列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/79a980bf-29a7-4fac-a2d0-47e59c03ca2b.undefined)

**节点功能**

将所需的实体类型拼装为一个列表。类型分为关卡、物件、玩家、角色、造物

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 列表 | 枚举列表 |  |

## **6. 列表是否包含该值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/21379d3c-481e-4c36-b528-84daf09dc2f8.undefined)

**节点功能**

返回列表中是否包含指定值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 值 | 泛型 |  |

| 入参 | 列表 | 泛型 |  |

| 出参 | 结果 | 布尔值 |  |

## **7. 获取射线筛选类型列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/04149b66-63b4-4483-9edb-e26a4082e0da.undefined)

**节点功能**

将所需的射线筛选类型拼装为一个列表。可筛选项有受击盒、场景、物件自身碰撞

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 列表 | 枚举列表 |  |

# **二、自定义变量**

## **1. 获取自定义变量**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/28d54f58-e8c9-4dbb-a510-199db2e2703d.undefined)

**节点功能**

获取目标实体的指定自定义变量的值

如果变量不存在，则返回类型的默认值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 入参 | 变量名 | 字符串 |  |

| 出参 | 变量值 | 泛型 |  |

# **三、预设状态**

## **1. 获取预设状态**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/996dc203-a1df-4c1b-b10a-14e686a9e66c.undefined)

**节点功能**

获取指定实体的预设状态值。如果该实体没有指定的预设状态，则返回0

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 实体 | 实体 |  |

| 入参 | 预设状态索引 | 整数 |  |

| 出参 | 预设状态值 | 整数 |  |

# **四、实体相关**

## **1. 以GUID查询实体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/ce497025-9b55-43a4-a9f9-f2b40c91b1c6.undefined)

**节点功能**

根据GUID查询实体

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | GUID | GUID |  |

| 出参 | 实体 | 实体 |  |

## **2. 获取实体位置**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/185b7a30-4e24-4f48-a685-3e434b44f5b5.undefined)

**节点功能**

获取指定实体的位置

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 实体 | 实体 |  |

| 出参 | 位置 | 三维向量 |  |

## **3. 获取实体旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/fa30c092-e89e-4519-aa35-f8cd328a1adc.undefined)

**节点功能**

获取指定实体以欧拉角表示的旋转

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 实体 | 实体 |  |

| 出参 | 旋转 | 三维向量 |  |

## **4. 获取自身实体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/8cd3587a-b85c-4e76-a1be-3db6a451fec6.undefined)

**节点功能**

返回该节点图所关联的实体

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 自身实体 | 实体 |  |

## **5. 获取目标实体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/20df46c4-3a39-4b32-9776-41776495b07c.undefined)

**节点功能**

获取目标实体，根据过滤器节点图被引用的功能模块不同，其指代含义会有区别

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 目标实体 | 实体 |  |

## **6. 获取单位攻击目标**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/005544a7-26b9-4cd3-b359-a9203e18826b.undefined)

**节点功能**

获取单位实体当前正在攻击的目标实体

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 单位实体 | 实体 |  |

| 出参 | 攻击目标实体 | 实体 |  |

## **7. 获取目标挂接点位置**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/359f4ada-7171-4d19-ad11-ae9b9752f259.undefined)

**节点功能**

获取指定目标实体上对应挂接点名称的挂接点位置

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 入参 | 挂接点名称 | 字符串 |  |

| 出参 | 挂接点位置 | 三维向量 |  |

## **8. 获取目标挂接点旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/bf72d618-02e0-41dd-8904-1e9dae374891.undefined)

**节点功能**

获取指定目标实体上对应挂接点名称的挂接点旋转

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 入参 | 挂接点名称 | 字符串 |  |

| 出参 | 挂接点旋转 | 三维向量 |  |

## **9. 获取实体的类型**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/ddaa0a3c-3d60-4fb1-9e5d-0f1f6b38b790.undefined)

**节点功能**

获取指定实体的类型

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 出参 | 实体类型 | 枚举 |  |

## **10. 筛选球体范围内的实体列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/a2a188db-bf1f-49d8-8684-db639ad39b33.undefined)

**节点功能**

以特定的规则和数量上限筛选在球形范围内的实体，满足条件的实体会组成实体列表输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 半径 | 浮点数 |  |

| 入参 | 中心位置 | 三维向量 |  |

| 入参 | 筛选数量上限 | 整数 |  |

| 入参 | 筛选规则 | 枚举 | 分为默认排序、随机排序、从近到远排序 |

| 出参 | 筛选结果 | 实体列表 |  |

## **11. 筛选方形范围内的实体列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/ff9ad2c9-ff96-4c41-bacc-a88dfc3974c8.undefined)

**节点功能**

以特定的规则和数量上限筛选在方形范围内的实体，满足条件的实体会组成实体列表输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 宽度 | 浮点数 |  |

| 入参 | 高度 | 浮点数 |  |

| 入参 | 长度 | 浮点数 |  |

| 入参 | 中心位置 | 三维向量 |  |

| 入参 | 筛选数量上限 | 整数 |  |

| 入参 | 筛选规则 | 枚举 | 分为默认排序、随机排序、从近到远排序 |

| 出参 | 筛选结果 | 实体列表 |  |

## **12. 查询实体是否在场**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/ebc4de2f-c30d-45a7-9f22-b0b22d188935.undefined)

**节点功能**

查询指定实体是否在场

注意角色实体即使处于倒下状态，仍然认为在场

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 出参 | 是否在场 | 布尔值 |  |

## **13. 查询复杂造物的预设状态值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/81a5fd44-932e-4b3a-b1a5-bad76b324367.undefined)

**节点功能**

查询目标造物对应预设状态索引下的预设状态值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标造物 | 实体 |  |

| 入参 | 预设状态索引 | 整数 |  |

| 出参 | 预设状态值 | 整数 |  |

# **五、阵营相关**

## **1. 查询实体阵营**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/e08c3dfa-ca59-4bd4-9fd9-5ccd831d3258.undefined)

**节点功能**

查询目标实体的阵营

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 出参 | 阵营 | 阵营 |  |

## **2. 查询阵营是否敌对**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/7dcdc161-0e9e-4c0b-9010-6dd6baad7fe1.undefined)

**节点功能**

查询阵营1和阵营2是否敌对

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 阵营1 | 阵营 |  |

| 入参 | 阵营2 | 阵营 |  |

| 出参 | 是否敌对 | 布尔值 |  |

# **六、玩家与角色相关**

## **1. 获取指定玩家的角色实体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/91efc87c-406e-4609-9b32-41520e605250.undefined)

**节点功能**

获取指定玩家实体的角色实体

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 玩家实体 | 实体 |  |

| 出参 | 角色实体 | 实体 |  |

## **2. 获取角色归属的玩家实体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/fc7adc1c-d70c-4156-b3c7-6339df425b07.undefined)

**节点功能**

获取角色实体所归属的玩家实体

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 角色实体 | 实体 |  |

| 出参 | 所属玩家实体 | 实体 |  |

## **3. 获取在场玩家实体列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/4a360892-474a-4ab2-b405-7669a88c21c5.undefined)

**节点功能**

获取在场所有玩家实体组成的列表

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 玩家实体列表 | 实体列表 |  |

## **4. 以实体查询GUID**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/f3c9cd5a-fe7e-40b6-8e7d-69f9e4e7cd0c.undefined)

**节点功能**

查询指定实体的GUID

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 实体 | 实体 |  |

| 出参 | GUID | GUID |  |

## **5. 查询自身是否已入战**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/74853ae9-0ad7-43fa-96be-f78119e5ef53.undefined)

**节点功能**

查询该节点图关联的实体是否入战

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 是否入战 | 布尔值 |  |

## **6. 获取当前角色**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/2d6e6564-92ff-422e-82a4-4a6510f8608f.undefined)

**节点功能**

获取该玩家客户端当前控制的角色实体

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 角色实体 | 实体 |  |

## **7. 获得玩家客户端输入设备类型**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/7115b1f0-f495-4387-a047-f7e1426c7a35.undefined)

**节点功能**

获得玩家的客户端输入设备类型，根据用户界面的映射方式决定

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 输入设备类型 | 枚举 | 分为键盘鼠标、手柄、触屏 |

## **8. 获取玩家移动输入**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/e6514275-e572-49cf-82ed-51fd57d6a83d.undefined)

**节点功能**

获取当前客户端玩家移动的输入方向和输入力度

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 输入方向 | 浮点数 |  |

| 出参 | 输入力度 | 浮点数 |  |

## **9. 查询技能变量对应值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/12cbba5c-5bee-48d2-a6de-0b7d6f130be2.undefined)

**节点功能**

根据技能变量配置ID查询对应的变量值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 技能变量配置ID | 配置ID |  |

| 出参 | 变量值 | 浮点数 |  |

## **10. 获取当前关键行为**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/037a34cd-18ee-4f38-83b4-d91fa68aa4d1.undefined)

**节点功能**

获取当前关键行为记录板上所有的关键行为ID以及对应的录入时间

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 行为ID列表 | 整数列表 |  |

| 出参 | 录入时间列表 | 浮点数列表 |  |

## **11. 获取当前关键行为（高精度）**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/d496ebd9-b49b-43e8-b010-74abc4a789b8.undefined)

**节点功能**

获取当前关键行为记录板上所有的关键行为ID以及对应的录入时间，由于浮点数的精度问题，想要获取更高精度的录入时间应该选用此节点

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 行为ID列表 | 整数列表 |  |

| 出参 | 录入时间列表（s） | 整数列表 |  |

| 出参 | 录入时间列表（ms） | 整数列表 |  |

## **12. 获取当前客户端时间**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/ee1c334b-003b-4a44-99a2-5593c892cdb0.undefined)

**节点功能**

获取当前客户端的时间

如需对玩家展示节点内容，奇匠应在简介等处提前告知玩家获取客户端时间后的相关效果

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 客户端时间 | 浮点数 |  |

## **13. 获取当前客户端时间（高精度）**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/658aaee0-116b-4445-ae44-d848cbaac2b8.undefined)

**节点功能**

获取当前客户端的时间，由于浮点数的精度问题，想要获取更高精度的客户端时间应该选用此节点

如需对玩家展示节点内容，奇匠应在简介等处提前告知玩家获取客户端时间后的相关效果

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 客户端时间（s） | 整数 |  |

| 出参 | 客户端时间（ms） | 整数 |  |

## **14. 查询玩家是否正在语音聊天**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/76a6434c-e0c8-4eff-8742-69ad3ab90e71.undefined)

**节点功能**

当检测到该玩家客户端有麦克风输入时，会返回是

注意该节点必须在多人游戏(多人试玩、多人正式游玩)中逻辑才会生效，单人游戏(单人试玩、单人正式游玩)均不会生效

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 玩家实体 | 实体 |  |

| 出参 | 是否正在语音 | 布尔值 |  |

## **15. 根据技能实例ID获取技能配置ID**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/e1362432-1d84-42c9-9d22-c8cd6dd011a0.undefined)

**节点功能**

根据技能实例ID获取对应的技能配置ID

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 技能实例ID | 整数 |  |

| 出参 | 技能配置ID | 配置ID |  |

## **16. 查询指定槽位的技能实例列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/6e31bd9a-f9a6-4bce-80c9-22239157eda3.undefined)

**节点功能**

查询指定槽位的所有技能实例

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 技能槽位 | 枚举 |  |

| 出参 | 技能实例ID列表 | 整数列表 |  |

## **17. 查询指定槽位当前生效的技能实例**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/b56615cc-9718-4e45-8364-a1616d6b3b64.undefined)

**节点功能**

查询指定槽位当前位于前台的技能实例

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 技能槽位 | 枚举 |  |

| 出参 | 技能实例ID | 整数 |  |

## **18. 以技能槽位和技能配置ID查询技能实例ID**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/8ed5fbc7-b981-4d34-9827-a8090bb3ba82.undefined)

**节点功能**

根据技能槽位和技能配置ID查询对应的技能实例

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 技能槽位 | 枚举 |  |

| 入参 | 技能配置ID | 配置ID |  |

| 出参 | 技能实例ID | 整数 |  |

# **七、预瞄准**

## **1. 获取指定预瞄准的基准对象**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/04603f60-a4c4-4949-9476-4974926b43ce.undefined)

**节点功能**

获取指定预瞄准序号的基准对象，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 预瞄准序号 | 整数 |  |

| 出参 | 基准对象 | 实体 |  |

## **2. 获取预瞄结果**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/1ec6ffd1-dd58-4c8d-880f-bd45d1d27093.undefined)

**节点功能**

获取指定预瞄准的命中位置、范围内位置、最优合法目标与合法目标列表，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 预瞄准序号 | 整数 |  |

| 出参 | 命中位置 | 三维向量 |  |

| 出参 | 范围内位置 | 三维向量 |  |

| 出参 | 最优合法目标 | 实体 |  |

| 出参 | 合法目标列表 | 实体列表 |  |

## **3. 获取预瞄持续时长**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/f7f715eb-2fec-4ebd-92fc-f8e6bd603db4.undefined)

**节点功能**

获取指定预瞄准已经持续的时长（秒），仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 预瞄准序号 | 整数 |  |

| 出参 | 持续时长（s） | 浮点数 |  |

## **4. 获取当前生效的预瞄准序号**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/1d78432b-fe7d-4ae8-b575-7f70db0de906.undefined)

**节点功能**

获取当前技能上下文中正在生效的预瞄准序号，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 预瞄准序号 | 整数 |  |

## **5. 获取预瞄碰撞检测结果数量**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/4c047b98-bf6a-46bc-b435-177d16363ca7.undefined)

**节点功能**

获取指定预瞄准的碰撞检测结果数量，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 预瞄准序号 | 整数 |  |

| 出参 | 结果数量 | 整数 |  |

## **6. 获取预瞄射线命中信息**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/0fc45b86-b8bd-45cf-9567-818739db01b3.undefined)

**节点功能**

获取指定预瞄准的射线命中信息，包含命中位置与命中实体，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 预瞄准序号 | 整数 |  |

| 出参 | 命中位置 | 三维向量 |  |

| 出参 | 命中实体 | 实体 |  |

## **7. 获取预瞄准摇杆是否处于死区**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/e3cb597c-b27c-4dd2-b6bd-cd95d2da1093.undefined)

**节点功能**

获取指定预瞄准的输入摇杆是否处于死区，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 预瞄准序号 | 整数 |  |

| 出参 | 是否处于死区 | 布尔值 |  |

## **8. 查询预瞄准结束原因**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/fe109f23-ffcc-4bd1-88fe-17a5f64c1641.undefined)

**节点功能**

查询指定预瞄准的结束原因（无/完成/取消），仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 预瞄准序号 | 整数 |  |

| 出参 | 结束原因 | 枚举 |  |

# **八、光标**

## **1. 获取光标是否激活**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/62060ba4-94b2-4142-959e-34e9a994e39e.undefined)

**节点功能**

获取本机持久光标是否处于激活状态，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 是否激活 | 布尔值 |  |

## **2. 获取光标命中结果**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/6d757db2-b2a0-467a-80ac-620c66b30b57.undefined)

**节点功能**

获取本机持久光标的命中结果，包含命中实体列表、命中位置列表与命中数量，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 命中实体列表 | 实体列表 |  |

| 出参 | 命中位置列表 | 三维向量列表 |  |

| 出参 | 命中数量 | 整数 |  |

## **3. 获取光标屏幕坐标**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/851fb378-9fc1-48a7-8ee4-00e8a63b3707.undefined)

**节点功能**

获取本机持久光标的屏幕坐标X与Y，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 屏幕X | 浮点数 |  |

| 出参 | 屏幕Y | 浮点数 |  |

## **4. 获取光标视口坐标**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/af989c3e-978d-4d5f-96ab-6cffd8314d8f.undefined)

**节点功能**

获取本机持久光标的视口坐标X与Y，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 视口X | 浮点数 |  |

| 出参 | 视口Y | 浮点数 |  |

# **九、标签**

## **1. 获取实体的单位标签列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/8b26424b-a249-49a2-901c-15fb380e5f9a.undefined)

**节点功能**

获取目标实体上携带的所有单位标签组成的列表

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 出参 | 列表 | 整数列表 |  |

## **2. 获取单位标签的实体列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/53e7b181-7515-4bf8-9330-abc2ce1f9e67.undefined)

**节点功能**

获取在场所有携带该单位标签的实体列表

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 单位标签索引 | 整数 |  |

| 出参 | 实体列表 | 实体列表 |  |

# **十、通用**

## **1. 获取局部变量**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/a9293b68-cdda-4b30-8c7a-66f6d49e7a5b.undefined)

**节点功能**

获取特定局部变量的变量值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 变量名 | 字符串 |  |

| 出参 | 变量值 | 泛型 |  |

# **十一、自定义仇恨**

## **1. 获取指定实体的仇恨目标**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/cde25ffc-e0b2-44e2-8b08-49aaa712fff7.undefined)

**节点功能**

仅自定义仇恨模式可用

获取指定实体的仇恨目标

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 指定实体 | 实体 |  |

| 出参 | 仇恨目标 | 实体 |  |

## **2. 获取指定实体的仇恨列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/46391dbd-741e-42a7-93d0-8abb9372dc92.undefined)

**节点功能**

仅自定义仇恨模式可用

获取指定实体的仇恨列表

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 指定实体 | 实体 |  |

| 出参 | 仇恨列表 | 实体列表 |  |

## **3. 查询指定实体是否入战**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/49bcaee0-9e5b-4aea-a922-003ff6ea96c2.undefined)

**节点功能**

仅自定义仇恨模式可用

查询指定实体是否已经入战

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 出参 | 是否入战 | 布尔值 |  |

# **十二、触发器**

## **1. 获取碰撞触发器内所有实体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/cd3744a6-803c-4497-81af-cc40a0f637aa.undefined)

**节点功能**

获取目标实体上碰撞触发器组件中特定序号对应的碰撞触发器内的所有实体

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 入参 | 触发器序号 | 整数 |  |

| 出参 | 实体列表 | 实体列表 |  |

# **十三、射线**

## **1. 获取射线检测结果**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/fe131470-690e-4eca-bd64-2f444f14f6bc.undefined)

**节点功能**

获取射线检测结果，会根据射线命中从近到远的顺序返回满足筛选条件的第一个目标或命中位置

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 检测发起者实体 | 实体 |  |

| 入参 | 出射位置 | 三维向量 |  |

| 入参 | 出射方向 | 三维向量 |  |

| 入参 | 射线最大长度 | 浮点数 |  |

| 入参 | 阵营筛选 | 枚举 |  |

| 入参 | 实体类型筛选 | 枚举列表 | 分为关卡、物件、玩家、角色、造物 |

| 入参 | 命中层筛选 | 枚举列表 | 分为受击盒、场景、物件自身碰撞 |

| 出参 | 命中位置 | 三维向量 |  |

| 出参 | 命中实体 | 实体 |  |

# **十四、扫描**

## **1. 获取扫描组件当前扫描到的实体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/50a07538-f7dc-4c79-898e-2f1718d9c851.undefined)

**节点功能**

获取扫描组件当前扫描到的实体，指扫描状态为“激活状态”的实体

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 对应实体 | 实体 |  |

| 出参 | 扫描标签配置ID | 配置ID |  |

## **2. 获取扫描组件可扫描的所有合法对象**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/25430417-51ce-4013-bd67-75a44ea20df0.undefined)

**节点功能**

获取扫描组件可扫描的所有合法对象，此处的合法对象指代所有携带扫描组件且过滤器返回为“是”的单位，与单位的可扫描状态无关

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 对象列表 | 实体列表 |  |

## **3. 获取实体扫描状态**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/12bcbd50-6138-4ba6-8f33-a62e37712cff.undefined)

**节点功能**

获取实体扫描状态

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 出参 | 扫描状态 | 枚举 | 分为不可见、当前扫描目标、候选目标、不满足条件 |

## **4. 获取实体当前生效的扫描标签**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/02f2044b-ac04-4454-8ab9-2b92552d46f5.undefined)

**节点功能**

获取目标实体当前生效的扫描标签

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 出参 | 扫描标签配置ID | 配置ID |  |

# **十五、字典**

## **1. 以键查询字典值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/9811dfb2-bb96-4f0f-9043-ace2c1e75e19.undefined)

**节点功能**

根据键查询字典中对应的值，如果键不存在，则返回类型默认值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 字典 | 泛型 |  |

| 入参 | 键 | 泛型 |  |

| 出参 | 值 | 泛型 |  |

## **2. 查询字典是否包含特定键**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/3d06cb1c-bea8-4d43-9b94-aefd43c2d87e.undefined)

**节点功能**

查询指定字典是否包含特定的键

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 字典 | 泛型 |  |

| 入参 | 键 | 泛型 |  |

| 出参 | 是否包含 | 布尔值 |  |

## **3. 查询字典是否包含特定值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/ec9e5d66-b6ce-45a1-b78c-27a319617138.undefined)

**节点功能**

查询指定字典是否包含特定的值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 字典 | 泛型 |  |

| 入参 | 值 | 泛型 |  |

| 出参 | 是否包含 | 布尔值 |  |

## **4. 查询字典长度**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/17026f38-6753-4a7c-a1d8-c64906c8652b.undefined)

**节点功能**

查询字典中键值对的数量

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 字典 | 泛型 |  |

| 出参 | 长度 | 整数 |  |

## **5. 获取字典中值组成的列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/31d66709-a55f-4838-ac76-b0ae0bc9ca66.undefined)

**节点功能**

获取字典中所有值组成的列表。由于字典中键值对是无序排列的，所以取出的值列表也不一定按照其插入顺序排列

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 字典 | 泛型 |  |

| 出参 | 值列表 | 泛型 |  |

## **6. 获取字典中键组成的列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/37c3e2e3-3a79-45d8-804d-6712f50b56ec.undefined)

**节点功能**

获取字典中所有键组成的列表。由于字典中键值对是无序排列的，所以取出的键列表也不一定按照其插入顺序排列

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 字典 | 泛型 |  |

| 出参 | 键列表 | 泛型 |  |

# **十六、单位状态**

## **1. 实体是否携带指定单位状态**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mholjx05ji8w/b36397ca-58ee-43a8-83ce-0e64d51aaf9d.undefined)

**节点功能**

查询目标实体是否携带指定的单位状态

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 实体 |  |

| 入参 | 单位状态 | 配置ID |  |

| 出参 | 是否携带 | 布尔值 |  |
