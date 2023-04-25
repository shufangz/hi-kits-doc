---
title:  Box 盒子模型
author: fico
date: 2022/07/11
tags:
 - 基础组件
---

::: tip
盒子模型(Box Modal)： 把HTML页面中的元素看作是一个矩形的盒子，也就是一个盛装内容的容器。每个矩形包括：margin border padding content 四个属性
:::
### 何时使用

```ts
import { HiBox } from 'hi-kits/box'
```

### 基本用法

::: demo
```html
<h-box class="Box" margin="25" padding="25" border="25" >这里是盒子内的实际内容。有 25px 内间距，25px 绿色外间距、25px 蓝色边框。</h-box>

<style>
  .Box {
    background-color: #90eedb;
    border-style: dashed;
    border-color: #91c1f4;
    box-shadow: 0 0 0px 25px #b3f5b0;;
  }
</style>
```
:::

### 自定义box

::: demo
```html
<h-box class="Box1" margin="10px 5px" padding="25px 0" border="5px 3px 4px">
  这里是盒子内的实际内容。有 25px 内间距，25px黄色外间距、25px 蓝色边框。
</h-box>
```
:::
<style>
  .Box1 {
    background-color: #bababa;
    border-style: dashed;
    border-color: #1890ff;
    box-shadow: 0 0 0px 25px #f4e02b;
  }
</style>
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `margin` | 清除边框外的区域，外边距是透明的	| `number` | - | 0
| `border` | 围绕在内边距和内容外的边框	| `number` | - | 0
| `padding` | 清除内容周围的区域，内边距是透明的	| `number` | - | 0
| `content` | 盒子的内容，显示文本和图像	| `number` | - | 0


