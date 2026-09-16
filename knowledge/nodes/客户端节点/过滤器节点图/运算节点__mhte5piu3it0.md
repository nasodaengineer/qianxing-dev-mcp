# 运算节点

- path_id: `mhte5piu3it0`
- path: `节点介绍 / 客户端节点 / 过滤器节点图 / 运算节点`
- source: https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/content.html?v=1016
- detail: https://act.mihoyo.com/ys/ugc/tutorial/detail/mhte5piu3it0

# **一、通用**

## **1. 是否相等**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/d3a70e85-cf79-4bfa-bc7b-e715a049be04.undefined)

**节点功能**

判断两个输入是否相等

部分参数类型有较为特殊的判定规则：

浮点数：浮点数采用近似相等进行比较，当两个浮点数小于一个极小值时，这两个浮点数认为相等。例如：2.0000001与2.0认为相等

三维向量：三维向量的x、y、z分别采用浮点数近似相等比较

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 |  | 泛型 |  |

| 入参 |  | 泛型 |  |

| 出参 | 结果 | 布尔值 |  |

## **2. 数据类型转换**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/a4376010-c258-4fe4-a3eb-73e9b499c1f0.undefined)

**节点功能**

将输入的参数类型转换为另一种类型输出。具体规则见基础概念-【基础数据类型之间的转换规则】

在客户端节点中对于浮点数转整数，会截尾取整

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入 | 泛型 |  |

| 出参 | 转换结果 | 泛型 |  |

## **3. 枚举匹配**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/0086f6ee-8426-4619-8b87-e267fee232f8.undefined)

**节点功能**

确认枚举的类型后，判断两个输入的值是否相等

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 枚举1 | 泛型 |  |

| 入参 | 枚举2 | 泛型 |  |

| 出参 | 结果 | 布尔值 | 相等输出“是”，不相等输出“否” |

# **二、数学**

## **1. 加法运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/5ad30422-c177-4da0-9b1d-89ee35d9033a.undefined)

**节点功能**

计算两个浮点数或整数的加法

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 |  | 泛型 |  |

| 入参 |  | 泛型 |  |

| 出参 | 结果 | 泛型 |  |

## **2. 减法运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/f313404f-6f11-40f3-a07e-d7f3009cb0fb.undefined)

**节点功能**

计算两个浮点数或整数的减法

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 |  | 泛型 |  |

| 入参 |  | 泛型 |  |

| 出参 | 结果 | 泛型 |  |

## **3. 乘法运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/89ddf586-eb93-45c6-893a-48bddb41c406.undefined)

**节点功能**

乘法运算，支持浮点数乘法和整数乘法

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 |  | 泛型 |  |

| 入参 |  | 泛型 |  |

| 出参 | 结果 | 泛型 |  |

## **4. 除法运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/c0215583-1132-4469-b524-314bc2a9d81f.undefined)

**节点功能**

除法运算，支持浮点数除法和整数除法。整数除法返回整除结果

除数不应为0，否则可能返回非法值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 |  | 泛型 |  |

| 入参 |  | 泛型 |  |

| 出参 | 结果 | 泛型 |  |

## **5. 绝对值运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/d4da3f2a-30c4-45d2-8869-cf76e18ddd87.undefined)

**节点功能**

返回输入的绝对值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入 | 泛型 |  |

| 出参 | 结果 | 泛型 |  |

## **6. 获取随机数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/4c092afc-1332-4733-a7a4-aa0ee3c23d77.undefined)

**节点功能**

获取一个大于等于下限，小于等于上限的随机数。注意该节点生成的随机数包含上下限

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 下限 | 泛型 |  |

| 入参 | 上限 | 泛型 |  |

| 出参 | 随机数 | 泛型 |  |

## **7. 三维向量内积**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/eb939aeb-bf4d-4e60-85ab-0846ea84f800.undefined)

**节点功能**

计算两个输入三维向量的内积（点乘）

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 三维向量1 | 三维向量 |  |

| 入参 | 三维向量2 | 三维向量 |  |

