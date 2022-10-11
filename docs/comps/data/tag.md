---
title: Tag 标签
author: fico
date: 2022/04/27
tags:
 - 标签
 - 基础组件
---
::: tip
用于标记和选择。进行标记和分类的小标签。
:::
### 何时使用
- 用于标记事物的属性和维度。
- 进行分类。
<pre class="language-ts">
import { HiTag } from 'hi-kits/tag'
</pre>
### 基本用法

基本标签的用法。可通过text设置标签文字。color 设置文字颜色


::: demo
```html
<h-tag text="标签一"></h-tag>
<h-tag text="标签二" color="#fff" style="background: purple;"></h-tag>
<h-tag text="标签三" style="background: gold;"></h-tag>
<h-tag text="标签四" color="#fff" style="background: blue;"></h-tag>
<h-tag text="标签五" style="background: cyan;"></h-tag>
<h-tag text="标签六" style="background: #108ee9;"></h-tag>

```
:::

### 不同尺寸
通过size 设定不同大小的标签
::: demo
```html
<h-tag text="标签一" size="15"></h-tag>
<h-tag text="标签二" size="20" color="#fff" style="background: purple;"></h-tag>
<h-tag text="标签三" size="25" style="background: gold;"></h-tag>
<h-tag text="标签四" size="30" color="#fff" style="background: blue;"></h-tag>
<h-tag text="标签五" size="35" style="background: cyan;"></h-tag>
<h-tag text="标签六" size="40" style="background: #108ee9;"></h-tag>

```
:::

### 带图标的Tag


::: demo
```html
<h-tag text="用户">
    <h-icon name="person" size="20" color="#3F51B5"></h-icon>
</h-tag>
<h-tag text="标签二" color="#fff" style="background: purple;">
  <h-icon name="info" size="20" color="#fff"></h-icon>
</h-tag>
<h-tag text="标签三" style="background: gold;">
    <h-icon name="heart" size="20" color="red"></h-icon>
</h-tag>
<h-tag text="标签四" color="#fff" style="background: blue;">
    <h-icon name="star" size="20" color="aliceblue"></h-icon>
</h-tag>
<h-tag text="标签五" style="background: cyan;">
    <h-icon name="warning" size="20" color="#3F51B5"></h-icon>
</h-tag>
<h-tag text="标签六" style="background: #108ee9;">
    <h-icon name="sync" size="20" color="lightblue"></h-icon>
</h-tag>

```
:::

### 有提醒的Tag


::: demo
```html
<h-tips tips="person" type="info">
    <h-tag text="用户">
    </h-tag>
</h-tips>
<h-tips tips="info" color="#ccc">
    <h-tag text="标签二" color="#fff" style="background: purple;">
    </h-tag>
</h-tips>
<h-tips tips="标签三" color="gold">
    <h-tag text="标签三" style="background: gold;">
    </h-tag>
</h-tips>
<h-tips tips="标签四" type="error">
    <h-tag text="标签四" color="#fff" style="background: blue;">
    </h-tag>
</h-tips>
<h-tips tips="标签五" type="success">
    <h-tag text="标签五" style="background: cyan;">
    </h-tag>
</h-tips>
<h-tips tips="标签六" type="success">
    <h-tag text="标签六" style="background: #108ee9;">
    </h-tag>
</h-tips>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|`text`|标签文字|`string`|-|-
|`color`|标签文字颜色|`string`|-|-
|`size`|标签文字大小|`string`|-|-
