---
title:  Progress 进度条
author: fico
date: 2022/11/08
---
::: tip
展示进度
:::

### 何时使用
在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
- 当需要显示一个操作完成的百分比时。

```ts
import { HiProgress } from 'hi-kits'
```

### 何时使用
::: demo
```html
<h-progress value="20"></h-progress>

```
:::

### 显示字体进度

::: demo
```html
<h-progress value="60" showtext></h-progress>

```
:::

### 自定义颜色/背景色

::: demo
```html
<h-progress value="40" color='green' showtext></h-progress>
<h-progress value="50" color='red' showtext background="#ffe4bc"></h-progress>
        
```
:::

### 自定义宽度/高度/圆角/显示百分比
::: demo
```html
<h-progress value="90"
    class="auto"
    color='linear-gradient(
    268deg,#fa2c19 0%,#fa3f19 44.59259259%,#fa5919 83.40740741%,#fa6419 100%)'>
    <span>0.9</span>
</h-progress>
```
:::


<style>
h-progress{
    width: 100%;
    margin: 16px;
    margin-right: 0;
}
</style>