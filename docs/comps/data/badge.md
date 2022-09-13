# Badge 徽标数

图标右上角的圆形徽标数字。

### 何时使用
一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。
<pre class="language-ts">
import { HiBadge } from 'hi-kits/badge'
</pre>

### 基本用法

简单的徽章展示

::: demo
```html
 <h-row gutter="10">
    <h-col span="8">
        <h-space gutter="30">
            <a class="Example">
                <h-badge count="643"></h-badge>
            </a>
            <a class="Example">
                <h-badge count="秒杀"></h-badge>
            </a>
            <a class="Example">
                <h-badge count="0"></h-badge>
            </a>
        </h-space>      
    </h-col>
</h-row>
 <style>
    .Example{
        width: 42px;
        height: 42px;
        border-radius: 4px;
        background: #eee;
        display: inline-block;
    }
</style>

```
:::

### 独立使用
不包裹任何元素，增加 `standAlone` 标签后，即是独立使用，可自定样式展现
::: demo
```html
    <h-badge  badgeStyle="background: green;" standAlone count="12"></h-badge>
    <h-badge  badgeStyle="background: gold;" standAlone count="warning"></h-badge>
    <h-badge  badgeStyle="background: cyan;" standAlone count="default"></h-badge>

```
:::

### 讨嫌的小红点
没有具体的数字。

::: demo
```html
<a class="Example">
    <h-badge  badgeStyle="background: green;" dot></h-badge>
</a>
<a class="Example">
    <h-badge  badgeStyle="background: gold;" dot></h-badge>
</a>
<a class="Example">
    <h-badge  badgeStyle="background: cyan;" dot></h-badge>
</a>
<a class="Example">
    <h-badge  color="#3F51B5"></h-badge>
</a>
```
:::
### 状态点
用于表示状态的小圆点。提供五种状态.

::: demo
```html
<h-badge status="success"></h-badge>
<h-badge status="error"></h-badge>
<h-badge status="warning"></h-badge>
<h-badge status="processing"></h-badge>
<h-badge status="default"></h-badge>
<h-divider alone></h-divider>
<h-space dir="vertical">
    <h-badge status="success" text="success"></h-badge>
    <h-badge status="error" text="error"></h-badge>
    <h-badge status="warning" text="warning"></h-badge>
    <h-badge status="processing"text="processing" ></h-badge>
    <h-badge status="default" text="default"></h-badge>
</h-space>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `count`| 展示的数字 |  `number | string` | - | -
| `dot`| 不展示数字，只有一个小红点	 |  `boolean` | - | `false`
| `badgeStyle`| 自定义样式|  `string` | - | -
| `standAlone`| 是否独立使用	|  `boolean` | - | `false`
| `status`| 设置 `h-badge` 为状态点	|  `'success' | 'processing' | 'default' | 'error' | 'warning'	` | - | -
| `text`| 在设置了status 的前提下有效，设置状态点的文本	|  `string` | - | -
