# Rate 评分

评分组件。

### 何时使用
- 对评价进行展示。
- 对事物进行快速的评级操作。
<pre class="language-ts">
import { HiRate } from 'hi-kits/rate'
</pre>
### 基本用法

最简单的用法。
::: demo
```html
    <h-rate></h-rate>
```
:::

### 默认选中
::: demo
```html
    <h-rate defaultvalue="1"></h-rate>
    <div>
        <h-rate defaultvalue="3"></h-rate>
    </div>
    <div>
        <h-rate defaultvalue="5"></h-rate>
    </div>
```
:::

### 辅助文字

用辅助文字直接地表达对应分数

::: demo
```html
    <h-rate defaultvalue="1" tips="12,34,5"></h-rate>

```
:::

### 自定义
::: demo
```html
    <h-rate length="8" defaultvalue="1" ></h-rate>
    <div>
        <h-rate length="10" color="red" defaultvalue="1" ></h-rate>
    </div>
    <div>
        <h-rate length="15" defaultvalue="10" color="black"></h-rate>
    </div>
```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|`defaultvalue`|默认数|`number`|-|-
|`tips`|提示文字, 以 , 分割的字符串文本 |`string`|-|-
|`icon`|图标|`string`|-|-
|`value`|当前值|`number`|-|-
|`length`|长度|`number`|-|-
|`onchange`|点击回调函数|`function`|-|-