| 出参 | 计算结果 | 浮点数 |  |

## **8. 三维向量外积**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/13bc1354-685a-4623-8af6-e2088adb2d6c.undefined)

**节点功能**

计算两个三维向量的外积（叉乘）

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 三维向量1 | 三维向量 |  |

| 入参 | 三维向量2 | 三维向量 |  |

| 出参 | 计算结果 | 三维向量 |  |

## **9. 拆分三维向量**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/9ec521c5-f573-46b0-9291-bb3fffd3eac1.undefined)

**节点功能**

将三维向量的x、y、z分量输出为三个浮点数

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 三维向量 | 三维向量 |  |

| 出参 | X分量 | 浮点数 |  |

| 出参 | Y分量 | 浮点数 |  |

| 出参 | Z分量 | 浮点数 |  |

## **10. 三维向量缩放**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/089efc3c-2eb6-4cdf-94b0-98df35f01347.undefined)

**节点功能**

将输入的三维向量缩放后输出（三维向量数乘）

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 缩放倍率 | 浮点数 |  |

| 入参 | 三维向量 | 三维向量 |  |

| 出参 | 结果 | 三维向量 |  |

## **11. 三维向量夹角**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/40e5cf68-e39e-43d6-a8d8-2cb240a895c8.undefined)

**节点功能**

计算两个三维向量之间的夹角，以角度输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 三维向量1 | 三维向量 |  |

| 入参 | 三维向量2 | 三维向量 |  |

| 出参 | 夹角(角度) | 浮点数 |  |

## **12. 三维向量旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/65e1bbf4-d1aa-49b2-bcfd-c51177f7b535.undefined)

**节点功能**

将被旋转的三维向量，按照旋转所表示的欧拉角进行旋转后返回结果

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 被旋转的三维向量 | 三维向量 |  |

| 入参 | 旋转 | 三维向量 |  |

| 出参 | 结果 | 三维向量 |  |

## **13. 三维向量模运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/f823768c-9117-46fb-adae-3237f0d61f4d.undefined)

**节点功能**

计算输入三维向量的模

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 三维向量 | 三维向量 |  |

| 出参 | 结果 | 浮点数 |  |

## **14. 创建三维向量**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/e13cba87-fa84-4cf5-b411-a2fd038f5748.undefined)

**节点功能**

根据x、y、z分量创建一个三维向量

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | X分量 | 浮点数 |  |

| 入参 | Y分量 | 浮点数 |  |

| 入参 | Z分量 | 浮点数 |  |

| 出参 | 三维向量 | 三维向量 |  |

## **15. 三维向量加法**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/b91f75e0-1c56-49e1-b7ac-d8c75a20ae8a.undefined)

**节点功能**

计算两个三维向量的加法

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 三维向量1 | 三维向量 |  |

| 入参 | 三维向量2 | 三维向量 |  |

| 出参 | 计算结果 | 三维向量 |  |

## **16. 三维向量减法**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/aa94b606-0fa4-4e44-b3a0-1f7e7f3372cb.undefined)

**节点功能**

计算两个三维向量的减法

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 三维向量1 | 三维向量 |  |

| 入参 | 三维向量2 | 三维向量 |  |

| 出参 | 计算结果 | 三维向量 |  |

## **17. 方向向量转旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/3bd952b6-ddeb-4564-bdf3-c59dc96c8dfd.undefined)

**节点功能**

给定向前向量和向上向量，转化为欧拉角

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 向前向量 | 三维向量 | 表示单位期望的朝向 |

| 入参 | 向上向量 | 三维向量 | 定义单位的上方向（用于确定旋转的旋转角度），默认值为世界坐标系Y轴正方向 |

| 出参 | 旋转 | 三维向量 |  |

## **18. 朝向转旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/4b155c7f-a532-4071-b539-2320e9fc0858.undefined)

**节点功能**

将方向向量转化为欧拉角

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 朝向 | 三维向量 |  |

| 出参 | 旋转 | 三维向量 |  |

