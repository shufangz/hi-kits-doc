# ColorPicker 颜色选择器

用于颜色选择，支持多种格式。
<pre class="language-ts">
import { HiColor } from 'hi-kits/color'
</pre>


### 基本用法

颜色面板

::: demo
```html
<h-color-pane></h-color-pane>

```
:::

### 禁用disabled 

通过disabled可以禁用开关
::: demo
```html
<h-color-picker></h-color-picker>
<h-switch onchange="this.previousElementSibling.disabled = this.checked"></h-switch>
                    
```
:::

### 自定义颜色块 


::: demo
```html
 <h-color-picker custom onchange="this.firstElementChild.color=this.value">
    <h-icon name="check-circle" size="20" color="#F44336"></h-icon>
</h-color-picker>
```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---