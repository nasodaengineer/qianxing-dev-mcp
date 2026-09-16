# 查询节点

- path_id: `mhk4furvds12`
- path: `节点介绍 / 客户端节点 / 造物状态决策节点图 / 查询节点`
- source: https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/content.html?v=1016
- detail: https://act.mihoyo.com/ys/ugc/tutorial/detail/mhk4furvds12

# **一、通用**

## **1. 获取自身当前执行状态**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/de54e7fe-4d22-4406-a72a-8e3f8cf0f8be.undefined)

**节点功能**

获取造物自身当前正在执行的【造物状态节点图】的配置ID

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 状态节点图配置ID | 配置ID |  |

## **2. 查询自身距离目标的水平角度**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/49466a76-c3a9-4882-893d-29c86e8c9a39.undefined)

**节点功能**

查询造物自身距离目标实体的水平角度，当且仅当造物存在目标时有效

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 水平角度 | 浮点数 |  |

## **3. 查询自身距离目标的垂直角度**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/e34912d8-dcab-4e36-9cc3-c39601f6cca8.undefined)

**节点功能**

查询造物自身距离目标实体的垂直角度，当且仅当造物存在目标时有效

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 垂直角度 | 浮点数 |  |

## **4. 查询自身距离目标的水平距离**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/8a26dbc2-aaa7-4ea0-9789-7ccd67557bf2.undefined)

**节点功能**

查询造物自身距离目标实体的水平距离，当且仅当造物存在目标时有效

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 水平距离 | 浮点数 |  |

## **5. 查询自身距离目标的垂直距离**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/f0bb78f7-9e40-422b-a709-98076a4392c4.undefined)

**节点功能**

查询造物自身距离目标实体的垂直距离，当且仅当造物存在目标时有效

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 垂直距离 | 浮点数 |  |

## **6. 查询自身距离目标的距离**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/ce3aaff0-9f04-4708-a1d5-658e1c7b9d27.undefined)

**节点功能**

查询造物自身距离目标实体的距离，当且仅当造物存在目标时有效

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 距离 | 浮点数 |  |

## **7. 查询目标点是否寻路可达**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/fcbf2785-fb86-4da5-b503-be3d1110eca8.undefined)

**节点功能**

查询造物当前的目标点是否可以正常寻路到达

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 是否寻路可达 | 布尔值 |  |

## **8. 查询自身是否正在释放技能**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/30cb574b-b997-4f3f-84e7-c300e73a3a54.undefined)

**节点功能**

查询造物当前是否正在释放技能，如果正在释放技能，可以返回当前释放技能的序号

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 是否正在释放技能 | 布尔值 |  |

| 出参 | 技能序号 | 整数 |  |

## **9. 查询自身是否处于交战中**

**节点功能**

查询造物自身当前是否在交战

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 是否交战中 | 布尔值 |  |

## **10. 查询自身是否在领地中**

**节点功能**

查询造物自身当前所处位置是否在领地中

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 是否在领地中 | 布尔值 |  |

## **11. 查询入战时的坐标点**

**节点功能**

查询造物入战时的坐标点

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 入战位置 | 三维向量 |  |

| 出参 | 入战旋转 | 三维向量 |  |

## **12. 获取出生点位置信息**

**节点功能**

获取造物自身的出生点信息

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 出生点坐标 | 三维向量 |  |

| 出参 | 出生点旋转 | 三维向量 |  |

## **13. 获取自身实体**

**节点功能**

返回该节点图所关联的实体

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 自身实体 | 实体 |  |

## **14. 获取目标实体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/1891c5ee-e61b-4062-ba0f-f17eafab89a6.undefined)

**节点功能**

获取造物当前的目标实体，当且仅当造物存在目标时有效

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 目标实体 | 实体 |  |

## **15. 获取关卡实体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/69f83c76-0269-44e3-8eda-e2e88a88fb7d.undefined)

**节点功能**

获取关卡实体

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 关卡实体 | 实体 |  |

## **16. 查询实体是否在场**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/669f03fa-c310-4018-8217-4da92c8d6268.undefined)

**节点功能**

查询目标实体是否在场，注意角色实体即使处于倒下状态，仍然认为在场

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 枚举 |  |

| 出参 | 是否在场 | 布尔值 |  |

## **17. 获取实体的类型**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/eab96b36-2463-4b12-a14e-512666a306d8.undefined)

**节点功能**

获取目标实体的类型

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 枚举 |  |

| 出参 | 实体类型 | 枚举 |  |

