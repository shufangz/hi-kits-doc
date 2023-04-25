---
title: Animate 动效
author: fico
date: 2022/07/11
tags:
 - animate
 - 基础组件
---
### 何时使用
```ts
import { HiAnimate } from 'hi-kits/animate'
```
### 基本用法
直接通过设置name来使用即可,会在页面加载完成时触发一次动画效果。

::: demo
```html
<h-space>
    <h-animate name="shakeX"  duration="10">
        <div id="shakeX" style="background-color: #81ea9d; width:100px; height:100px; color: #fff;text-align:center;line-height: 100px;" onclick=" HiServe.animate.run(document.getElementById('shakeX'), 'shakeX')">左右晃动</div>
    </h-animate>
    <h-animate name="shakeY">
        <div id="shakeY" style="background-color: #f8ccba; width:100px; height:100px;  color: #fff;text-align:center;line-height: 100px;" onclick=" HiServe.animate.run(document.getElementById('shakeY'), 'shakeY')">上下晃动</div>
    </h-animate>
</h-space>

```
:::
### 控制元素动效

通过触发`HiServe.animate.run(元素，动效名称)` 方法可控制元素呈现不同的动画效果
<div id="AnimateBox" style="background-color: #42b983; width:100px; height:100px"></div>

::: demo
```html
<h-space>
    <h-button type="primary" onclick="HiServe.animate.run(document.getElementById('AnimateBox'), 'bounce')">bounce</h-button>
    <h-button type="primary" onclick="HiServe.animate.run(document.getElementById('AnimateBox'), 'flash')">flash</h-button>
    <h-button type="primary" onclick="HiServe.animate.run(document.getElementById('AnimateBox'), 'headShake')">headShake</h-button>
    <h-button type="primary" onclick="HiServe.animate.run(document.getElementById('AnimateBox'), 'heartBeat',10)">heartBeat</h-button>
</h-space>

```
:::
### 参数说明

#### h-animate
|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `name` | 动效名称 | `string` | - | -
| `duration` | 动效时长 （单位秒/s），此处指完成一次动画的时长 | `number` | - | 1
| `onchange` | 动画结束时的回调方法 | `Function` | - | -


#### `HiAnimate.run()`方法提供了四个参数,可以支持设置动画时长，及回调函数

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `selector` | 元素选择器名称 | `string` | - | -
| `name` | 动效名称 | `string` | - | -
| `duration` | 动效时长 （单位秒/s） | `number` | - | 1
| `callback` | 回调方法,动画结束后触发 | `()=>{}` | - | -  | -

### 动效库
Hi-kits 目前提供了98个动画效果可供参考,点击可展示效果

<activeList />

