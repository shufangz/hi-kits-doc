---
title: Steps 步骤条
author: fico
date: 2022/06/30
tags:
 - 数据渲染
 - 操作
---
::: tip
引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。
:::
### 何时使用
当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。
```ts
import { HiSteps } from 'hi-kits'
```


### 基本用法

简单的步骤条。

::: demo
```html
<h-steps current="1">
    <h-step heading="Finished" desc="This is a description."></h-step>
    <h-step heading="In Progress" subtitle="Left 00:00:08" desc="This is a description."></h-step>
    <h-step heading="Waiting" desc="This is a description."></h-step>
</h-steps>

```
:::

### 迷你版

迷你版的步骤条，通过设置 `size="small"` 启用.

::: demo
```html
<h-steps current="0" size="small">
    <h-step heading="Finished" desc="This is a description."></h-step>
    <h-step heading="In Progress" subtitle="Left 00:00:08" desc="This is a description."></h-step>
    <h-step heading="Waiting" desc="This is a description."></h-step>
</h-steps>

```
:::

### 起始序号
通过 `start` 来设置步骤条的起始序号.


::: demo
```html
 <h-steps current="1" start="3" size="small">
    <h-step heading="Finished" desc="This is a description."></h-step>
    <h-step heading="In Progress" subtitle="Left 00:00:08" desc="This is a description."></h-step>
    <h-step heading="Waiting" desc="This is a description."></h-step>
</h-steps>

```
:::

### 带图标的步骤条

::: demo
```html
<h-steps current="1" start="3" size="small">
    <h-step heading="Finished" desc="This is a description.">
        <div slot="icon">
            <h-icon name="person" size="24" color="#42b983"></h-icon>
        </div>
    </h-step>
    <h-step heading="In Progress" subtitle="Left 00:00:08" desc="This is a description.">
        <div slot="icon">
            <h-icon name="heart" size="24" color="#F44336"></h-icon>
        </div>
    </h-step>
    <h-step heading="Waiting" desc="This is a description.">
        <div slot="icon">
            <h-icon name="star" size="24" color="#1E90FF"></h-icon>
        </div>
    </h-step>
</h-steps>

```
:::

### 竖直方向的步骤条
简单的竖直方向的步骤条。


::: demo
```html
<h-steps current="1"  size="small" dir="vertical">
    <h-step heading="Finished" desc="This is a description."></h-step>
    <h-step heading="In Progress" subtitle="Left 00:00:08" desc="This is a description."></h-step>
    <h-step heading="Waiting" desc="This is a description."></h-step>
</h-steps>

```
:::

### 带图标的竖直方向的步骤条

::: demo
```html
<h-steps current="1" dir="vertical">
    <h-step heading="Finished" desc="This is a description.">
        <div slot="icon">
            <h-icon name="person" size="24" color="#42b983"></h-icon>
        </div>
    </h-step>
    <h-step heading="In Progress" subtitle="Left 00:00:08" desc="This is a description.">
        <div slot="icon">
            <h-icon name="heart" size="24" color="#F44336"></h-icon>
        </div>
    </h-step>
    <h-step heading="Waiting" desc="This is a description.">
        <div slot="icon">
            <h-icon name="star" size="24" color="#1E90FF"></h-icon>
        </div>
    </h-step>
</h-steps>

```
:::

### 点状步骤条

::: demo
```html
<h-steps current="1" dot="true">
    <h-step heading="Finished" desc="This is a description."></h-step>
    <h-step heading="In Progress" subtitle="Left 00:00:08" desc="This is a description."></h-step>
    <h-step heading="Waiting" desc="This is a description."></h-step>
</h-steps>

```
:::

### 竖直方向的点状步骤条

::: demo
```html
<h-steps current="1" dot="true" dir="vertical">
    <h-step heading="Finished" desc="This is a description." ></h-step>
    <h-step heading="In Progress" subtitle="Left 00:00:08" desc="This is a description."></h-step>
    <h-step heading="Waiting" desc="This is a description."></h-step>
</h-steps>

```
:::
### h-steps参数说明
整体步骤条。
|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|`current`|指定当前步骤，从 0 开始记数。|`number`|-|0
|`dir`|指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向	|`string`| `vertical | horizontal` | `horizontal`
|`dot`|点状步骤条|`boolean`|-|`false`
|`start`|步骤条的起始序号|`number`|-|0

### h-step参数说明
步骤条内的每一个步骤。
|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|`desc`|步骤的详情描述，可选。|`string | TemplateRef`|-|-
|`heading`|标题	|`string`| - | -
|`subtitle`|子标题	|`boolean`|-|`false`
|`status`|指定状态。当不配置该属性时，会使用 `h-steps` 的 `current` 来自动指定状态。|`string`|`wait | process | finish | error`|0

