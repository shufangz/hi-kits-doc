---
title: Select 选择器
author: zhangfulai
date: 2022/10/28
tags:
 - 表单
 - 选择框
---
::: tip
当选项过多时，使用下拉菜单展示并选择内容。
:::
### 何时使用
```ts
import { HiSelect } from 'hi-kits/select'
```

### 基本用法

适用广泛的基础单选

::: demo
```html
<h-select value="Apple" mode="single" width="300">
    <h-option label="Apple" value="Apple"></h-option>
    <h-option label="Orange" value="Orange"></h-option>
    <h-option label="Peach" value="Peach">option3</h-option>
    <h-option label="Watermalon" value="Watermalon"></h-option>
</h-select>
```
:::



### 多选
::: demo
```html
<h4></h4>
<h-select value="['China']" mode="multiple" width="300">
    <h-option label="China" value="China">China</h-option>
    <h-option label="America" value="America">America</h-option>
    <h-option label="Japan" value="Japan">Japan</h-option>
    <h-option label="Korea" value="Korea">Korea</h-option>
</h-select>
```
:::

### 可搜索
展开后可对选项进行搜索。

::: demo
```html
<h-space gutter="20">
    <h-select value="Red" mode="single" width="300" showSearch>
        <h-option label="Red" value="Red">Red</h-option>
        <h-option label="Cyan" value="Cyan">Cyan</h-option>
        <h-option label="Lightblue" value="Lightblue">Lightblue</h-option>
        <h-option label="Green" value="Green">Green</h-option>
    </h-select>
    <h-select value="['Tiger']" mode="multiple" width="300" showSearch>
        <h-option label="Tiger" value="Tiger">Tiger</h-option>
        <h-option label="Lion" value="Lion">Lion</h-option>
        <h-option label="Horse" value="Horse">Horse</h-option>
        <h-option label="Panda" value="Panda">Panda</h-option>
        <h-option label="Elephant" value="Elephant">Elephant</h-option>
    </h-select>
</h-space>



```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `value`| 当前选中的 h-option 的 value 值，可双向绑定，当 `mode` 为 `multiple` 时，value 为数组 |  `any | any[]` | - | -
| `mode`| 设置 `h-select` 的模式	 |  `string` | `single | multiple` | -
| `showSearch`| 可搜索 |  `boolean	` | - | `false`
