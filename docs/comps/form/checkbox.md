---
title: Checkbox 多选框
author: liulina
date: 2022/06/17
tags:
 - 表单
 - 复选框
---
::: tip
一组备选项中进行多选
:::
### 何时使用
- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
<pre class="language-ts">
import { HiCheckbox } from 'hi-kits/checkbox'
</pre>
### 基本用法
::: demo
```html
<h-checkbox>Checkbox</h-checkbox>

```
:::

### 不可用

::: demo
```html
<h-checkbox disabled>Checkbox</h-checkbox>

```
:::

### 受控的 Checkbox
::: demo
```html
<h-checkbox>checkbox</h-checkbox>
<h-switch onchange="this.previousElementSibling.disabled = this.checked"></h-switch>

```
:::

### 多选框组
通常多个`h-checkbox`出现，有一个相同的`name`，表示同一组，可以通过`name`来获取当前组的选中

::: demo
```html
<h-checkbox name="lang" checked>Html</h-checkbox>
<h-checkbox name="lang">Css</h-checkbox>
<h-checkbox name="lang">Javascript</h-checkbox>
<h-checkbox name="lang">Python</h-checkbox>
<h-checkbox name="lang">Php</h-checkbox>
<h-checkbox name="lang">Dart</h-checkbox>
<h-checkbox name="lang">Swift</h-checkbox>
<h-button type="primary" onclick="HiMessage.info({
    content: Array.from(document.querySelectorAll('h-checkbox[name=lang][checked]')).map(el=>el.textContent)
})">获取选中状态</h-button>

```
:::

### h-checkbox-group组件
新增`h-checkbox-group`组件，表示同一组
::: demo
```html
  <h-checkbox-group name="books" defaultvalue="React,Angular" id="checkgroup">
    <h-checkbox>React</h-checkbox>
    <h-checkbox>Vue</h-checkbox>
    <h-checkbox>Angular</h-checkbox>
    <h-checkbox>Flutter</h-checkbox>
    <h-checkbox>Swift</h-checkbox>
  </h-checkbox-group>
  
```
:::

### h-checkbox

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `value`| 当前选中值 |  `string` | - | -
| `checked`| 选中状态 |  `boolean` | - | -
| `indeterminate`| 不确定状态 |  `boolean` | - | -
| `disabled`| 不可用状态 |  `boolean` | - | -
| `onchange`| 变化时回调函数	 |  `Function(e:Event)	` | - | -
| `onfocus`| 聚焦时回调函数	 |  `Function(e:Event)	` | - | -
| `onblur`| 失焦时回调函数	 |  `Function(e:Event)	` | - | -

### h-checkbox-group

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `defaultvalue`| 默认选中的value	 |  `string` | - | -
| `onchange`| 变化时回调函数	 |  `Function(e:Event)	` | - | -
