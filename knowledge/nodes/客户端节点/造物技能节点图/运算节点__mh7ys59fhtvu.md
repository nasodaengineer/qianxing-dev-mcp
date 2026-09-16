# 运算节点

- path_id: `mh7ys59fhtvu`
- path: `节点介绍 / 客户端节点 / 造物技能节点图 / 运算节点`
- source: https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/content.html?v=1016
- detail: https://act.mihoyo.com/ys/ugc/tutorial/detail/mh7ys59fhtvu

# **一、通用**

## **1. 是否相等**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/9522c231-85fc-4a33-b03c-2a1092d398b2.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/54503411-8273-4462-9918-0db002c49241.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/35f554b1-2467-41f6-9e93-8efd1ffd557a.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/188b9ad0-7386-4096-9867-597388019291.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/ef3acf4f-b978-46bc-ae5d-4be4b61d9252.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/665a1fd2-2658-4b96-8416-3a4fa6f41714.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/9a49f746-b75a-4334-a45c-b26603bb9eda.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/ac5947a5-366c-4916-a26a-3b64d74abd70.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/d0536775-3fa9-4404-b880-acbb1e70ac17.undefined)

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

## **7. 三维向量夹角**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/4a3a3d11-cefd-42b2-bf4b-76ad3a31905f.undefined)

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

## **8. 三维向量模运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/fd3b25ab-933c-4f37-9f5d-26461e31c5be.undefined)

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

## **9. 三维向量缩放**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/80412a87-a72c-46f9-a58f-eb4805386b40.undefined)

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

## **10. 三维向量旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/2b8f227a-40eb-4208-ab37-04d40266c47e.undefined)

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

## **11. 三维向量加法**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/c11ce116-4b42-405e-a48f-d1f30fe4b42c.undefined)

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

## **12. 三维向量减法**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/71a7df76-84f8-4b41-8161-0700eb1ce6af.undefined)

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

## **13. 三维向量内积**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/582325bd-f4f2-4346-b53f-836d41c54af6.undefined)

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

## **14. 三维向量外积**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/e8907827-33ca-47f6-961a-52e518a3cc37.undefined)

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

## **15. 方向向量转旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/616354ae-5202-4df0-8a54-bf1bbdf293f9.undefined)

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

## **16. 朝向转旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/bc6d774e-9b7b-48e8-af4c-bd30c5bedcd7.undefined)

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

## **17. 拆分三维向量**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/74ef084e-55d7-4730-9422-e23b69ee77f1.undefined)

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

## **18. 正弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/8cbff48f-1b02-4285-81f9-102e7b5d0641.undefined)

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

## **19. 余弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/6ec819cb-39a9-42bb-890a-0c684d3e0400.undefined)

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

## **20. 正切函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/5ce0d0eb-ff49-4f4c-9bed-3d5cb3bf2203.undefined)

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

## **21. 反正弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/2113367d-44b4-42f1-8853-ea43bf83d033.undefined)

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

## **22. 反余弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/37b6ee86-c4f5-421c-a5f9-b9b4616992c3.undefined)

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

## **23. 反正切函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/7519bd9c-b268-47c0-a9c3-a52ecc7b6f08.undefined)

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

## **24. 三维向量归一化**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/b1fa389b-bf81-4cbe-936a-13e366c7cd0b.undefined)

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

## **25. 弧度转角度**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/bd3e8027-fd44-47d8-9f92-890339106f10.undefined)

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

## **26. 角度转弧度**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/2d12cabc-a7a2-4713-94c9-6951b4a3a0be.undefined)

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

## **27. 逻辑与运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/8fe72d12-4034-44af-8a9a-f5f78e1ef752.undefined)

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

## **28. 逻辑或运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/4a6ad441-b74e-4198-a0d3-50b49b84636b.undefined)

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

## **29. 逻辑非运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/77e2c592-0637-4510-be7f-7b10061f94a5.undefined)

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

## **30. 逻辑异或运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/d749fef9-8eaa-48cb-a8c2-4e335b948ef7.undefined)

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

## **31. 是否大于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/d8e260cc-2313-4f3a-8685-7f2b248d7c4e.undefined)

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

## **32. 是否小于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/2cc8912b-386e-4fb2-a3a6-7a6e88042478.undefined)

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

## **33. 是否小于等于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/2947d26d-e07d-4a1e-9476-41be4e187dd8.undefined)

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

## **34. 是否大于等于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/60283ed9-896e-40a4-a829-666dcdb03f1d.undefined)

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

## **35. 创建三维向量**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/73763502-34f4-439f-87d9-f24a5bebf305.undefined)

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

## **36. 屏幕坐标转视口坐标**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/73c8b622-5437-4e0b-a24d-e055da7cdf5d.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/f6ecd543-b3c3-4f4f-8d20-204cae0640b0.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/0697c730-4df6-4843-8b34-4995b74ae82e.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/64723e25-9eee-426c-bf1d-000dad93d0c0.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/9c369f76-dcaa-4913-b4d5-33201a2960db.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/d99caf6a-47ad-435d-8be1-f629494adb33.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/18a438ae-f437-4012-8fa2-effe036f1302.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/9ad6f76f-aa9d-4be3-9146-c7a5d35c97a4.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh7ys59fhtvu/ac59cbf2-abd1-4071-baa4-93a5738fa9a3.undefined)

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
