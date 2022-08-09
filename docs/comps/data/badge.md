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


### 状态点
用于表示状态的小圆点。

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

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `count`| 展示的数字 |  `number` | - | -
| `dot`| 不展示数字，只有一个小红点	 |  `boolean` | - | `false`
| `badgeStyle`| 自定义样式|  `string` | - | -
