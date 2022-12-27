---
title:  Barrage 弹幕
author: fico
date: 2022/11/26
tags:
 - 活动业务
 - 倒计时
---
::: tip
适用于轮播广告等弹幕需求
:::

```ts
import { HiBarrage } from 'hi-kits'
```

### 基本用法

::: demo
```html
<h-barrage text="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！"></h-barrage>

```
:::

### 不同速度

::: demo
```html
<h-barrage speed="25" text="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！"></h-barrage>
<h-barrage speed="150" text="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！"></h-barrage>
```
:::

### 控制暂停

::: demo
```html
<h-button onclick="document.getElementById('barrage').setAttribute('paused', 'true')"> 暂停 </h-button>
<h-button onclick="document.getElementById('barrage').setAttribute('paused', 'false')"> 继续 </h-button>
<h-barrage id="barrage" text="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！"></h-barrage>
```
:::

### 悬浮暂停

::: demo
```html
<h-barrage 
    onmouseover="document.getElementById('barrage1').setAttribute('paused', 'true')" 
    onmouseleave="document.getElementById('barrage1').setAttribute('paused', 'false')"
    id="barrage1" text="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！">
</h-barrage>
```
:::

### 点击暂停

::: demo
```html
<h-barrage 
    onclick="document.getElementById('barrage2').setAttribute('paused', !document.getElementById('barrage2').getAttribute('paused'))" 
    id="barrage2" 
    text="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！">
</h-barrage>    
```
:::

### 反向动画

::: demo
```html
<h-barrage reverse text="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！"></h-barrage>
```
:::

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `text`| 内容 |  `string` | - | -
| `speed`| 速度 |  `number` | - | 50
| `paused`| 暂停 |  `boolean` | - | false
| `reverse`| 反转 |  `boolean` | - | false
| `onclick`| 点击事件 |  `function` | - | -
| `onmouseover`| 鼠标移入事件 |  `function` | - | -
| `onmouseleave`| 鼠标移出事件 |  `function` | - | -
