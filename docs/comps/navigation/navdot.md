---
title: Navdot 导航点 
author: fico
date: 2022/06/17
tags:
 - 导航
 - 操作
---
### 何时使用
可用于页面切换或者轮播切换
```ts
import { HiNavdot } from 'hi-kits'
```
### 基本用法

::: demo
```html
<h-space  dir="vertical">
    <h-nav-dot></h-nav-dot>
    <h-nav-dot current="5"></h-nav-dot>
    <h-nav-dot total="4"></h-nav-dot>
</h-space>

```
:::

### 不同大小
::: demo
```html
<h-space  dir="vertical">
    <h-space>小： <h-nav-dot total="4" size="small"></h-nav-dot></h-space>
    <h-space>默认： <h-nav-dot total="4"></h-nav-dot></h-space>
    <h-space>大： <h-nav-dot total="4" size="large"></h-nav-dot></h-space>
    <h-space>自定义： <h-nav-dot total="4" size="20"></h-nav-dot></h-space>
</h-space>

```
:::

### 两种风格

::: demo
```html
<h-space  dir="vertical">
    <h-space>type="puff"： <h-nav-dot type="puff" total="4" ></h-nav-dot></h-space>
    <h-space>type="scaleup"： <h-nav-dot type="scaleup" total="4" ></h-nav-dot></h-space>
</h-space>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|`total`|总数|`number`|-|6
|`current`|当前位置|`number`|-|0
|`size`|圆点大小|`string`|`small | large | number`| -
|`type`|点击风格|`string`|`puff | scaleup | fillup` | `fillup`

