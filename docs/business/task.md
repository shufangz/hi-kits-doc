---
title: Task 任务组件
author: fico
date: 2022/09/02
tags:
 - 活动业务
 - 移动端
---
::: tip
适用于活动中任务相关业务
:::
### 何时使用
```ts
import { HiTask } from 'hi-kits/task'
```

### 基本用法

适用广泛的基础单选
::: demo
```html
<h-task gutter="10">
  <h-task-item
    icon="https://oss-zjrs.haier.net/content/img/2022083111071051572166.png"
    background="https://oss-zjrs.haier.net/content/img/2022083110445562514571.png"
    heading="任务标题"
    subheading="任务副标题"
    buttonColor="#f0f"
    height='88px'
    headingstyle="color: red; fontSize:14px"
    subheadingstyle="color: blue; fontSize:12px"
    radius="[100, 100, 100, 100]"
    button="去完成"
    buttonbackground="#f00"
    color="#fff"
  ></h-task-item>
  <h-task-item
    icon="https://oss-zjrs.haier.net/content/img/2022083111071051572166.png"
    background="https://oss-zjrs.haier.net/content/img/2022083110445562514571.png"
    heading="任务标题"
    subheading="任务副标题"
    height='88px'
    button="已完成"
    buttonbackground="#ddd"
    color="#fff"
  ></h-task-item>
  <h-task-item></h-task-item>
  <h-task-item></h-task-item>
</h-task>
```
:::

### 参数说明

#### h-task
|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `gutter`| 间距 |  `number` | - | -


#### h-task-item
|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `icon`| 图标 |  `string` | - | -
| `background`| 列表背景 |  `string` | - | -
| `heading`| 任务标题 |  `string` | - | -
| `subheading`| 任务副标题 |  `string` | - | -
| `button`| 操作按钮文案 |  `string` | - | -
| `buttonbackground`| 操作按钮背景颜色 |  `string` | - | -
| `color`| 操作按钮文字颜色 |  `string` | - | -
