---
title: Tabs 标签页
author: fico
date: 2022/07/01
tags:
 - 卡片
 - 标签
---
::: tip
选项卡切换组件。分隔内容上有关联但属于不同类别的数据集合。
:::

### 何时使用
 - 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
```ts
import { HiTab } from 'hi-kits/tab'
```
### 基本用法
默认选中第一项。

::: demo
```html
<!-- <h-tabs activekey="2">
    <h-tab label="tab1" >tab111</h-tab>
    <h-tab label="tab2" >tab222</h-tab>
    <h-tab label="tab3">tab333</h-tab>
</h-tabs> -->

```
:::

### 禁用
禁用某一项。
::: demo
```html
 <!-- <h-tabs type="card">
    <h-tab label="tab1">tab111</h-tab>
    <h-tab label="tab2" disabled>tab222</h-tab>
    <h-tab label="tab3">tab333</h-tab>
</h-tabs> -->

```
:::

### 标识key、activekey
::: demo
```html
 <h-tabs id="Tabs" activekey="B">
    <h-tab label="tab1" key="A">tab111</h-tab>
    <h-tab label="tab2" key="B">tab222</h-tab>
    <h-tab label="tab3" key="C">tab333</h-tab>
</h-tabs>
<!-- <h-button type="primary" onclick="document.getElementById('Tabs').setAttribute('activekey', 'C')">跳转tab3</h-button> -->
                    
```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `type`| 可选择标签页风格，|  `string` | ` 'flat' | 'card' | 'line' ` | `flat`
| `align`| 设置标签头的对齐方式 |  `string` | `'start' | 'center' | 'end'`| `start`
| `activekey`| 可以指定切换到具体标签页，也可以指定初始值 |  `string` | - | -
