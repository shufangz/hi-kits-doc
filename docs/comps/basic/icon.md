---
title: Icon 图标
author: fico
date: 2022/04/27
tags:
 - ICON
 - 基础组件
---
::: tip
语义化的矢量图形。
:::
### 何时使用

<pre class="language-ts">
import { HiIcon } from 'hi-kits/icon'
</pre>
### 使用方法
直接通过设置`name`来使用即可

::: demo
```html
<h-icon name="close" size="30" color="orangered"></h-icon>
<h-icon name="add_circled" size="30" color="orangered"></h-icon>
<h-icon name="badge" size="30" color="#1E90FF"></h-icon>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `name` | 名称 | `string` | - | -
| `size` | 大小 | `string` | - | -
| `color` | 颜色 | `string` | - | -  | -

### 图标列表
<iconlist />

