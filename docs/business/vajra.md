---
title: Vajra District 金刚区 
author: fico
date: 2022/07/19
tags:
 - 布局
 - 业务
 - 金刚区
---
::: tip
金刚区是一个页面中头部的重要位置,是页面的核心功能区域,表现形式为多行排列的宫格区图标。
:::
```ts
import { HiVajra } from 'hi-kits/vajra'
```

### 基本用法
::: demo [vanilla]
```html
<h-vajra row="2" col="5" gutter="12">
    <h-vajra-item text="3333">
        <span slot="icon">
            <a class="Example">
                <h-badge count="643" suit=""></h-badge>
            </a>
        </span>
    </h-vajra-item>
    <h-vajra-item text="3333">
        <span slot="icon">
            <a class="Example">
                <h-badge count="643" suit=""></h-badge>
            </a>
        </span>
    </h-vajra-item>
    <h-vajra-item text="3333">
        <span slot="icon">
            <a class="Example">
                <h-badge count="643" suit=""></h-badge>
            </a>
        </span>
    </h-vajra-item>
    <h-vajra-item text="11111">
        <span slot="icon">
            <a class="Example">
                <h-badge count="秒杀"></h-badge>
            </a>
        </span>
    </h-vajra-item>
    <h-vajra-item text="22222">
        <span slot="icon">
            <h-icon name="error" size="42" color="#3F51B5">
                <h-badge dot></h-badge>
            </h-icon>
        </span>
    </h-vajra-item>
    <h-vajra-item text="22222">
        <span slot="icon">
            <h-icon name="heart" size="42" color="#F44336">
                <h-badge dot badgestyle="background-color: rgb(82, 196, 26);"></h-badge>
            </h-icon>
        </span>
    </h-vajra-item>
    <h-vajra-item text="22222">
        <span slot="icon">
            <a class="Example">
                <h-badge count="643" suit=""></h-badge>
            </a>
        </span>
    </h-vajra-item>
    <h-vajra-item text="22222">
        <span slot="icon">
            <h-icon name="star" size="42" color="#000"></h-icon>
        </span>
    </h-vajra-item>
    <h-vajra-item text="22222">
        <span slot="icon">
            <h-icon name="warning" size="42" color="#42b983"></h-icon>
        </span>
    </h-vajra-item>
</h-vajra>

```
:::
<style>
    .Example{
        width: 42px;
        height: 42px;
        border-radius: 4px;
        background: #eee;
        display: inline-block;
    }
</style>
### h-vajra

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `row`| 行数 |  `number` | - | 1
| `col`| 列数 |  `number` | - | 1
| `gutter`| 子项目间距 |  `number` | - | 1

### h-vajra-item

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `text`| 文本 |  `string` | - | -
| `col`| 列数 |  `number` | - | 1
