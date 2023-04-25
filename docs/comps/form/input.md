---
title: Input 输入框
author: fico
date: 2022/06/17
tags:
 - 表单
 - 输入框
---
::: tip
通过鼠标或键盘输入内容，是最基础的表单域的包装。
:::
### 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。
```ts
import { HiInput } from 'hi-kits/input'
```
### 基本用法

::: demo
```html
<h-input placeholder="请输入内容"></h-input>
<h-input disabled placeholder="请输入内容"></h-input>

```
:::

### 密码
::: demo
```html
<h-input type="password"></h-input>
```
:::

### 数字

::: demo
```html
<h-input type="number"></h-input>
```
:::

### 只读状态

::: demo
```html
<h-input readonly value="只读状态只读状态"></h-input>
```
:::