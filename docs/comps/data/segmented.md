---
title: Segmented 分段控制器
author: huzhibo
date: 2022/09/10
tags:
 - 控制
 - 数据渲染
---
### 何时使用
- 用于展示多个选项并允许用户选择其中单个选项；
- 当切换选中选项时，关联区域的内容会发生变化。
```ts
import { HiSegmented } from 'hi-kits/segmented'
```
### 基本用法

::: demo
```html
<h-segmenteds current="1">
    <h-segmented>Daily</h-segmented>
    <h-segmented>Weekly</h-segmented>
    <h-segmented>Monthly</h-segmented>
    <h-segmented>Quarterly</h-segmented>
    <h-segmented>Yearly</h-segmented>
</h-segmenteds>

```
:::

### 不同尺寸

::: demo
```html
<h-divider text="小"></h-divider>
<h-segmenteds style="margin-bottom: 12px" current="1" size="small">
    <h-segmented>Daily</h-segmented>
    <h-segmented>Weekly</h-segmented>
    <h-segmented>Monthly</h-segmented>
    <h-segmented>Quarterly</h-segmented>
    <h-segmented>Yearly</h-segmented>
</h-segmenteds>
<h-divider text="大"></h-divider>
<h-segmenteds current="4" size="large">
    <h-segmented>Daily</h-segmented>
    <h-segmented>Weekly</h-segmented>
    <h-segmented>Monthly</h-segmented>
    <h-segmented>Quarterly</h-segmented>
    <h-segmented>Yearly</h-segmented>
</h-segmenteds>

```
:::

### 指定选项的值

::: demo
```html
<h-segmenteds current="val2">
    <h-segmented value="val1">Daily</h-segmented>
    <h-segmented value="val2">Weekly</h-segmented>
    <h-segmented value="val3">Monthly</h-segmented>
    <h-segmented value="val4">Quarterly</h-segmented>
    <h-segmented value="val5">Yearly</h-segmented>
</h-segmenteds>

```
:::

### 禁用

::: demo
```html
<h-divider text="整体"></h-divider>
<h-segmenteds current="val2" disabled>
    <h-segmented value="val1">Daily</h-segmented>
    <h-segmented value="val2">Weekly</h-segmented>
    <h-segmented value="val3">Monthly</h-segmented>
    <h-segmented value="val4">Quarterly</h-segmented>
    <h-segmented value="val5">Yearly</h-segmented>
</h-segmenteds>
<h-divider text="单个数据禁用"></h-divider>
<h-segmenteds current="val2" >
    <h-segmented value="val1" disabled>Daily</h-segmented>
    <h-segmented value="val2">Weekly</h-segmented>
    <h-segmented value="val3" disabled>Monthly</h-segmented>
    <h-segmented value="val4">Quarterly</h-segmented>
    <h-segmented value="val5">Yearly</h-segmented>
</h-segmenteds>

```
:::

### 透明背景

::: demo
```html
<h-segmenteds current="val2" transparentFill>
    <h-segmented value="val1">Daily</h-segmented>
    <h-segmented value="val2">Weekly</h-segmented>
    <h-segmented value="val3">Monthly</h-segmented>
    <h-segmented value="val4">Quarterly</h-segmented>
    <h-segmented value="val5">Yearly</h-segmented>
</h-segmenteds>

```
:::
### 参数说明

#### h-segmenteds
|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `disabled`| 是否可用 |  `boolean` | - | `false`
| `value`| 组件值，默认为组件的序号 |  `string` | - | `false`

#### h-segmented
|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `disabled`| 是否可用 |  `boolean` | - | `false`
| `transparentFill`| 组件值，默认为组件的序号 |  `boolean` | - | `false`
| `current`| 当前选中的数据 |  `string` | - | -
| `size`| 尺寸 |  `string` | `small | large` | -

