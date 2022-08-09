# Segmented 分段控制器

### 何时使用
- 用于展示多个选项并允许用户选择其中单个选项；
- 当切换选中选项时，关联区域的内容会发生变化。
<pre class="language-ts">
import { HiSegmented } from 'hi-kits/segmented'
</pre>
### 基本用法

::: demo
```html
<h-segmenteds current="1">
    <h-segmented>Daily</h-segmented>
    <h-segmented>Weekly</h-segmented>
    <h-segmented>Monthly</h-segmented>
    <h-segmented>Quarterly</h-segmented>
    <h-segmented>Yearly</h-segmented>
</h-segmenteds>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---