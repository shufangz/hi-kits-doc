---
title: EditWord 文字编辑
author: fico
date: 2022/04/27
tags:
 - 文本
 - 表单
---

```ts
import { HiEditWord } from 'hi-kits/editWord'
```
### 基本用法

::: demo
```html
<h-edit-word onchange="showDialog(event)">文字编辑</h-edit-word>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `onchange`| 当前是否选中的回调	 |  `EventEmitter<boolean>` | - | -
