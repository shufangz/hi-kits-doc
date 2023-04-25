---
title: Rate 评分
author: fico
date: 2022/07/15
tags:
 - 表单
 - 评分
---
::: tip
评分组件。
:::
### 何时使用
- 对评价进行展示。
- 对事物进行快速的评级操作。
```ts
import { HiRate } from 'hi-kits/rate'
```
### 基本用法

最简单的用法。
::: demo
```html
    <h-rate></h-rate>
    
```
:::
### 默认选中
::: demo
```html
<h-space dir="vertical">
    <h-rate defaultvalue="1"></h-rate>
    <h-rate defaultvalue="3"></h-rate>
    <h-rate defaultvalue="5"></h-rate>
</h-space>

```
:::

### 辅助文字

用辅助文字直接地表达对应分数

::: demo
```html
    <h-rate defaultvalue="1" tips="terrible,bad,normal,good,wonderful"></h-rate>

```
:::

### 自定义
::: demo
```html
<h-space dir="vertical">
    <h-rate length="8" defaultvalue="1" ></h-rate>
    <h-rate length="10" color="red" defaultvalue="1" ></h-rate>
    <h-rate length="15" defaultvalue="10" color="pink"></h-rate>
</h-space>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|`defaultvalue`|默认数|`number`|-|-
|`tips`|提示文字, 以 , 分割的字符串文本 |`string`|-|-
|`icon`|图标|`string`|-|-
|`value`|当前值|`number`|-|-
|`length`|长度|`number`|-|-
|`onchange`|点击回调函数|`function`|-|-
