---
title: Actions 动作面板
author: fico
date: 2022/08/22
tags:
 - 布局
 - 操作
---
::: tip
底部弹起的模态面板，包含与当前情境相关的多个选项。
:::
### 何时使用
```ts
import { HiActions } from 'hi-kits'
```

### 基本用法

::: demo
```html
<h-button type="primary" onclick="document.getElementById('Actions').setAttribute('show', '')">打开一组操作表</h-button>
<h-actions id="Actions">
    <h-actions-group>
        <h-actions-item type="label">这里可以描述下面的操作这里可以描述下面的操作这里可以描述下面的操作这里可以描述下面的操作</h-actions-item>
        <h-actions-item>Button 1</h-actions-item>
        <h-actions-item>Button 2</h-actions-item>
    </h-actions-group>
</h-actions>

```
:::

### 打开两组操作表

::: demo
```html
    <h-button type="primary" onclick="document.getElementById('Actions1').setAttribute('show', '')">打开两组操作表</h-button>
    <h-actions id="Actions1">
    <h-actions-group>
        <h-actions-item type="label">这里可以描述下面的操作这里可以描述下面的操作这里可以描述下面的操作这里可以描述下面的操作</h-actions-item>
        <h-actions-item>Button 1</h-actions-item>
        <h-actions-item style="background-color: #17bc43">Button 2</h-actions-item>
    </h-actions-group>
    <h-actions-group>
        <h-actions-item color="#f00">Cancel</h-actions-item>
    </h-actions-group>
    </h-actions>

```
:::
#### h-actions

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `list`| 列表模式 |  `boolean` | - | -
| `show`| 显示状态 |  `boolean` | - | `false`


#### h-actions-item

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `type`| 表展示类型 |  `string` | `'label' | 'button'`| `button`

#### h-actions-group

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `grid`| 网格 |  `boolean` | -| -
