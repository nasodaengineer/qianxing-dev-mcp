# 运算节点

- path_id: `mhnd4l069tk0`
- path: `节点介绍 / 服务器节点 / 运算节点`
- source: https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/content.html?v=1016
- detail: https://act.mihoyo.com/ys/ugc/tutorial/detail/mhnd4l069tk0

# **一、通用**

## **1. 是否相等**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/f8384116-999b-47cd-9c06-4c623deb981d.undefined)

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

| 入参 | 输入1 | 泛型 |  |

| 入参 | 输入2 | 泛型 |  |

| 出参 | 结果 | 布尔值 | 相等输出“是”，不相等输出“否” |

## **2. 拼装列表**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/8080fdf2-b2b4-42c7-9c52-026a95fd7a66.undefined)

**节点功能**

将多个类型相同的入参(至多100个)拼装为一个列表

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 列表 | 泛型 | 拼装成的列表 |

| 入参 | 0~99 | 泛型 | 将至多100个参数拼装为一个列表 |

## **3. 数据类型转换**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/d22674e5-dba7-4cc8-8109-5b93ea023401.undefined)

**节点功能**

将输入的参数类型转换为另一种类型输出。具体规则见基础概念-【基础数据类型之间的转换规则】

针对浮点数转整数，会通过四舍五入取整

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入 | 泛型 |  |

| 出参 | 输出 | 泛型 |  |

## **4. 枚举是否相等**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/afa6bd2c-c223-4dd7-86e1-0e6c6d5f55e0.undefined)

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

## **1. 拆分三维向量**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/dbc90455-c25d-44e8-8d1d-927ea3c03d0f.undefined)

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

## **2. 三维向量加法**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/0bc9bc77-3785-4f93-9edf-e53e787b480e.undefined)

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

| 出参 | 结果 | 三维向量 |  |

## **3. 三维向量减法**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/0a2faa64-bcd8-4cc8-8d61-506429256007.undefined)

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

| 出参 | 结果 | 三维向量 |  |

## **4. 三维向量缩放**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/7564c298-448a-44c6-b638-207eb4c19393.undefined)

**节点功能**

将输入的三维向量缩放后输出（三维向量数乘）

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 三维向量 | 三维向量 |  |

| 入参 | 缩放倍率 | 浮点数 |  |

| 出参 | 结果 | 三维向量 |  |

## **5. 三维向量夹角**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/98ce1b01-a456-4ba5-a68d-bbafa117a719.undefined)

**节点功能**

计算两个三维向量之间的夹角，以弧度输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 三维向量1 | 三维向量 |  |

| 入参 | 三维向量2 | 三维向量 |  |

| 出参 | 夹角(弧度) | 浮点数 |  |

## **6. 三维向量归一化**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/3b155a8f-6dc5-433e-9bea-d848e41e5a40.undefined)

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

## **7. 加法运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/6d0b3f58-2040-4dd4-ab2b-5911ed9e15c1.undefined)

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

## **8. 减法运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/2caeee39-4cc0-4882-8641-2b99331162ac.undefined)

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

## **9. 乘法运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/0c68085d-ffff-4b18-b8eb-188f82f9f0ba.undefined)

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

## **10. 除法运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/ac8563ad-5194-4cfe-a423-b48d3e881eca.undefined)

**节点功能**

除法运算，支持浮点数除法和整数除法。整数除法返回整除结果

除数为0时，结果为0

-2147483648除以-1的结果为0

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 |  | 泛型 |  |

| 入参 |  | 泛型 |  |

| 出参 | 结果 | 泛型 |  |

## **11. 模运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/de5814e7-6155-47ef-b890-d7c62ea70a25.undefined)

**节点功能**

返回输入1对输入2的取模运算，输入1为被除数

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 |  | 整数 |  |

| 入参 |  | 整数 |  |

| 出参 | 结果 | 整数 |  |

## **12. 幂运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/23189b68-9a6d-40a9-bc9a-d6e4fa68cb00.undefined)

**节点功能**

计算底数的指数次幂

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 底数 | 泛型 |  |

| 入参 | 指数 | 泛型 |  |

| 出参 | 结果 | 泛型 |  |

## **13. 取较大值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/a8d4ac04-329f-4399-84db-5e39ca2d6e50.undefined)

**节点功能**

取出两个输入中较大的一个

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入1 | 泛型 |  |

| 入参 | 输入2 | 泛型 |  |

| 出参 | 较大值 | 泛型 |  |

## **14. 取较小值**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/d0df6ea6-ec33-4298-a720-0ab6c3019823.undefined)

**节点功能**

取出两个输入中较小的一个

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入1 | 泛型 |  |

| 入参 | 输入2 | 泛型 |  |

| 出参 | 较小值 | 泛型 |  |

