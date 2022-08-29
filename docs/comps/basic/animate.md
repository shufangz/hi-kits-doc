<!--
 * @Author: zengshufang zengshufang@haier.com
 * @Date: 2022-08-19 18:04:54
 * @LastEditors: zengshufang zengshufang@haier.com
 * @LastEditTime: 2022-08-25 15:31:13
 * @FilePath: /hi-kits-doc/docs/comps/basic/animate.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# Animate 动效

### 何时使用
<pre class="language-ts">
import { HiAnimate } from 'hi-kits/animate'
</pre>
### 基本用法
直接通过设置name来使用即可,会在页面加载完成时触发一次动画效果。

::: demo
```html
<h-space>
    <h-animate name="shakeX">
        <div id="shakeX" style="background-color: #81ea9d; width:100px; height:100px; color: #fff;text-align:center;line-height: 100px;" onclick=" HiAnimate.run(document.getElementById('shakeX'), 'shakeX')">左右晃动</div>
    </h-animate>
    <h-animate name="shakeY">
        <div id="shakeY" style="background-color: #f8ccba; width:100px; height:100px;  color: #fff;text-align:center;line-height: 100px;" onclick=" HiAnimate.run(document.getElementById('shakeY'), 'shakeY')">上下晃动</div>
    </h-animate>
</h-space>

```
:::
### 控制元素动效

通过触发`HiAnimate.run(元素，动效名称)` 方法可控制元素呈现不同的动画效果
<div id="AnimateBox" style="background-color: #42b983; width:100px; height:100px"></div>

::: demo
```html
<h-space>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'bounce')">bounce</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'flash')">flash</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'headShake')">headShake</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'heartBeat')">heartBeat</h-button>
</h-space>

```
:::
`HiAnimate.run()`方法提供了四个参数,可以支持设置动画时长，及回调函数

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `selector` | 元素选择器名称 | `string` | - | -
| `name` | 动效名称 | `string` | - | -
| `duration` | 动效时长 （单位秒/s） | `number` | - | 1
| `callback` | 回调方法 | `()=>{}` | - | -  | -

### 动效库
Hi-kits 目前提供了98个动画效果可供参考,点击可展示效果

<activeList />

