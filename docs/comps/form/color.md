---
title: ColorPicker 颜色选择器
author: liulina
date: 2022/07/22
tags:
 - 表单
 - 工具
---
::: tip
用于颜色选择，支持多种格式。
:::
```ts
import { HiColorPicker } from 'hi-kits/color'
```


### 基本用法

颜色面板

::: demo
```html
<h-color-pane></h-color-pane>

```
:::

### 禁用disabled 

通过 `disabled` 可以禁用开关
::: demo
```html
<h-color-picker></h-color-picker>
<h-switch onchange="this.previousElementSibling.disabled = this.checked"></h-switch>
                    
```
:::

### 自定义颜色块 


::: demo
```html
 <h-color-picker custom onchange="this.firstElementChild.color=this.value">
    <h-icon name="color_palette" size="20" color="#F44336"></h-icon>
</h-color-picker>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `defaultvalue`| 默认颜色 |  `string` | - | -
| `custom`| 是否自定义 |  `boolean` | - | `false`
| `disabled`| 是否可用 |  `boolean` | - | `false`
| `onchange`| 变化时回调函数	 |  `Function(e:Event)	` | - | -
