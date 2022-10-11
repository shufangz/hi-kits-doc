---
title: Statistic 统计
author: fico
date: 2022/07/20
tags:
 - 数据渲染
---
::: tip
展示统计数字。
:::
### 何时使用
- 当需要突出某个或某组数字时。
- 当需要展示带描述的统计类数据时使用。
```ts
import { HiStatistic } from 'hi-kits/statistic'
```
### 基本用法

简单的展示。
x
::: demo
```html
<h-row gutter="10">
    <h-col span="6">
        <h-statistic heading="Active Users">
            1,949,101
        </h-statistic>
    </h-col>
    <h-col span="6">
        <h-statistic heading="Account Balance (CNY)
        ">
        2,019.11
        </h-statistic>
    </h-col>
     <h-col span="6">
        <h-statistic heading="Unmerged">
            93/ 100
        </h-statistic>
    </h-col>
</h-row>

```
:::

### 自定义内容

::: demo
```html
<h-row>
    <h-col span="8">
        <h-statistic heading="Feedback">
            <h-icon name="heart" size="24" color="#F44336"></h-icon>  1,128
        </h-statistic>
    </h-col>
    <h-col span="8">
        <h-statistic heading="Day Level">
            <h-countdown style="font-size: 24px; color: rgba(8, 136, 6, 0.707);"></h-countdown>
        </h-statistic>
    </h-col>
</h-row>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `heading`| 数据标题 |  `string` | - | -
