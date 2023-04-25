---
title: Layout 布局
author: fico
date: 2022/07/11
tags:
 - 布局
 - 容器
---
::: tip
用于布局的容器组件，方便快速搭建页面的基本结构
:::
### 基础布局
```ts
import { HiLayout } from 'hi-kits/layout'
```
### 垂直排列
::: demo
```html
  <h-layout class="layoutBox"></h-layout>
  <h-layout class="layoutBox layoutBoxo"></h-layout>

```
:::

### row 水平排列
::: demo
```html
<h-layout row>
  <h-layout class="layoutBox"></h-layout>
  <h-layout class="layoutBox layoutBoxo"></h-layout>
</h-layout>

```
:::

### expand 水平填充
根据剩余空间填充（主轴方向）
::: demo
```html
<h-layout row>
  <h-layout class="layoutBox" expand></h-layout>
  <h-layout class="layoutBox layoutBoxo"></h-layout>
</h-layout>

```
:::

### center 水平垂直居中
::: demo
```html
<h-layout center style="height:200px">
  <h-layout class="layoutBox layoutBoxo"></h-layout>
</h-layout>

```
:::

### center=mainAxis 以主轴方向居中
::: demo
```html
<h-layout center="mainAxis" style="height:200px">
  <h-layout class="layoutBox layoutBoxo"></h-layout>
</h-layout>

```
:::

### center=crosAxis 以纵轴方向居中
::: demo
```html
<h-layout center="crosAxis" style="height:200px">
  <h-layout class="layoutBox layoutBoxo"></h-layout>
</h-layout>

```
:::

### 简单的示例
::: demo
```html
<h-layout class="layout">
    <h-layout class="header">头部</h-layout>
    <h-layout row expand>
        <h-layout class="side"></h-layout>
        <h-layout expand center class="main">
            <h-layout center class="box">内容区域</h-layout>
        </h-layout>
        <h-layout class="side"></h-layout>
    </h-layout>
    <h-layout class="footer">底部</h-layout>
</h-layout>

<style>
  h-layout{ background: #2196f380; }
  .layoutBox{
    width: 100px;
    height: 100px;
    color: #fff;
  }
  .layoutBoxo{
    background: rgba(33, 243, 103, 0.5);
  }
  .layout{ width: 100%; height: 300px; }
  .side{ width: 200px; }
  .main{ margin: 0 10px; }
  .box{ width: 100px; height: 100px; color: #fff; }
  .header,.footer{ padding: 5px 10px; color: #fff; }
</style>
```
:::


### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `row` | 水平排列 | `boolean` | - | `false`
| `expand` | 根据剩余空间填充（主轴方向 | `boolean` | - | -
| `center` | 居中 | `string | boolean` |` mainAxis | crosAxis | boolean`  | `boolean`

