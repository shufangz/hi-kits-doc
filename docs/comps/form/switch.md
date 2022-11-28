---
title: Switch 开关
author: fico
date: 2022/04/27
tags:
 - 表单
 - 开关
---
::: tip
开关选择器。
:::
### 何时使用
- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

```ts
import { HiSwitch } from 'hi-kits'
```

### 基本用法

最简单的用法。

::: demo
```html
<h-switch></h-switch>
<h-switch onchange="HiMessage.info({content: event.detail.checked, duration: 1000})"></h-switch>

```
:::

### 不可用

Switch 失效状态。

::: demo
```html
<h-switch disabled name="disabled">sdsdd</h-switch>

```
:::

### 默认选中

::: demo
```html
<h-switch checked></h-switch>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `checked`| 是否选中 |  `boolean` | - | `false`
| `disabled`| 是否禁用 |  `boolean` | - | `false`
| `onchange`| 当前是否选中的回调	 |  `EventEmitter<boolean>` | - | -
