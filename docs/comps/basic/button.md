---
title: Button 按钮
author: fico
date: 2022/04/27
tags:
 - Button
 - 基础组件
---
::: tip
按钮用于开始一个即时操作。
:::
### 何时使用
```ts
import { HiButton } from 'hi-kits/button'
```

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
在 Hi-kits 中，我们有五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：用于次要或外链的行动点。

以及2种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 禁用：行动点不可用的时候，一般需要文案解释。

### 基本用法

基础的按钮用法。按钮有五种类型：主按钮、默认按钮、虚线按钮、文本按钮和链接按钮。

::: demo
```html
<h-button type="primary">Primary Button</h-button>
<h-button>Default Button</h-button>
<h-button type="dashed">Dashed Button</h-button>
<h-button type='flat'>Text Button</h-button>
<h-button type="flat" href="https://ys-zjrs.haier.net/zjm/synsm/pushManage/favicon.ico" download="111">Link Button</h-button>

```
:::

### 禁用状态

按钮不可用状态。

::: demo
```html
<h-button disabled>Default Button</h-button>
<h-button type="primary" disabled>Primary Button</h-button>
<h-button type="dashed" disabled>Dashed Button</h-button>
<h-button type='flat' disabled>Text Button</h-button>
<h-button type="flat" href="https://ys-zjrs.haier.net/zjm/synsm/pushManage/favicon.ico" download="111" disabled>Link Button</h-button>
```
:::

### 文字按钮

没有边框的按钮。

::: demo
```html
<h-button type="flat" >Text Button</h-button>
<h-button type='flat' disabled>Text Button</h-button>

```
:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）

::: demo
```html
<h-button  type="default">
    <h-icon name="search" color="fff"></h-icon>
    搜索
</h-button>
<h-button type="primary" shape="circle">
    <h-icon name="sync" color="fff"></h-icon>
</h-button>
<h-button type="primary">
    <h-icon name="warning" color="fff" ></h-icon>
    警告
</h-button>
<h-button type="dashed">
    <h-icon name="person" color="fff"></h-icon>
</h-button>
<h-button type='flat'>
    <h-icon name="link" color="fff"></h-icon>
</h-button>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

::: demo
```html
<h-button type="dashed">
    <h-loading></h-loading>
    loading Button
</h-button>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的两种尺寸，可以在不同场景下选择合适的按钮尺寸。

::: demo
```html
<h-row>
    <h-col span="24">
        <h-button type="primary" size="large">Primary Button</h-button>
        <h-button  size="large">Default Button</h-button>
        <h-button type="dashed"  size="large">Dashed Button</h-button>
        <h-button type="primary" shape="circle" size="large">
           cir
        </h-button>
    </h-col>
</h-row>

<h-row>
    <h-col span="24" style="margin-top: 20px">
        <h-button type="primary">Primary Button</h-button>
        <h-button>Default Button</h-button>
        <h-button type="dashed">Dashed Button</h-button>
        <h-button type='flat'>Text Button</h-button>
        <h-button type="flat" href="https://ys-zjrs.haier.net/zjm/synsm/pushManage/favicon.ico" download="111">Link Button</h-button>
    </h-col>
</h-row>

<h-row>
    <h-col span="24" style="margin-top: 20px">
        <h-button type="primary" size="small">Primary Button</h-button>
        <h-button  size="small">Default Button</h-button>
        <h-button type="dashed"  size="small">Dashed Button</h-button>
        <h-button type="primary" shape="circle" size="small">
            cir
        </h-button>
    </h-col>
</h-row>
```
:::

### Block 按钮

Block 属性将使按钮适合其父宽度

::: demo
```html
<h-space dir="vertical">
    <h-button block type="primary">Primary Button</h-button>
    <h-button block>Default Button</h-button>
    <h-button type="dashed" block>Dashed Button</h-button>
    <h-button type='flat' block>Text Button</h-button>
    <h-button type="flat" href="https://ys-zjrs.haier.net/zjm/synsm/pushManage/favicon.ico" download="111" block>Link Button</h-button>
</h-space>
```
:::


### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `size` | 尺寸 | `string` | `small | middle | large` | -
| `type` | 设置按钮类型，可选值为 `primary,dashed,default,flat` 或者不设 | `string` | `primary | dashed | danger | flat | default` | `default`
| `shape` | 形状 | `string` | `circle`  | -
| `href` | 超链接 | `string` |   | -
| `disabled `| 是否禁用状态	 | `boolean` |-  | `false`
| `block`	 | 将按钮宽度调整为其父宽度的选项		 | `boolean` |-  | `false`