## **19. 正弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/fc6c13df-18a9-48d9-90e2-c88b23cf4d6a.undefined)

**节点功能**

计算输入弧度的正弦

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 弧度 | 浮点数 |  |

| 出参 | 结果 | 浮点数 |  |

## **20. 余弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/6004c668-78f6-4be7-8bb0-d109cdda35d5.undefined)

**节点功能**

计算输入弧度的余弦

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 弧度 | 浮点数 |  |

| 出参 | 结果 | 浮点数 |  |

## **21. 正切函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/51eb5c3f-04a8-4b89-9fef-b7bbe346791a.undefined)

**节点功能**

计算输入弧度的正切

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 弧度 | 浮点数 |  |

| 出参 | 结果 | 浮点数 |  |

## **22. 反正弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/0ace4e9e-9300-45a6-a9c8-98af46915460.undefined)

**节点功能**

计算输入的反正弦值，返回为弧度值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入 | 浮点数 |  |

| 出参 | 弧度 | 浮点数 |  |

## **23. 反余弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/6b016e75-5dae-4ae4-9fb1-7628fa1ccf6d.undefined)

**节点功能**

计算输入的反余弦值，返回为弧度值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入 | 浮点数 |  |

| 出参 | 弧度 | 浮点数 |  |

## **24. 反正切函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/a95cba99-47fc-4f4d-9123-c73a967808d3.undefined)

**节点功能**

计算输入的反正切值，返回为弧度值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入 | 浮点数 |  |

| 出参 | 弧度 | 浮点数 |  |

## **25. 三维向量归一化**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/2547db5e-c629-4397-bba7-5a3997fe1eda.undefined)

**节点功能**

将三维向量的长度归一化后输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 三维向量 | 三维向量 |  |

| 出参 | 结果 | 三维向量 |  |

## **26. 弧度转角度**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/b08f4cef-1ebf-4a2d-823a-7170194712f8.undefined)

**节点功能**

将弧度值转为角度值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 弧度 | 浮点数 |  |

| 出参 | 角度 | 浮点数 |  |

## **27. 角度转弧度**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/3ffeba29-e303-4854-b356-c91b07b67a2d.undefined)

**节点功能**

将角度值转为弧度值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 角度 | 浮点数 |  |

| 出参 | 弧度 | 浮点数 |  |

## **28. 逻辑与运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/204334d9-cd18-47ea-80f9-071f57201e89.undefined)

**节点功能**

对输入的两个布尔值进行与运算后输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 条件1 | 布尔值 |  |

| 入参 | 条件2 | 布尔值 |  |

| 出参 | 结果 | 布尔值 |  |

## **29. 逻辑或运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/5797c43b-4774-4114-bc8c-0935c2f9aa32.undefined)

**节点功能**

对输入的两个布尔值进行或运算后输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 条件1 | 布尔值 |  |

| 入参 | 条件2 | 布尔值 |  |

| 出参 | 结果 | 布尔值 |  |

## **30. 逻辑非运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/2adf5fef-4a0d-43c6-8a8c-55932bb32d99.undefined)

**节点功能**

对输入的布尔值进行非运算后输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 条件 | 布尔值 |  |

| 出参 | 结果 | 布尔值 |  |

## **31. 逻辑异或运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/5564ccb6-de29-4b57-8ee3-cacb81dc59c0.undefined)

**节点功能**

对输入的两个布尔值进行异或运算后输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 条件1 | 布尔值 |  |

| 入参 | 条件2 | 布尔值 |  |

| 出参 | 结果 | 布尔值 |  |

## **32. 是否大于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/75c36db0-375f-4ccb-a120-229cc18dfc16.undefined)

**节点功能**

返回左值是否大于右值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 |  | 泛型 |  |

| 入参 |  | 泛型 |  |

| 出参 | 结果 | 布尔值 |  |

## **33. 是否小于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/cb26681c-9e9e-4d84-b5d3-15613f1a0cfe.undefined)

**节点功能**

返回左值是否小于右值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 |  | 泛型 |  |

