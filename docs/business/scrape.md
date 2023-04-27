---
title: Scrape 刮奖
author: fico
date: 2022/09/23
tags:
 - 活动业务
 - 卡片
---
::: tip
适用于活动卡片等需求
:::

### 何时使用
```ts
import { HiScrape } from 'hi-kits/scrape'
```
### 基本用法

::: demo
```html
<div style="position: relative;">
    <h-scrape  
        width="300"
        percent="50"
        text="20感恩值刮一次" 
        desc="来刮我~"
        onchange="alert('恭喜中奖！')" 
        height="100" 
        background="#7ae5b5" 
        style="position: absolute; font-size: 14px"
    ></h-scrape>
    <!-- 刮层下面的内容 -->
    <img style="width: 300px; height:100px; position: relative; top:0; left: 0;" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d" />
</div>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `width`| 刮奖区宽度 |  `string` | - | 300
| `height`| 刮奖区高度 |  `string` | - | -
| `text`| 文字 |  `string` | - | -
| `percent`| 透明度百分比 |  `string` | - | -
| `desc`| 描述 |  `string` | - | -
| `background`| 刮奖区背景色 |  `string` | - | -
| `onchange`| 刮奖动作结束时的回调函数 |  `Function` | - | -
