# 查询节点

- path_id: `mh2crq9jzueq`
- path: `节点介绍 / 客户端节点 / 过滤器节点图 / 查询节点`
- source: https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/content.html?v=1016
- detail: https://act.mihoyo.com/ys/ugc/tutorial/detail/mh2crq9jzueq

# **一、列表相关**

## **1. 获取列表对应值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/c7a8c3fb-4314-40da-8472-ef1603329056.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/fe807b4e-eb91-4b1f-af7f-838acd61cfd4.undefined)

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

## **3. 列表是否包含该值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/7d6ce67d-1eb1-4ef0-bcba-125ee9157d9e.undefined)

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

## **4. 获取列表最大值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/d4874670-97b3-4d7f-a324-175b851a9276.undefined)

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

## **5. 获取列表最小值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/93eb7de5-d910-452c-9049-d286d98b3daa.undefined)

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

## **6. 获取实体类型列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/d7d6b3f8-89ef-469f-9140-4e70e62dd086.undefined)

**节点功能**

将所需的实体类型拼装为一个列表。类型分为关卡、物件、玩家、角色、造物

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 列表 | 枚举列表 |  |

## **7. 获取射线筛选类型列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/5e06c08b-c6df-47e8-b979-c525d8fa7fff.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/3f28dd54-73dd-4704-b49d-63f9f67bb1f8.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/c0050a9f-79b2-40aa-88f4-3d74799e890a.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/5285a7b8-c069-40aa-b9a6-7f079eb8f908.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/e6953d3d-0ec2-4881-876b-350fb4e2cddc.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/54185145-fc7c-4a34-b186-7adc8563771a.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/b1546dc9-c4d3-42f5-a68d-59acd7087b69.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/ef7a5995-8715-4bed-b193-9bab4c67db11.undefined)

**节点功能**

获取目标实体，根据过滤器节点图被引用的功能模块不同，其指代含义会有区别

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 目标实体 | 实体 |  |

## **6. 筛选球体范围内的实体列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/fc9a6346-eb48-4975-9db6-db3adb8fce02.undefined)

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

## **7. 筛选方形范围内的实体列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/7e67bdca-01af-45fb-bb86-f5db28f4bd7f.undefined)

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

## **8. 获取实体的类型**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/c40e29ef-7b75-4959-afb1-11e466dc3911.undefined)

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

## **9. 获取单位攻击目标**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/2347900f-06e2-41a9-adfa-05f8150b7126.undefined)

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

## **10. 获取目标挂接点位置**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/007a93ca-8cff-4f7a-8041-056ef9ee55cf.undefined)

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

## **11. 查询实体是否在场**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/7777b278-ecd0-4d21-979b-9f180c5e9860.undefined)

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

## **12. 查询复杂造物的预设状态值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/d636f00f-fd85-4ad6-b7ac-8a254147113f.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/8344ea69-52dc-418d-9030-c6ce6a6eef99.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/b5f936db-ec9b-4782-8e87-42796a70287e.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/2b8c5500-2cb8-45c5-b337-08df1b32ac66.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/14999068-4428-4533-8a66-605e7bedab72.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/e48ccbce-4a6f-4b34-b84c-c83b4f9e9961.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/b7bfcaa0-437a-42ba-a7a6-c0b0e7a729fb.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/93c8c1bf-c1de-411b-b689-6d3d1e193c3f.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/6c39a939-e473-4ebf-9b61-53a9114503cc.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/e945ed59-0df6-4d20-ae99-7b78950786d3.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/ee447ad1-fe8d-4f20-97a6-8e9e80466e7f.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/2e5f3bb0-bbc3-4aa3-90ad-6f5426b13a75.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/394e7c7e-6355-4cff-8fe6-92a46d816a87.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/d1360a9b-45c2-4814-b795-853286309a13.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/6072d822-8a8f-4d6c-a527-f1c7e9205834.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/3e280591-5371-414c-a947-8078ae2227df.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/7367fdf3-d252-4c0c-87b7-961e77b6ee37.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/f618d088-2888-4daf-96c0-f2984d957bd2.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/1f002d81-6cf6-41d5-a00a-b2cf207eed36.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/5551364d-9381-442e-9837-0db87a670aab.undefined)

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

## **19. 获取玩家的角色列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/9a97d1b8-0e98-463b-9f56-f7c08a01bab4.undefined)

**节点功能**

仅经典模式可用，获取玩家队伍内的角色列表

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 玩家实体 | 实体 |  |

| 出参 | 角色列表 | 实体列表 |  |

## **20. 获取指定玩家的前台角色**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/a244fb47-ceda-4a06-95d6-64f3d31f75a3.undefined)

**节点功能**

仅经典模式可用，获取玩家队伍内的前台角色

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 玩家实体 | 实体 |  |

| 出参 | 角色实体 | 实体 |  |

## **21. 查询经典模式角色编号**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/e5091f47-37ed-457d-9a25-fee62b450ebf.undefined)

**节点功能**

仅经典模式可用，查询目标角色的角色编号，可以查看附录对应具体是哪位角色经典模式角色编号一览

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标角色 | 实体 |  |

| 出参 | 角色编号 | 整数 |  |

# **七、预瞄准**

## **1. 获取指定预瞄准的基准对象**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/683bd9bc-e03c-4926-b90d-7ea9b6214617.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/a243e472-eea5-45fc-96e9-2073fcb17ad2.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/ad0da28f-b737-4efd-b945-f809b950e030.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/951acc55-666c-448f-b5d2-806582bbd68e.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/97fc0fa5-4a6f-4789-84aa-c7c3cd193f2f.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/b363a1fc-8d5d-4f65-99f1-93e1434f868d.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/33d5cab1-4afb-4bf1-ba4c-6a636d50766d.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/ea745fdc-9bd6-4cf4-98d7-25073541eb67.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/941ffbe1-79c4-4bb9-b943-31befa027d44.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/920b5ec3-730c-48f3-8493-d9cedb5828f9.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/287bdaac-68c9-441e-83ac-b862fc526309.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/8a142512-a22b-4628-b850-a16e92d8a606.undefined)

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

# **九、挂接点**

## **1. 获取目标挂接点旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/a25e9e9c-817d-4127-af56-78fe06156722.undefined)

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

# **十、触发器**

## **1. 获取碰撞触发器内所有实体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/5f158b07-0f75-4997-a7f0-ae9fcf391c7b.undefined)

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

# **十一、射线**

## **1. 获取射线检测结果**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/9f270dc9-c4d9-4720-ab1b-b42f40398770.undefined)

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

# **十二、扫描**

## **1. 获取扫描组件当前扫描到的实体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/1b7e5f60-5749-49d0-ab32-609d07947f9c.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/8fe69dd2-6979-4c24-a8bd-71d949489b00.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/f4a9ec34-11aa-4554-87de-2f719e0bfb88.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/7ca0f65f-08fa-46c0-987b-d7822911a6c5.undefined)

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

# **十三、字典**

## **1. 以键查询字典值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/8c2f4440-0619-4725-8104-8a998384ab8a.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/2c9dbdf8-f081-4129-91a3-c2d4ca6f2334.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/c1f815ca-49f4-4f3a-86ee-b6435c1b9dbf.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/bd8b1dfb-918b-4a1f-bc81-6813b324b328.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/9da2324c-d255-47f0-a6a1-416b186fc0f8.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/73718d0b-7156-4425-8dae-ed854df37412.undefined)

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

# **十四、单位状态**

## **1. 实体是否携带指定单位状态**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh2crq9jzueq/a4672adb-eead-4904-823a-ea840f2a5456.undefined)

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
