# Slider 滑动输入条

滑动型输入器，展示当前值和可选范围。

### 何时使用
当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。

<pre class="language-ts">
import { HiSlider } from 'hi-kits/slider'
</pre>

### 基本用法

基本滑动条。当设置disabled，滑块处于不可用状态。


::: demo
```html
    <h-slider onchange="console.log(event)"></h-slider>
    <h-slider disabled onchange="console.log(event)"></h-slider>

```
:::

### 自定义范围
可以设置默认值，最小值与最大值，以及滑动步长
::: demo
```html
    <h-slider defaultvalue="100" min="0" max="300" step="5"></h-slider>

```
:::

### 展示当前数据
::: demo
```html
    <h-slider defaultvalue="100" min="10" max="200" step="2" showtips></h-slider>

```
:::
### 竖直滑块
::: demo
```html
<h-slider style="height:300px" vertical showtips defaultvalue="150" min="10" max="200" step="2"></h-slider>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `vertical`| 是否竖直展示 |  `boolean` | - | `false`
| `disabled`| 是否可用 |  `boolean` | - | `false`
| `defaultvalue`| 默认值 |  `number` | - | 0
| `step`| 滑动步长 |  `number` | - | 1
| `max`| 滑块最大值 |  `number` | - | 100
| `min`| 滑块最小值 |  `number` | - | 0