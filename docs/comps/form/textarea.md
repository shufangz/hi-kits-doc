---
title: TextArea 文本域
author: fico
date: 2022/11/04
tags:
 - 表单
 - 文本输入
---
::: tip
多行文本输入框
:::
### 何时使用
```ts
import { HiTextarea } from 'hi-kits'
```

### 基本用法

::: demo
```html
<h-textarea placeholder="请输入内容"></h-textarea>
```
:::

### 字数统计

::: demo
```html
<h-textarea showcount placeholder="请输入内容"></h-textarea>
```
:::

### 字数限制

::: demo
```html
<h-textarea showcount maxlength="50" placeholder="请输入内容"></h-textarea>
```
:::

### 指定行数

::: demo
```html
<h-textarea rows="4" placeholder="请输入内容"></h-textarea>
```
:::

### 根据内容自动调整高度

::: demo
```html
<h-textarea autosize placeholder="请输入内容"></h-textarea>
```
:::

### 禁用 && 只读

::: demo
```html
<h-textarea disabled placeholder="请输入内容"></h-textarea>
<h-textarea readonly value="只读状态只读状态"></h-textarea>
```
:::

### 触发事件

::: demo
```html
<h-textarea
    onblur="HiServe.message.info({content: event.target.value+'/ blur'})"
    onfocus="HiServe.message.info({content: event.target.value+'/ focus'})"
    oninput="HiServe.message.info({content: event.target.value+'/ input'})"
    value="hello textarea">
</h-textarea>
```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `placeholder`| 占位符 |  `string` | - | -