| 入参 |  | 泛型 |  |

| 出参 | 结果 | 布尔值 |  |

## **34. 是否小于等于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/63825708-c1a8-4549-b4f9-2b2974d598ba.undefined)

**节点功能**

返回左值是否小于等于右值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 |  | 泛型 |  |

| 入参 |  | 泛型 |  |

| 出参 | 结果 | 布尔值 |  |

## **35. 是否大于等于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/a182af8c-2751-4c1a-b7cc-bd039f9413be.undefined)

**节点功能**

返回左值是否大于等于右值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 |  | 泛型 |  |

| 入参 |  | 泛型 |  |

| 出参 | 结果 | 布尔值 |  |

## **36. 屏幕坐标转视口坐标**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/6491d403-40e7-444a-8dee-c2662cc39f3d.undefined)

**节点功能**

将屏幕坐标转换为视口坐标（归一化0-1），仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 屏幕X | 浮点数 |  |

| 入参 | 屏幕Y | 浮点数 |  |

| 出参 | 视口X | 浮点数 |  |

| 出参 | 视口Y | 浮点数 |  |

## **37. 视口坐标转屏幕坐标**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/c7353176-99bb-49a1-8ea0-6c3fa1bfccc7.undefined)

**节点功能**

将视口坐标（归一化0-1）转换为屏幕坐标，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 视口X | 浮点数 |  |

| 入参 | 视口Y | 浮点数 |  |

| 出参 | 屏幕X | 浮点数 |  |

| 出参 | 屏幕Y | 浮点数 |  |

## **38. 屏幕坐标转世界坐标**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/cdb3ab5c-379f-4101-97c6-87d1b7fb50e4.undefined)

**节点功能**

将屏幕坐标加上深度值，转换为世界坐标，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 屏幕X | 浮点数 |  |

| 入参 | 屏幕Y | 浮点数 |  |

| 入参 | 深度值 | 浮点数 |  |

| 出参 | 世界坐标 | 三维向量 |  |

## **39. 世界坐标转屏幕坐标**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/418c2af4-d03d-4f02-8af2-2af0834e9161.undefined)

**节点功能**

将世界坐标转换为屏幕坐标，仅在超限模式可用

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 世界坐标 | 三维向量 |  |

| 出参 | 屏幕X | 浮点数 |  |

| 出参 | 屏幕Y | 浮点数 |  |

# **三、列表**

## **1. 拼装列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/6db113a7-e13f-48a3-8a91-406c3bb6d1b3.undefined)

**节点功能**

将多个类型相同的入参(至多10个)拼装为一个列表

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 列表 | 泛型 | 拼装成的列表 |

| 入参 | 0~9 | 泛型 | 将至多10个参数拼装为一个列表 |

# **四、结构体**

## **1. 拼装结构体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/d2d2f6da-f630-4618-82c9-77f64402a4fc.undefined)

**节点功能**

将多个参数拼合为一个结构体类型的值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 结构体 | 结构体 |  |

## **2. 拆分结构体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/16f5d5e5-b845-44ae-ba0f-cdd9ba44f8db.undefined)

**节点功能**

获取指定结构体的所有参数

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 结构体 | 结构体 |  |

# **五、字典**

## **1. 拼装字典**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/eb559e76-0b2d-4d06-ab38-d156b1606386.undefined)

**节点功能**

将至多50个键值对拼合为一个字典

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 字典 | 泛型 |  |

| 入参 | 键0~49 | 泛型 |  |

| 入参 | 值0~49 | 泛型 |  |

## **2. 建立字典**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhte5piu3it0/59ee2904-879c-4cc0-8759-faf307873628.undefined)

**节点功能**

根据输入的键和值列表的顺序依次建立键值对。

此节点会按照键和值列表中较短的一个进行字典创建，多余的部分会被截断

如果键列表中存在重复值，则会创建失败，返回空字典

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 键列表 | 泛型 |  |

| 入参 | 值列表 | 泛型 |  |

| 出参 | 字典 | 泛型 |  |
