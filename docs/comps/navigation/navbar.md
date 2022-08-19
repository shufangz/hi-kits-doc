# Navbar 导航栏

为页面提供导航功能，常用于页面顶部。

### 何时使用
<pre class="language-ts">
import { HiNavbar } from 'hi-kits/navbar'
</pre>

### 基本用法

通过 `title` 属性设置导航栏标题。

::: demo
```html
<h-navbar title="NavBar"></h-navbar>

```
:::

### 自定义
通过设置slot为`left | center | right`自定义导航栏内容

::: demo
```html
<h-navbar>
    <span slot="left">
        Back
    </span>
    <span slot="center">NavBar</span>
    <span slot="right">
        <h-icon name="search" size="24" color="#3F51B5"></h-icon>
    </span>
</h-navbar>

```
:::

### 改变颜色

::: demo
```html
<h-navbar style="background-color: #1E90FF; color: #Fff;">
    <span slot="left">
        Back
    </span>
    <span slot="center">NavBar</span>
    <span slot="right">
        <h-icon name="search" size="24"></h-icon>
        <h-icon name="close" size="24"></h-icon>
    </span>
</h-navbar>

```
:::

### 改变位置
通过`fixed`属性设置导航栏吸顶
::: demo
```html
<h-switch onchange="this.nextElementSibling.fixed = this.checked;"></h-switch>
<h-navbar style="background-color: #1E90FF; color: #Fff;">
    <span slot="left">
        Back
    </span>
    <span slot="center">NavBar</span>
    <span slot="right">
        <h-icon name="search" size="24"></h-icon>
        <h-icon name="close" size="24"></h-icon>
    </span>
</h-navbar>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `title`| 导航栏标题 |  `string` | - | -
| `fixed`| 是否固定在顶部	 |  `boolean` | - | `false`
