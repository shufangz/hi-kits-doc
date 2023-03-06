---
title:  Countdown 倒计时
author: fico
date: 2022/06/21
tags:
 - 活动业务
 - 倒计时
---
::: tip
当选项过多时，使用下拉菜单展示并选择内容。
:::
### 何时使用
```ts
import { HiCountdown } from 'hi-kits/countdown'
```

### 基本用法

::: demo
```html
<h-countdown style="font-size: 12px; color: rgba(34, 34, 34, 0.707); "></h-countdown>
```
:::

### 设定初始时间和结束时间

::: demo
```html
<h-countdown beginTime="2022-08-08" endTime="2022-09-09" size="18" color="#1890ff"></h-countdown>

```
:::

### 不显示天数

::: demo
```html
<h-countdown beginTime="2022-08-08" endTime="2022-09-09" size="18" color="#3F51B5" daysShow="false"></h-countdown>

```
:::

### 改变格式

::: demo
```html
 <h-countdown beginTime="2022-08-08" endTime="2022-09-09" size="18" color="#000" daysShow="false" simple>
</h-countdown>
<h-countdown beginTime="2022-08-08" endTime="2022-09-09" size="18" color="#000" simple></h-countdown>
        
```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `beginTime`| 开始时间 |  `string` | - | -
| `endTime`| 结束时间 |  `string` | - | -
| `size`| 文字尺寸 |  `string` | - | -
| `color`| 文字颜色 |  `string` | - | -
| `daysShow`| 不显示天数 |  `boolean` | - | -
| `simple`| 简约模式 |  `boolean` | - | -