## **15. 对数运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/d32d26c3-9eb3-4373-8f95-22853dab561a.undefined)

**节点功能**

计算以底数为底真数的对数

底数不应为负数或等于1、真数不应为负数，否则可能产生非法值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 真数 | 浮点数 |  |

| 入参 | 底数 | 浮点数 |  |

| 出参 | 结果 | 浮点数 |  |

## **16. 绝对值运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/989d92df-938f-4b0d-8bf8-19bc0b38a8c5.undefined)

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

## **17. 取符号运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/014b9151-17ab-4acb-ac1a-d2cdcede354e.undefined)

**节点功能**

输入为正数时，返回1

输入为负数时，返回-1

输入为0时，返回0

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入 | 泛型 |  |

| 出参 | 结果 | 泛型 |  |

## **18. 三维向量模运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/28b700d9-49a0-41bc-bb92-0684c099cad7.undefined)

**节点功能**

计算输入的三维向量的模

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 三维向量 | 三维向量 |  |

| 出参 | 结果 | 浮点数 |  |

## **19. 算术平方根运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/99f6a6de-673c-4888-aed4-07134ffe2070.undefined)

**节点功能**

返回输入值的算术平方根

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入 | 浮点数 |  |

| 出参 | 结果 | 浮点数 |  |

## **20. 范围限制运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/74e16fa2-2e8e-4f77-a82c-6a88aba0536e.undefined)

**节点功能**

将输入值限制在[下限,上限]（上下限均包含）后输出。
如果输入值在下限到上限范围内，则返回原值输入值如果小于下限，则返回下限值；如果输入值大于上限，则返回上限值如果下限大于上限，认为是错误输入，返回非法值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入 | 泛型 |  |

| 入参 | 下限 | 泛型 |  |

| 入参 | 上限 | 泛型 |  |

| 出参 | 结果 | 泛型 |  |

## **21. 取整数运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/8253a514-ef6f-4307-bde8-efe4903999e0.undefined)

**节点功能**

根据取整方式进行一次取整运算，返回取整后的正数

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入 | 浮点数 |  |

| 入参 | 取整方式 | 枚举 | 四舍五入：按照四舍五入规则进行取整向上取整：返回大于输入且离输入值最近的一个整数，例如：输入为1.2时，返回2；输入为-2.3时，返回-2向下取整：返回小于输入且离输入值最近的一个整数。例如：输入为1.2时，返回1；输入为-2.3时，返回-3截尾取整：截去浮点数尾部的小数部分，也相当于向0方向取整。例如：输入为1.2时，返回1；输入为-2.3时，返回-2 |

| 出参 | 结果 | 整数 |  |

## **22. 创建三维向量**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/c042ca17-c377-4094-b9f3-315bd58a9edc.undefined)

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

## **23. 逻辑与运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/b8b994f4-ff4e-4085-a622-c36db43b04bb.undefined)

**节点功能**

对输入的两个布尔值进行与运算后输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入1 | 布尔值 |  |

| 入参 | 输入2 | 布尔值 |  |

| 出参 | 结果 | 布尔值 |  |

## **24. 逻辑或运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/d97cc476-29ae-44a0-8506-69b36bcb603e.undefined)

**节点功能**

对输入的两个布尔值进行或运算后输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入1 | 布尔值 |  |

| 入参 | 输入2 | 布尔值 |  |

| 出参 | 结果 | 布尔值 |  |

## **25. 逻辑异或运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/a1eaa605-69f6-434e-b94c-fdf9157d15de.undefined)

**节点功能**

对输入的两个布尔值进行异或运算后输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入1 | 布尔值 |  |

| 入参 | 输入2 | 布尔值 |  |

| 出参 | 结果 | 布尔值 |  |

## **26. 逻辑非运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/be5f8b79-7741-4adb-bf8a-1ab731d1bb4b.undefined)

**节点功能**

对输入的布尔值进行非运算后输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 输入 | 布尔值 |  |

| 出参 | 结果 | 布尔值 |  |

## **27. 数值小于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/1f283c47-5d99-41a0-8b55-dfef3ec761dd.undefined)

**节点功能**

返回左值是否小于右值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 左值 | 泛型 |  |

| 入参 | 右值 | 泛型 |  |

| 出参 | 结果 | 布尔值 |  |

## **28. 数值小于等于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/c350737c-c7cb-464c-bbb2-9e4a58ba20a6.undefined)

**节点功能**

返回左值是否小于等于右值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 左值 | 泛型 |  |

| 入参 | 右值 | 泛型 |  |

| 出参 | 结果 | 布尔值 |  |

## **29. 数值大于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/f07ced33-0e7d-4ced-a1c0-5f155cb0958f.undefined)

**节点功能**

返回左值是否大于右值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 左值 | 泛型 |  |

| 入参 | 右值 | 泛型 |  |

