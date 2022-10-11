---
title: Swipeout 滑动操作
author: fico
date: 2022/08/30
tags:
 - 操作
 - 移动端
---
::: tip
可以左右滑动来展示操作按钮的单元格组件。
:::
### 何时使用
```ts
import { HiSwipeout } from 'hi-kits/swipeout'
```

### 基本用法

适用广泛的基础单选

::: demo
```html
<h-list>
    <h-swipeout>
        <h-list-item>
        请向左滑动
        </h-list-item>
        <h-swipeout left>
        <h-swipeout-item>dsdss</h-swipeout-item>
        <h-swipeout-item>2222</h-swipeout-item>
        </h-swipeout>
        <h-swipeout right>
            <h-swipeout-item>2311</h-swipeout-item>
            <h-swipeout-item>4444</h-swipeout-item>
        </h-swipeout>

    </h-swipeout>
    <h-swipeout>
        <h-list-item>
            content
        </h-list-item>
    </h-swipeout>
</h-list>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `left`| 左侧 |  `boolean` | - | -
| `right`| 右侧 |  `boolean` | - | -
