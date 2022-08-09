# Navdot 导航点 

### 何时使用
可用于页面切换或者轮播切换
<pre class="language-ts">
import { HiNavdot } from 'hi-kits/navdot'
</pre>
### 基本用法

::: demo
```html
<p style="margin: 12px 0;">
    <h-nav-dot></h-nav-dot>
</p>
<p style="margin: 12px 0;">
    <h-nav-dot current="1"></h-nav-dot>
</p>
<p style="margin: 12px 0;">
    <h-nav-dot current="2"></h-nav-dot>
</p>
<p style="margin: 12px 0;">
    <h-nav-dot current="3"></h-nav-dot>
</p>
<p style="margin: 12px 0;">
    <h-nav-dot current="4"></h-nav-dot>
</p>
<p style="margin: 12px 0;">
    <h-nav-dot current="5"></h-nav-dot>
</p>
```
:::

### 不同大小
::: demo
```html
<p style="margin: 12px 0;">
    小： <h-nav-dot total="4" size="small"></h-nav-dot>
</p>
<p style="margin: 12px 0;">
    默认： <h-nav-dot total="4"></h-nav-dot>
</p>
<p style="margin: 12px 0;">
    大： <h-nav-dot total="4" size="large"></h-nav-dot>
</p>
<p style="margin: 12px 0;">
    自定义： <h-nav-dot total="4" size="20"></h-nav-dot>
</p>

```
:::

### 两种风格

::: demo
```html
<p style="margin: 12px 0;">
    type="puff"： <h-nav-dot type="puff" total="4" ></h-nav-dot>
</p>
<p style="margin: 12px 0;">
    type="scaleup"： <h-nav-dot type="scaleup" total="4" ></h-nav-dot>
</p>
```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|`total`|总数|`number`|-|6
|`current`|当前位置|`number`|-|0
|`size`|圆点大小|`string`|`small | large | number`| -
|`type`|点击风格|`string`|`puff | scaleup | fillup` | `fillup`

