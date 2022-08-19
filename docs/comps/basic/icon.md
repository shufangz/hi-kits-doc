# Icon 图标
语义化的矢量图形。
### 何时使用

<pre class="language-ts">
import { HiIcon } from 'hi-kits/icon'
</pre>
### 使用方法
直接通过设置`name`来使用即可

::: demo
```html
<h-icon name="info-circle" size="30" color="orangered"></h-icon>
<h-icon name="question-circle" size="30" color="orangered"></h-icon>
<h-icon name="warning-circle" size="30" color="#1E90FF"></h-icon>

```
:::
### 图标列表
目前提供17个图标,后续补充。。。
<table class="icontable">
    <tr>
        <td><h-icon size="30" name="info-circle"></h-icon><p>info-circle</p></td>
        <td><h-icon size="30" name="question-circle"></h-icon><p>question-circle</p></td>
        <td><h-icon size="30" name="sync"></h-icon><p>sync</p></td>
        <td><h-icon size="30" name="user"></h-icon><p>user</p></td>
        <td><h-icon size="30" name="heart"></h-icon><p>heart</p></td>
    </tr>
    <tr>
        <td><h-icon size="30" name="error"></h-icon><p>error</p></td>
        <td><h-icon size="30" name="star"></h-icon><p>star</p></td>
        <td><h-icon size="30" name="link"></h-icon><p>link</p></td>
        <td><h-icon size="30" name="right"></h-icon><p>right</p></td>
        <td><h-icon size="30" name="left"></h-icon><p>left</p></td>
    </tr>
    <tr>
        <td><h-icon size="30" name="up"></h-icon><p>up</p></td>
        <td><h-icon size="30" name="down"></h-icon><p>down</p></td>
        <td><h-icon size="30" name="check-circle"></h-icon><p>check-circle</p></td>
        <td><h-icon size="30" name="search"></h-icon><p>search</p></td>
        <td><h-icon size="30" name="close"></h-icon><p>close</p></td>
    </tr>
    <tr>
        <td><h-icon size="30" name="upload"></h-icon><p>upload</p></td>
        <td><h-icon size="30" name="warning-circle"></h-icon><p>warning-circle</p></td>
    </tr>
</table>
<style>
.icontable td{
    width: 20% !important;
   text-align: center;
}
.icontable td h-icon{
    margin-top: 14px;
}
.icontable td:hover{
    color: #42b983;
}
</style>
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `name` | 名称 | `string` | - | -
| `size` | 大小 | `string` | - | -
| `color` | 颜色 | `string` | - | -  | -
