# Notice 通告栏


### 何时使用
<pre class="language-ts">
import { HiNotice } from 'hi-kits/notice'
</pre>

### 基本用法

::: demo
```html
<h-space dir="vertical" block>
    <h-notice type="success" content="成功"></h-notice>
    <h-notice type="error" content="错误"></h-notice>
    <h-notice type="warning" content="警告"></h-notice>
    <h-notice type="info" content="信息"></h-notice>
</h-space>

```
:::

### 可关闭

::: demo
```html
<h-space dir="vertical" block>
    <h-notice type="success" closeable content="成功"></h-notice>
    <h-notice type="error" closeable content="错误"></h-notice>
    <h-notice type="warning" closeable content="警告"></h-notice>
    <h-notice type="info" closeable content="信息"></h-notice>
</h-space>

```
:::

### 超长滚动

::: demo
```html
 <h-space dir="vertical" block>
    <h-notice type="success" closeable content="cillum amet esse veniam voluptate occaecat voluptate minim quis nisi mollit nisi elit deserunt esse incididunt do labore aliquip ex"></h-notice>
    <h-notice type="error" closeable content="cillum amet esse veniam voluptate occaecat voluptate minim quis nisi mollit nisi elit deserunt esse incididunt do labore aliquip ex"></h-notice>
    <h-notice type="warning" closeable content="cillum amet esse veniam voluptate occaecat voluptate minim quis nisi mollit nisi elit deserunt esse incididunt do labore aliquip ex"></h-notice>
    <h-notice type="info" closeable content="cillum amet esse veniam voluptate occaecat voluptate minim quis nisi mollit nisi elit deserunt esse incididunt do labore aliquip ex"></h-notice>
</h-space>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `content`| 内容 |  `string` | - | -
| `type`| 类型 |  `string` | `'success' | 'error' | 'warning' | 'info'` | -
| `closeable`| 是否可关闭（默认不显示关闭按钮） |  `boolean` | - | -
| `roll`| 是否滚动 |  `boolean` | - | -
