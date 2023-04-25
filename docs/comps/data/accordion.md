---
title: Accordion 折叠面板
author: zhaodanxia
date: 2022/08/25
tags:
 - 面板
---

::: tip
可以折叠/展开的内容区域。
:::
### 何时使用
- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。
```ts
import { HiAccordion } from 'hi-kits/accordion'
```

### 基本用法

可以同时展开多个面板，这个例子默认展开了第一个。

::: demo
```html
<h-accordion>
    <h-accordion-panel heading="我是标题1" content="我是内容1" active></h-accordion-panel>
    <h-accordion-panel heading="我是标题2" content="我是内容2"></h-accordion-panel>
    <h-accordion-panel heading="我是标题3" content="我是内容3"></h-accordion-panel>
</h-accordion>

```
:::


### 幽灵折叠面板

背景透明且无边框

::: demo
```html
<h-accordion ghost>
    <h-accordion-panel heading="我是标题1" content="我是内容1"></h-accordion-panel>
    <h-accordion-panel heading="我是标题2" content="我是内容2"></h-accordion-panel>
    <h-accordion-panel heading="我是标题3" content="我是内容3"></h-accordion-panel>
</h-accordion>
```
:::

### disabled，无法展开
面板二disabled，无法展开

::: demo
```html
<h-accordion>
    <h-accordion-panel heading="我是标题1" content="我是内容1"></h-accordion-panel>
    <h-accordion-panel heading="我是标题2" content="我是内容2" disabled></h-accordion-panel>
    <h-accordion-panel heading="我是标题3" content="我是内容3"></h-accordion-panel>
</h-accordion>

```
:::



### 每次只打开一个tab

::: demo
```html
<h-accordion isAccordion onsubmit="handleAccordion()">
    <h-accordion-panel heading="我是标题1" content="我是内容1"></h-accordion-panel>
    <h-accordion-panel heading="我是标题2" content="我是内容2"></h-accordion-panel>
    <h-accordion-panel heading="我是标题3" content="我是内容3"></h-accordion-panel>
</h-accordion>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `active`| 是否默认打开面板 |  `boolean` | - | `false`
| `ghost`| 是否透明折叠面板 |  `boolean` | - | `false`
| `isAccordion`| 手风琴模式 |  `boolean` | - | `false`