## **18. 获取实体位置**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/c38c277a-54ea-4959-bdfc-dc6ac0fe695e.undefined)

**节点功能**

获取目标实体的位置

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 枚举 |  |

| 出参 | 位置 | 三维向量 |  |

## **19. 获取实体旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/6dc37fab-94fe-456a-a2db-173622fbba64.undefined)

**节点功能**

获取目标实体的旋转

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 枚举 |  |

| 出参 | 旋转 | 三维向量 |  |

## **20. 获取物件预设状态**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/90ecf049-8dd8-40ef-8b8a-e2582efb55de.undefined)

**节点功能**

获取目标实体的指定预设状态索引的预设状态值。如果该实体没有指定的预设状态，则返回0

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 枚举 |  |

| 入参 | 预设状态索引 | 整数 |  |

| 出参 | 预设状态值 | 整数 |  |

## **21. 获取自定义变量**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/32c096e6-98bc-4cd5-a155-e921070e8bfb.undefined)

**节点功能**

获取目标实体的指定自定义变量的变量值。如果变量不存在，则返回类型的默认值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 枚举 |  |

| 入参 | 变量名 | 字符串 |  |

| 出参 | 变量值 | 泛型 |  |

## **22. 获取目标生命值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/391c333f-b294-496d-ac58-8cbc8518a0f8.undefined)

**节点功能**

获取目标实体的生命值相关参数

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 枚举 |  |

| 出参 | 基础生命值 | 浮点数 |  |

| 出参 | 最大生命值 | 浮点数 |  |

| 出参 | 当前生命值百分比 | 浮点数 |  |

## **23. 获取目标等级**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/c98fa7d7-784b-4ca3-b878-aab5250112c4.undefined)

**节点功能**

获取目标实体的当前等级

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 枚举 |  |

| 出参 | 当前等级 | 整数 |  |

## **24. 获取目标攻击力**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/2644e913-d3b0-4174-9b10-d23d9a7d3e60.undefined)

**节点功能**

获取目标实体的攻击力相关参数

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 枚举 |  |

| 出参 | 基础攻击力 | 浮点数 |  |

| 出参 | 当前攻击力 | 浮点数 |  |

## **25. 获取自身预设状态值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/0c5eb700-65eb-4e10-8d1c-4f73d9f2ee3c.undefined)

**节点功能**

获取自身的指定预设状态索引的预设状态值。如果该实体没有指定的预设状态索引，则返回0

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 预设状态索引 | 整数 |  |

| 出参 | 预设状态值 | 整数 |  |

## **26. 获取前一帧执行状态**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/70cfab30-9b54-4e8d-931b-9b36834ea03c.undefined)

**节点功能**

获取造物前一帧执行的【造物状态节点图】的配置ID

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 状态节点图配置ID | 配置ID |  |

## **27. 获取前一帧执行战术**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/cff1002e-7840-4ca4-b1e6-fc28f5c34821.undefined)

**节点功能**

获取造物前一帧执行的战术

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 战术类型 | 枚举 |  |

| 出参 | 战术上下文 | 字符串 |  |

# **二、阵营相关**

## **1. 查询阵营是否敌对**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/8ffa10e2-cdef-4e0a-a172-983ebc9f14c1.undefined)

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

## **2. 查询实体阵营**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/d016b1ce-46bb-4ee0-9a68-c8f32609645f.undefined)

**节点功能**

查询目标实体的阵营

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标实体 | 枚举 |  |

| 出参 | 阵营 | 阵营 |  |

# **三、列表相关**

## **1. 获取列表对应值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/a6bd30f0-bf12-4440-9549-cadaf855368f.undefined)

**节点功能**

返回数据列表中指定序号对应的值。列表中序号从0开始

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/9c2c9010-f27b-4ede-8afb-d004615a5916.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/d44761bc-dc5b-4c84-9936-81b8a9049de0.undefined)

**节点功能**

查询指定列表是否包含特定的值

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/e9178804-2da8-4989-b5f4-89dadacec1f6.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/d0a76268-1233-4b40-90cc-90e67f341e45.undefined)

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

# **四、字典**

## **1. 以键查询字典值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/14a374ac-039a-41ba-bde6-03dae6d9ca3a.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/10c17e74-13cc-4284-870f-7386efe25b61.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/34d71a8b-41c0-4531-ac43-43fa38c59421.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/0baa6446-3a91-4e0d-ad6c-3f8514edb900.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/be3e3485-1016-449d-bae3-c1297ae78e60.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhk4furvds12/5a80dbd9-5883-4d19-b6b3-63d6c9294a84.undefined)

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
