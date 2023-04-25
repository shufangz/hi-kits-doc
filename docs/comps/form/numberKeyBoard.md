---
title: NumberKeyboard 数字键盘
author: fico
date: 2022/09/05
tags:
 - 表单
 - 工具
 - 移动端
---
::: tip
虚拟数字键盘，可以配合密码输入框组件或自定义的输入框组件使用。
:::
### 何时使用
```ts
import { HiNumberKeyboard } from 'hi-kits/numberKeyBoard'
```
### 默认键盘

::: demo
```html
<h-button onclick="document.getElementById('Keyboard').setAttribute('show', '')">弹出默认键盘</h-button>
<h-number-keyboard id="Keyboard"></h-number-keyboard>

```
:::

### 带标题的键盘

::: demo
```html
<h-button onclick="document.getElementById('Keyboard1').setAttribute('show', '')">弹出带标题的键盘</h-button>
<h-number-keyboard id="Keyboard1" head="键盘标题" ></h-number-keyboard>

```
:::


### 配置随机数字

::: demo
```html
<h-button onclick="document.getElementById('Keyboard2').setAttribute('show', '')">弹出配置随机数字的键盘</h-button>
<h-number-keyboard id="Keyboard2" random></h-number-keyboard>


```
:::

### 带右侧栏的键盘

::: demo
```html
<h-button onclick="document.getElementById('Keyboard3').setAttribute('show', '')">弹出带右侧栏的键盘</h-button>
<h-number-keyboard id="Keyboard3" head="键盘标题" random sidebar></h-number-keyboard>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `show`| 显示状态 |  `boolean` | - | `false`
| `mode`| 显示模式 |  `string` | `'random' | 'custom' | 'sidebar'` | -
| `random`| 是否随机数字键盘 |  `boolean` | - | `false`
| `sidebar`| 是否带右侧栏 |  `boolean` | - | `false`
| `head`| 键盘标题 |  `string` | - | -
