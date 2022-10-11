---
title:  Toolbar 工具栏
author: fico
date: 2022/07/26
tags:
 - 工具栏
 - 操作
---
::: tip
Toolbar是应用程序中使用的标准工具栏。
:::
### 何时使用
用于为页面相关操作提供便捷交互。
<pre class="language-ts">
import { HiToolbar } from 'hi-kits/toolbar'
</pre>

### 基本用法

::: demo
```html
<h-toolbar>
    <h-toolbar-group>
        <h-toolbar-item tips="撤销(⌘+Z)">
            <h-icon name="undo" size="16" color="#444"></h-icon>
            <span slot="label">撤销</span>
        </h-toolbar-item>
        <h-toolbar-item tips="重做(⌘+Y)">
            <h-icon name="redo" size="16" color="#333"></h-icon>
            <span slot="label">重做</span>
        </h-toolbar-item>
        <h-toolbar-item tips="格式刷(双击连续使用)">
            <h-icon name="brush" size="16" color="#333"></h-icon>
            <span slot="label">格式刷</span>
        </h-toolbar-item>
        <h-toolbar-item tips="清除格式(⌘+\)">
            <h-icon name="repeat" size="16" color="#333"></h-icon>
            <span slot="label">清除格式</span>
        </h-toolbar-item>
    </h-toolbar-group>
    <h-toolbar-group column>
        <h-toolbar-row>
            <h-toolbar-item tips="同步(⌘+\)">
                <h-icon name="shuffle" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item tips="链接(⌘+\)">
                <h-icon name="link" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item tips="颜色(⌘+\)">
                <h-color-picker custom onchange="this.firstElementChild.color=this.value">
                    <h-icon name="color_palette" size="16" color="#9C27B0"></h-icon>
                </h-color-picker>
            </h-toolbar-item>
        </h-toolbar-row>
        <h-toolbar-row>
            <h-toolbar-item active  tips="右箭头(⌘+\)">
                <h-icon name="arrow_backward" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item  tips="搜索(⌘+\)">
                <h-icon name="search" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item>
                <h-icon name="cloud_upload" size="16" color="#333"></h-icon>
            </h-toolbar-item>
        </h-toolbar-row>
    </h-toolbar-group>
</h-toolbar>

```
:::

### 简化版
::: demo
```html
<h-toolbar simple>
    <h-toolbar-group>
        <h-toolbar-item tips="撤销(⌘+Z)">
            <h-icon name="undo" size="16" color="#444"></h-icon>
            <span slot="label">撤销</span>
        </h-toolbar-item>
        <h-toolbar-item tips="重做(⌘+Y)">
            <h-icon name="redo" size="16" color="#333"></h-icon>
            <span slot="label">重做</span>
        </h-toolbar-item>
            <h-toolbar-item tips="格式刷(双击连续使用)">
            <h-icon name="brush" size="16" color="#333"></h-icon>
            <span slot="label">格式刷</span>
        </h-toolbar-item>
        <h-toolbar-item tips="清除格式(⌘+\)">
            <h-icon name="repeat" size="16" color="#333"></h-icon>
            <span slot="label">清除格式</span>
        </h-toolbar-item>
    </h-toolbar-group>
    <h-toolbar-group column>
        <h-toolbar-row>
            <h-toolbar-item tips="同步(⌘+\)">
                <h-icon name="shuffle" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item tips="链接(⌘+\)">
                <h-icon name="link" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item tips="颜色(⌘+\)">
                <h-color-picker custom onchange="this.firstElementChild.color=this.value">
                <h-icon name="color_palette" size="16" color="#9C27B0"></h-icon>
                </h-color-picker>
            </h-toolbar-item>
        </h-toolbar-row>
        <h-toolbar-row>
            <h-toolbar-item active tips="右箭头(⌘+\)">
                <h-icon name="arrow_backward" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item tips="搜索(⌘+\)">
                <h-icon name="search" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item>
                <h-icon name="cloud_upload" size="16" color="#333"></h-icon>
            </h-toolbar-item>
        </h-toolbar-row>
    </h-toolbar-group>
</h-toolbar>
:::

### 位置居右

::: demo
```html
<h-toolbar right>
    <h-toolbar-group>
        <h-toolbar-item tips="撤销(⌘+Z)">
            <h-icon name="undo" size="16" color="#444"></h-icon>
            <span slot="label">撤销</span>
        </h-toolbar-item>
        <h-toolbar-item tips="重做(⌘+Y)">
            <h-icon name="redo" size="16" color="#333"></h-icon>
            <span slot="label">重做</span>
        </h-toolbar-item>
        <h-toolbar-item tips="格式刷(双击连续使用)">
            <h-icon name="brush" size="16" color="#333"></h-icon>
            <span slot="label">格式刷</span>
        </h-toolbar-item>
        <h-toolbar-item tips="清除格式(⌘+\)">
            <h-icon name="repeat" size="16" color="#333"></h-icon>
            <span slot="label">清除格式</span>
        </h-toolbar-item>
    </h-toolbar-group>
    <h-toolbar-group column>
        <h-toolbar-row>
            <h-toolbar-item tips="同步(⌘+\)">
                <h-icon name="shuffle" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item tips="链接(⌘+\)">
                <h-icon name="link" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item tips="颜色(⌘+\)">
                <h-color-picker custom onchange="this.firstElementChild.color=this.value">
                <h-icon name="color_palette" size="16" color="#9C27B0"></h-icon>
                </h-color-picker>
            </h-toolbar-item>
        </h-toolbar-row>
        <h-toolbar-row>
            <h-toolbar-item active tips="右箭头(⌘+\)">
                <h-icon name="arrow_backward" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item tips="搜索(⌘+\)">
                <h-icon name="search" size="16" color="#333"></h-icon>
            </h-toolbar-item>
            <h-toolbar-item>
                <h-icon name="cloud_upload" size="16" color="#333"></h-icon>
            </h-toolbar-item>
        </h-toolbar-row>
    </h-toolbar-group>
</h-toolbar>

```
:::
### h-toolbar

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `right`| 位置靠右 |  `boolean` | - | false
| `simple`| 简化模式 |  `boolean` | - | false

### h-toolbar-item

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `tips`| 提示文字 |  `tring` | - | -
| `active`| 激活 |  `string` | - | -

### h-toolbar-group

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `column`| 对齐方式 |  `boolean` | - | false
