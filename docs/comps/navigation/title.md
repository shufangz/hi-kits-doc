# Title 标题
为页面提供标题功能，常用于页面顶部。

### 何时使用
<pre class="language-ts">
import { HiTitle } from 'hi-kits/title'
</pre>

### 基本用法

::: demo
```html
<h-title heading="标题"></h-title>

```
:::

### 尺寸

::: demo
```html
<h-title heading="小标题" size="small"></h-title>
<h-title heading="默认标题" size="default"></h-title>
<h-title heading="大标题" size="large"></h-title>
```
:::

### 带跳转链接的标题

::: demo
```html
<h-title heading="标题"  link="http://www.baidu.com"></h-title>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `heading`| 标题内容 |  `string` | - | -
| `link`| 链接地址 |  `string` | - | -
| `size`| 尺寸大小 |  `string` | `small | default | large` | -