| 出参 | 结果 | 布尔值 |  |

## **30. 数值大于等于**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/1f3e4148-48ec-4134-8110-c15cfba2c6c4.undefined)

**节点功能**

返回左值是否大于等于右值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 左值 | 泛型 |  |

| 入参 | 右值 | 泛型 |  |

| 出参 | 结果 | 布尔值 |  |

## **31. 两坐标点距离**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/8ac19778-8941-4de6-97dd-b69cf142f493.undefined)

**节点功能**

计算两个坐标点之间的欧式距离

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 坐标点1 | 三维向量 |  |

| 入参 | 坐标点2 | 三维向量 |  |

| 出参 | 距离 | 浮点数 |  |

## **32. 正弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/6f35f4ae-ad87-422d-9668-63c9aa5494c9.undefined)

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

## **33. 余弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/58d4eadf-aee6-4d23-92be-016fffb49b55.undefined)

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

## **34. 正切函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/866105d0-ac70-4330-abe1-666331d7a4d5.undefined)

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

## **35. 反正弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/a0706620-dbdb-4b4f-b75d-ce42b4108e4e.undefined)

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

## **36. 反余弦函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/3ec0d306-d559-433c-b89c-aca8858626b3.undefined)

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

## **37. 反正切函数**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/0d3ab128-2408-47b3-91c0-20a8dbc71c87.undefined)

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

## **38. 三维向量旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/266ad15a-b38a-4a5d-b684-cd9950d79c98.undefined)

**节点功能**

将被旋转的三维向量，按照旋转所表示的欧拉角进行旋转后返回结果

说明：被旋转的三维向量是我们期望旋转的向量，旋转的欧拉角表示我们期望对该向量进行何种具体的旋转。而出参结果的三维向量则表示被旋转的原始三维向量在经过旋转后的情况

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 旋转 | 三维向量 | 该三维向量指代一个特定的旋转欧拉角，其三个分量分别代表：X：俯仰角 (Pitch) - 围绕物体局部X轴（右侧轴）的旋转。上下抬头/低头Y：偏航角 (Yaw) - 围绕物体局部Y轴（上方向轴）的旋转。左右转头Z：翻滚角 (Roll) - 围绕物体局部Z轴（前方向轴）的旋转。左右倾斜 |

| 入参 | 被旋转的三维向量 | 三维向量 |  |

| 出参 | 结果 | 三维向量 |  |

## **39. 方向向量转旋转**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/6a56e352-b658-45f3-891d-e9ec42c450fe.undefined)

**节点功能**

给定向前向量和向上向量，转化为欧拉角

举例：以人物为例，人物现在在三维空间中有一个初始朝向。我们想将此人物在三维空间中转到我们期望的朝向，那么向前向量表示我们期望其鼻子正对的方向，向上向量表示期望其头顶正对的方向。最终的三维向量出参则是该人物从初始朝向转向我们给定的期望朝向所需要经过的欧拉角旋转

说明：给定的向前向量和向上向量必须要单位化，否则可能会出现非预期的缩放效应，导致计算出错

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 向前向量 | 三维向量 | 表示单位期望的朝向 |

| 入参 | 向上向量 | 三维向量 | 定义单位的上方向（用于确定旋转的旋转角度），默认值为世界坐标系Y轴正方向 |

| 出参 | 旋转 | 三维向量 | 输出的是欧拉角，其三个分量分别代表：X：俯仰角 (Pitch) - 围绕物体局部X轴（右侧轴）的旋转。上下抬头/低头Y：偏航角 (Yaw) - 围绕物体局部Y轴（上方向轴）的旋转。左右转头Z：翻滚角 (Roll) - 围绕物体局部Z轴（前方向轴）的旋转。左右倾斜 |

## **40. 三维向量内积**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/433fab32-c0c3-499c-a569-4cfae98e3d21.undefined)

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

| 出参 | 结果 | 浮点数 |  |

## **41. 三维向量外积**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/dbf8caa6-2b6f-46f5-978c-2d6e7de13f62.undefined)

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

| 出参 | 结果 | 三维向量 |  |

## **42. 弧度转角度**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/37abf447-f3dc-4984-bbfd-e48522cced0e.undefined)

**节点功能**

将弧度值转为角度值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 弧度值 | 浮点数 |  |

| 出参 | 角度值 | 浮点数 |  |

## **43. 角度转弧度**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/38a69d48-cf61-4db5-8e2e-1557ad80cddf.undefined)

**节点功能**

将角度值转为弧度值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 角度值 | 浮点数 |  |

| 出参 | 弧度值 | 浮点数 |  |

## **44. 根据时间戳计算格式化时间**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/46790609-eca2-42f4-89db-d4c036c0f723.undefined)

**节点功能**

根据输入的时间戳将其转化为格式化时间

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 时间戳 | 整数 |  |

