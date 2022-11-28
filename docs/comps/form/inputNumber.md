---
title: InputNumber 数字输入框
author: fico
date: 2022/08/23
tags:
 - 表单
 - 输入框
---
::: tip
通过鼠标或键盘，输入范围内的数值。
:::
### 何时使用
当需要获取标准数值时。
```ts
import { HiInputNumber } from 'hi-kits'
```

### 基本用法

数字输入框。


::: demo
```html
    <h-input-number></h-input-number>
```
:::
### 尺寸

三种大小的数字输入框


::: demo
```html
<h-space  dir="vertical">
    <h-input-number size="small"></h-input-number>
    <h-input-number size="default"></h-input-number>
    <h-input-number size="large"></h-input-number>
</h-space>

```
:::

### 默认值

::: demo
```html
<h-input-number defaultvalue="5"></h-input-number>

```
:::

### 不可用

::: demo
```html
<h-input-number disabled></h-input-number>

```
:::

### 限定最小值和最大值(0~9)

::: demo
```html
<h-input-number min="0" max="9"></h-input-number>

```
:::

### 设定步长值(步长 10)

::: demo
```html
<h-input-number step="10" defaultvalue="5"></h-input-number>

```
:::

### 设定步长值(步长 0.10)目前只支持小数点后两位

::: demo
```html
<h-input-number step="0.10" defaultvalue="5"></h-input-number>

```
:::

### 不同对齐方式的输入框

::: demo
```html
 <h-space  dir="vertical">
    <h-input-number align="left"></h-input-number>
    <h-input-number align="center"></h-input-number>
    <h-input-number align="right"></h-input-number>
</h-space>
```
:::


### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `size`| 尺寸 |  `string` | `small | default | large` | -
| `defaultvalue`| 默认值 |  `number` | - | 0
| `min`| 最小值 |  `number` | - | 0
| `min`| 最小值 |  `number` | - | -
| `min`| 最大值 |  `number` | - | -
| `step`| 步长 |  `number` | - | -
| `align`| 输入数字对齐方式 |  `string` | `left | center | right` | -
