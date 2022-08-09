# Jumper 跳转

用于上下翻页，适用于监控视图实例切换等
### 何时使用
<pre class="language-ts">
import { HiJumper } from 'hi-kits/jumper'
</pre>

### 基本用法

::: demo
```html
<h-jumper></h-jumper>

```
:::

### 尺寸
通过设置size为`small | default | large`

::: demo
```html
<h-jumper size="small"></h-jumper>
<h-jumper size="default"></h-jumper>
<h-jumper size="large"></h-jumper>

```
:::

### 线条
::: demo
```html
<h-jumper line></h-jumper>

```
:::

### 隐藏当前
::: demo
```html
<h-jumper  line hideCurrent></h-jumper>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `dir`| 指定方向。目前支持水平（ horizontal ）和竖直（ vertical ）两种方向 |  `string` |  `horizontal | vertical` | `horizontal`
| `line`| 线条 |  `boolean` | - | `false`
| `hideCurrent`| 显示 |  `boolean` | - | `false`

