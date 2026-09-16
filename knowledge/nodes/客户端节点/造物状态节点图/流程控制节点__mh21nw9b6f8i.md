# 流程控制节点

- path_id: `mh21nw9b6f8i`
- path: `节点介绍 / 客户端节点 / 造物状态节点图 / 流程控制节点`
- source: https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh21nw9b6f8i/content.html?v=1016
- detail: https://act.mihoyo.com/ys/ugc/tutorial/detail/mh21nw9b6f8i

# **一、通用**

## **1. 双分支**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh21nw9b6f8i/75b94dd8-3646-403f-9301-ab2d1ddd9b28.undefined)

**节点功能**

根据输入条件的判断结果可以分出“是”与“否”两个不同的分支

当布尔值为“是”时，后续会执行【是】对应的执行流；布尔值为“否”时，会执行【否】对应的执行流

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 条件 | 布尔值 |  |

## **2. 多分支**

![img](https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/mh21nw9b6f8i/965fbef7-8237-41f0-8007-8c99b8dd37a7.undefined)

**节点功能**

接受一个输入参数作为控制表达式(支持整数或字符串)，根据控制表达式的值可以分出多个不同的分支

当出引脚上的值与控制表达式的值相等时，会沿该出引脚向后执行逻辑。如果没有找到匹配的引脚，则会走【默认】引脚

**节点参数**

****

****

****

****
| 参数类型 | 参数名 | 类型 | 说明 |

| 入参 | 控制表达式 | 泛型 | 仅支持整数或字符串 |
