# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。
<pre class="language-ts">
import { HiAvatar } from 'hi-kits/avatar'
</pre>
### 基本用法

通过 circle 和 size 设置头像的形状和大小。


::: demo
```html
<h-avatar size="64">
    <h-icon name="user"></h-icon>
</h-avatar>
<h-avatar size="large" >
    <h-icon name="user"></h-icon>
</h-avatar>
<h-avatar>
    <h-icon name="user"></h-icon>
</h-avatar>
<h-avatar size="small">
    <h-icon name="user"></h-icon>
</h-avatar>
 <div style="margin-top: 10px;">
    <h-avatar size="64" circle>
        <h-icon name="user"></h-icon>
    </h-avatar>
    <h-avatar size="large" circle>
        <h-icon name="user"></h-icon>
    </h-avatar>
    <h-avatar circle>
        <h-icon name="user"></h-icon>
    </h-avatar>
    <h-avatar size="small" circle>
        <h-icon name="user"></h-icon>
    </h-avatar>
</div>
```
:::

### 展示类型

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

::: demo
```html
<h-avatar  size="large">
    <h-icon name="user"></h-icon>
</h-avatar>
<h-avatar size="large" >
    <img src="https://ys-haier-uplusapp-static.oss-cn-beijing.aliyuncs.com/image/logo(1).svg" />
</h-avatar>
 <h-avatar circle style="color:#f56a00; background-color:#fde3cf;">
    <h-icon name="user"></h-icon>
</h-avatar>
 <h-avatar circle>U</h-avatar>
<h-avatar circle>ZH</h-avatar>

```
:::

### 头像组

头像组合展现。

::: demo
```html
 <h-avatar-group>
    <h-avatar circle>W</h-avatar>
    <h-avatar circle style="background-color: #f56a00">U</h-avatar>
    <h-avatar circle style="background-color: #87d068">
        <img src="https://ys-haier-uplusapp-static.oss-cn-beijing.aliyuncs.com/image/logo(1).svg" />
    </h-avatar>
    <h-avatar circle style="background-color: #1890ff"><h-icon name="user"></h-icon></h-avatar>
</h-avatar-group>
 <div style="margin-top: 10px;">
    <h-avatar-group>
        <h-avatar circle>W</h-avatar>
        <h-avatar circle style="background-color: #87d068">
            <img src="https://ys-haier-uplusapp-static.oss-cn-beijing.aliyuncs.com/image/logo(1).svg" />
        </h-avatar>
        <h-avatar circle style="background-color: #e4583f">+2</h-avatar>
    </h-avatar-group>
</div>
```
:::


### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `size` | 大小 | `string | number` | `large | small | number` | -
| `circle` | 圆形 | `boolean` | - | `false`  