---
title:  Breadcrumb 面包屑
author: fico
date: 2022/08/01
tags:
 - 导航
---
::: tip
显示当前页面在系统层级结构中的位置，并能向上返回。
:::
### 何时使用
- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时
```ts
import { HiBreadcrumb } from 'hi-kits/breadcrumb'
```

### 基本用法

最简单的用法

::: demo
```html
<h-breadcrumb>
    <h-breadcrumb-item>Home</h-breadcrumb-item>
    <h-breadcrumb-item>
        <a>页面2</a>
    </h-breadcrumb-item>
    <h-breadcrumb-item>页面3</h-breadcrumb-item>
</h-breadcrumb>

```
:::

### 自定义分隔符

使用 `separator` 可以自定义分隔符。

::: demo
```html
<h-space  dir="vertical">
    <h-breadcrumb separator=">">
        <h-breadcrumb-item>Home</h-breadcrumb-item>
        <h-breadcrumb-item>
            <a>页面2</a>
        </h-breadcrumb-item>
        <h-breadcrumb-item>页面3</h-breadcrumb-item>
    </h-breadcrumb>

    <h-breadcrumb separator="->">
        <h-breadcrumb-item>Home</h-breadcrumb-item>
        <h-breadcrumb-item>
            <a>页面2</a>
        </h-breadcrumb-item>
        <h-breadcrumb-item>页面3</h-breadcrumb-item>
    </h-breadcrumb>
</h-space>

```
:::

### 独立的分隔符

可以使用`h-breadcrumb-separator`让一个面包屑的分割符不同。

::: demo
```html
<h-breadcrumb separator="null">
    <h-breadcrumb-item>Home</h-breadcrumb-item>
    <h-breadcrumb-separator>
       ：
    </h-breadcrumb-separator>
    <h-breadcrumb-item>
        <a>页面2</a>
    </h-breadcrumb-item>
    <h-breadcrumb-separator>
        》
    </h-breadcrumb-separator>
    <h-breadcrumb-item>页面3</h-breadcrumb-item>
</h-breadcrumb>

```
:::


### 带有图标的

图标放在文字前面。

::: demo
```html
<h-breadcrumb>
    <h-breadcrumb-item>
        <h-icon name="person" size="18" color="#3F51B5"></h-icon>
    </h-breadcrumb-item>
    <h-breadcrumb-item>
        <a><h-icon name="person" size="18"></h-icon> 页面2</a>
    </h-breadcrumb-item>
    <h-breadcrumb-item>页面3</h-breadcrumb-item>
</h-breadcrumb>

```
:::
### 参数说明
|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `separator`| 分隔符 |  `string` | - | -
