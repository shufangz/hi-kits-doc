---
title: TimePicker 时间选择器
author: liulina
date: 2022/06/20
tags:
 - 表单
 - 时间选择
---
::: tip
选择时间的控件
:::
### 何时使用
选择时间的控件。
```ts
import { HiTimePicker } from 'hi-kits/timePicker'
```

### 基本用法

最简单的用法，在浮层中可以选择时间。

::: demo
```html
<h-space dir="vertical">
    <h-time-picker></h-time-picker>
</h-space>

```
:::

### 自定义时间范围选择
::: demo
```html
<h-space dir="vertical">
    <h-time-picker range></h-time-picker>
    <h-time-picker range defaultTimeValue="12:24:30~23:20:48"></h-time-picker>
    <h-time-picker range defaultTimeValue="12:24:30~23:20:40" secondStep="10"></h-time-picker>
</h-space>

```
:::
### 日期选择不可用

::: demo
```html
    <h-time-picker disabled></h-time-picker>

```
:::

### 不可清除

::: demo
```html
    <h-time-picker allowClear="false"></h-time-picker>

```
:::
### 12小时制

::: demo
```html
    <h-time-picker defaultTimeValue="12:24:30 am" allowClear="false" use12Hours></h-time-picker>
    <h-time-picker range defaultTimeValue="12:24:30 am~12:20:40 pm" allowClear use12Hours></h-time-picker>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|`disabled`|不可用|`boolean`|-|`false`
|`range`|是否是范围选择器|`boolean`|-|`false`
|`use12Hours`|是否是范围选择器|`boolean`|-|`false`
|`showNow`|是否展示此刻按钮|`boolean`|-|`true`
|`allowClear`|是否展示清除按钮|`boolean`|-|`true`
|`hourStep`|小时步长|`number`|-|1
|`minuteStep`|分钟步长|`number`|-|1
|`secondStep`|秒步长|`number`|-|1
|`min`|可选择时间的最小值|`yyyy-mm-dd`|-|-
|`max`|可选择时间的最大值|`yyyy-mm-dd`|-|-
|`defaultTimeValue`|默认值|`yyyy-mm-dd～yyyy-mm-dd`  `hh:mm:ss` |-|-
|`onOpenChange`|面板打开/关闭时的回调	|`function`|-|-
|`onChange`|时间发生变化的回调	|`function`|-|-