| 出参 | 年 | 整数 |  |

| 出参 | 月 | 整数 |  |

| 出参 | 日 | 整数 |  |

| 出参 | 时 | 整数 |  |

| 出参 | 分 | 整数 |  |

| 出参 | 秒 | 整数 |  |

## **45. 根据格式化时间计算时间戳**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/6fd87719-74bc-4de3-9e2e-6cb365bc527b.undefined)

**节点功能**

根据输入的格式化时间将其转化为时间戳

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 年 | 整数 |  |

| 入参 | 月 | 整数 |  |

| 入参 | 日 | 整数 |  |

| 入参 | 时 | 整数 |  |

| 入参 | 分 | 整数 |  |

| 入参 | 秒 | 整数 |  |

| 出参 | 时间戳 | 整数 |  |

## **46. 根据时间戳计算星期几**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/6e73531b-515c-462f-8791-e7600030a2b4.undefined)

**节点功能**

根据输入的时间戳将其转化为星期几

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 时间戳 | 整数 |  |

| 出参 | 星期 | 整数 |  |

## **47. 左移运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/5c9c747f-18ca-454c-878f-952b6a55d967.undefined)

**节点功能**

将输入值作为二进制数逻辑左移一定位数后输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 值 | 整数 |  |

| 入参 | 左移位数 | 整数 |  |

| 出参 | 结果 | 整数 |  |

## **48. 右移运算**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/7797fb5c-9617-4af5-83b9-13ae78fa50b8.undefined)

**节点功能**

将输入值作为二进制数逻辑右移一定位数后输出

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 值 | 整数 |  |

| 入参 | 右移位数 | 整数 |  |

| 出参 | 结果 | 整数 |  |

## **49. 按位与**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/272e181d-b56d-47f2-a8db-b0bf8b578bb5.undefined)

**节点功能**

将输入的两个值作为二进制进行按位与运算后返回结果

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 值1 | 整数 |  |

| 入参 | 值2 | 整数 |  |

| 出参 | 结果 | 整数 |  |

## **50. 按位或**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/a5138ffc-3263-4b7a-9f74-a99f7e5cb07c.undefined)

**节点功能**

将输入的两个值作为二进制进行按位或运算后返回结果

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 值1 | 整数 |  |

| 入参 | 值2 | 整数 |  |

| 出参 | 结果 | 整数 |  |

## **51. 按位异或**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/6b5b4e6d-b629-4623-b9d2-6b8b2f924e27.undefined)

**节点功能**

将输入的两个值作为二进制进行按位异或运算后返回结果

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 值1 | 整数 |  |

| 入参 | 值2 | 整数 |  |

| 出参 | 结果 | 整数 |  |

## **52. 按位取补**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/8a9bd790-7d0d-4885-afc3-411c92894823.undefined)

**节点功能**

将输入值作为二进制进行按位取补运算后返回结果

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 值 | 整数 |  |

| 出参 | 结果 | 整数 |  |

## **53. 按位写入**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/1bb6cc27-c8a9-45d8-a0df-92d5eb21fea1.undefined)

**节点功能**

将写入值作为二进制数，写入被写入值（同样作为二进制数）的【起始位，结束位】。起始位从0开始算，写入的值长度包含起始位和结束位

如果写入值的二进制有效数字长度（从左起第一个1开始计算）超过写入的长度，则写入失败，返回被写入值

如果写入值是负数，也会因为写入值超出长度而写入失败（负数的二进制首位为符号位1）

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 被写入值 | 整数 |  |

| 入参 | 写入值 | 整数 |  |

| 入参 | 写入起始位 | 整数 |  |

| 入参 | 写入结束位 | 整数 |  |

| 出参 | 结果 | 整数 |  |

## **54. 按位读出**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/6665be4e-4634-47d7-9f74-b907e53ddb06.undefined)

**节点功能**

从值（以二进制表示）的【起始位，结束位】读出值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 值 | 整数 |  |

| 入参 | 读出起始位 | 整数 |  |

| 入参 | 读出结束位 | 整数 |  |

| 出参 | 结果 | 整数 |  |

# **三、字典**

## **1. 拼装字典**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/cbaf2160-1041-46e3-8ef1-9d5291354399.undefined)

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

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/977dedbf-3656-4cd8-9ccb-5dac6c7cd1d8.undefined)

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

# **四、结构体**

## **1. 拼装结构体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/266384bd-fa98-4bf9-b112-566f494a8a7e.undefined)

**节点功能**

将多个参数拼合为一个结构体类型的值

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 出参 | 结构体 |  |  |

## **2. 拆分结构体**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mhnd4l069tk0/93434cf7-3197-4d68-83bf-f4c358ca3a48.undefined)

**节点功能**

获取指定结构体的所有参数

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 目标结构体 |  |  |
