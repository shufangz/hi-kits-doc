# Timeline 时间轴

垂直展示的时间流信息。

### 何时使用
- 当有一系列信息需按时间排列时，可正序和倒序。
- 需要有一条时间轴进行视觉上的串联时。
<pre class="language-ts">
import { HiTimeline } from 'hi-kits/timeline'
</pre>

### 基本用法

基本的时间轴。

::: demo
```html
<h-timeline>
    <h-timeline-item color="red" style="color:#1890ff">创建服务网站 2022-06-01</h-timeline-item>
    <h-timeline-item color="green">解决初始网络问题 2022-06-01</h-timeline-item>
    <h-timeline-item color="green">技术测试 2022-06-01</h-timeline-item>
    <h-timeline-item last color="green">正在解决的网络问题 2022-06-01</h-timeline-item>
</h-timeline>

```
:::

### 交替展现

内容在时间轴两侧交替出现。

::: demo
```html
<h-timeline mode="alternate">
    <h-timeline-item color="green" style="color:#1890ff">创建服务网站 2022-06-01</h-timeline-item>
    <h-timeline-item color="green">解决初始网络问题 2022-06-01</h-timeline-item>
    <h-timeline-item color="green">技术测试 2022-06-01</h-timeline-item>
    <h-timeline-item color="green">
        <p style="margin-top: 0;">解决初始网络问题 1</p>
        <p>解决初始网络问题 2</p>
        <p>解决初始网络问题 3 2022-06-01</p>
    </h-timeline-item>
</h-timeline>

```
:::

### 切换展示
时间和内容分别展示在主轴的两侧
::: demo
```html
 <div style="margin-bottom: 20px ; text-align: center;">
    <h-button onclick="document.getElementById('Timeline').setAttribute('mode', 'left')">left</h-button>
    <h-button onclick="document.getElementById('Timeline').setAttribute('mode', 'right')">right</h-button>
    <h-button onclick="document.getElementById('Timeline').setAttribute('mode', 'alternate')">alternate</h-button>
</div>
<h-timeline id="Timeline" mode="alternate">
    <h-timeline-item color="green" style="color:#1890ff" label="2022-06-01 09:00:00">创建服务网站</h-timeline-item>
    <h-timeline-item color="green" label="2022-06-01 09:12:11">解决初始网络问题</h-timeline-item>
    <h-timeline-item color="green" label="2022-06-01">技术测试</h-timeline-item>
    <h-timeline-item>技术测试</h-timeline-item>
    <h-timeline-item color="green" label="2022-06-01">
        <p style="margin-top: 0;">解决初始网络问题 1</p>
        <p>解决初始网络问题 2</p>
        <p>解决初始网络问题 3</p>
    </h-timeline-item>
</h-timeline>

```
:::

### 自定义时间轴点

可以设置为图标或其他自定义元素。

::: demo
```html
<h-timeline mode="custom">
        <h-timeline-item mode="right"  color="red" style="color:#1890ff">
            <span slot="dot">
                <h-icon name="info-circle"   color="#42b983"></h-icon>
            </span>
            创建服务网站 2022-06-01
        </h-timeline-item>
        <h-timeline-item mode="right" color="green">
            <span slot="dot">
                <h-icon name="question-circle"   color="red"></h-icon>
            </span>
            解决初始网络问题 2022-06-01
        </h-timeline-item>
        <h-timeline-item mode="left" color="green">
            <span slot="dot">
                <h-icon name="warning-circle"   color="red"></h-icon>
            </span>
            技术测试 2022-06-01
        </h-timeline-item>
        <h-timeline-item mode="left" color="green">
            <span slot="dot">
                <h-icon name="check-circle"   color="#1890ff"></h-icon>
            </span>
            正在解决的网络问题 2022-06-01
        </h-timeline-item>
    </h-timeline>

```
:::
### h-timeline

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| mode| 可以改变时间轴和内容的相对位置| string 	 |  `left | alternate | right | custom` |  `right`

### h-timeline-item

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `label`| 时间轴内容| `string` 	 |  - |  -
| `color`| 指定圆圈颜色 `'blue' | 'red' | 'green' | 'gray'`，或自定义的色值 (CSS 颜色)| `string` 	 |  - |  -
