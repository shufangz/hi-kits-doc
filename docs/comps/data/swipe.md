---
title:  Swipe 轮播
author: fico
date: 2022/11/11
---
::: tip
适用于移动端循环播放一组图片或内容。
:::

### 何时使用
```ts
import { HiSwipe } from 'hi-kits/swipe'
```

### 基本用法

::: demo
```html
<h-row gutter="10">
    <h-col span="6">
        <h-swipe>
            <h-swipe-item>
                <div>1</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>2</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>3</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>4</div>
            </h-swipe-item>
        </h-swipe>
    </h-col>
</h-row>
```
:::

### 圆形指示器

::: demo
```html
<h-row gutter="10">
    <h-col span="6">
        <h-swipe  type='round'>
            <h-swipe-item>
                <div>1</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>2</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>3</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>4</div>
            </h-swipe-item>
        </h-swipe>
    </h-col>
</h-row>
```
:::

### 自动播放

::: demo
```html
<h-row gutter="10">
    <h-col span="6">
        <h-swipe  type='round' autoplay>
            <h-swipe-item>
                <div>1</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>2</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>3</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>4</div>
            </h-swipe-item>
        </h-swipe>
    </h-col>
</h-row>
```
:::

### 设置默认选中的 轮播

::: demo
```html
<h-row gutter="10">
    <h-col span="6">
        <h-swipe type='round' defaultindex="2">
            <h-swipe-item>
                <div>1</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>2</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>3</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>4</div>
            </h-swipe-item>
        </h-swipe>
    </h-col>
</h-row>
```
:::

### 设置指示器颜色

::: demo
```html
<h-row gutter="10">
    <h-col span="6">
        <h-swipe activecolor="red" inactivecolor="#000">
            <h-swipe-item>
                <div>1</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>2</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>3</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>4</div>
            </h-swipe-item>
        </h-swipe>
    </h-col>
</h-row>
```
:::


### 横向拖拽滑动模式

::: demo
```html
<h-row gutter="10">
    <h-col span="6">
        <p>横向拖拽滑动模式</p>
       <h-swipe slide="drag" radius="10">
                <h-swipe-item>
                  <div>1</div>
                </h-swipe-item>
                <h-swipe-item>
                  <div>2</div>
                </h-swipe-item>
                <h-swipe-item>
                  <div>3</div>
                </h-swipe-item>
                <h-swipe-item>
                  <div>4</div>
                </h-swipe-item>
            </h-swipe> 
    </h-col>
    <h-col span="6">
        <p>横向拖拽滑动2模式</p>
        <h-swipe slide="drag" mode="1/1" gutter="10">
            <h-swipe-item>
                <div>1</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>2</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>3</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>4</div>
            </h-swipe-item>
        </h-swipe>
    </h-col>
    <h-col span="6">
        <p>横向拖拽滑动2.5模式</p>
        <h-swipe slide="drag" mode="1/1/0.5" gutter="10" radius="10">
            <h-swipe-item>
                <div>1</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>2</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>3</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>4</div>
            </h-swipe-item>
        </h-swipe>
    </h-col>
    <h-col span="6">
        <p>横向拖拽滑动3模式</p>
        <h-swipe slide="drag" mode="1/1/1" gutter="10" radius="10">
            <h-swipe-item>
                <div>1</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>2</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>3</div>
            </h-swipe-item>
            <h-swipe-item>
                <div>4</div>
            </h-swipe-item>
        </h-swipe>
    </h-col>
</h-row>
```
:::

<style>
    h-swipe-item{
      background-color: #1890ff;
    }
    h-swipe-item > div{
      width: 100%;
      height: 100px;
      color: #fff;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h-swipe-item:nth-child(odd) > div {
      background-color: #66c6f2;
    }
    h-swipe-item:nth-child(even) > div {
        background-color: #39a9ed;
    }
</style>