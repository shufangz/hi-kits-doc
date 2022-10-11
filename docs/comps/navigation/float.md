---
title: Float 浮动
author: fico
date: 2022/08/10
tags:
 - 布局
 - 浮动
---
### 何时使用
<pre class="language-ts">
import { HiFloat } from 'hi-kits/float'
</pre>

### 基本用法
通过设置`dir` 可将元素浮动到指定位置。查看页面左上角和右上角
::: demo
```html
<h-float dir="topleft">
    <h-space gutter="30" dir="vertical">
        <h-button shape='circle' type="primary">TL</h-button>
        <h-button shape='circle' type="primary">TL</h-button>
        <h-button shape='circle' type="primary">TL</h-button>
    </h-space>
</h-float>
 <h-float dir="topright">
    <h-space gutter="10" dir="vertical">
        <h-button shape='circle' type="primary">TR</h-button>
        <h-button shape='circle' type="primary">TR</h-button>
        <h-button shape='circle' type="primary">TR</h-button>
    </h-space>
</h-float>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `dir`| 浮动位置 |  `string` | `'top' | 'right' | 'bottom' | 'left' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright'` | -
