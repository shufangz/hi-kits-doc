---
title: DatePicker 日期选择框
author: liulina
date: 2022/06/27
tags:
 - 表单
 - 日期选择
---
::: tip
选择日期的控件。
:::
### 何时使用
当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

<pre class="language-ts">
import { HiDatePicker } from 'hi-kits/date-picker'
</pre>

### 基本用法

最简单的用法，在浮层中可以选择日期。

::: demo
```html
<h-space dir="vertical">
    <h-date-picker type="year"></h-date-picker>
    <h-date-picker type="month"></h-date-picker>
    <h-date-picker></h-date-picker>
</h-space>

```
:::

### 日期时间选择

::: demo
```html
    <h-date-picker enableTimePicker></h-date-picker>

```
:::
### 自定义日期范围选择
通过设置`min` 和 `max`属性可以自定义日期选择范围。
::: demo
```html
<h-space dir="vertical">
    <h-date-picker max="2023-3-5"></h-date-picker>
    <h-date-picker max="2022-7-25" enableTimePicker></h-date-picker>
    <h-date-picker max="2022-7-25" enableTimePicker defaultTimeValue="12:12:25"></h-date-picker>
    <h-date-picker range min="2020-10-20" max="2023-3-5" defaultvalue="2020-10-01~2020-12-25"
      defaultTimeValue="12:12:25"></h-date-picker>
    <h-date-picker range min="2020-10-20" max="2023-3-5" defaultvalue="2020-10-01~2020-12-25" enableTimePicker
      defaultTimeValue="12:12:25~13:13:26"></h-date-picker>
</h-space>

```
:::
### 日期选择不可用

::: demo
```html
    <h-date-picker disabled></h-date-picker>
    <h-date-picker max="2022-7-25" disabled enableTimePicker></h-date-picker>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|`disabled`|不可用|`boolean`|-|`false`
|`range`|是否选择范围|`boolean`|-|`false`
|`enableTimePicker`|是否可选择时间|`boolean`|-|`false`
|`min`|可选择时间的最小值|`yyyy-mm-dd`|-|-
|`max`|可选择时间的最大值|`yyyy-mm-dd`|-|-
|`defaultvalue`|默认值|`yyyy-mm-dd～yyyy-mm-dd`  `hh:mm:ss` |-|-

