# EditWord 文字编辑

<pre class="language-ts">
import { HiEditWord } from 'hi-kits/editWord'
</pre>

### 基本用法

::: demo
```html
<h-edit-word ochange="showDialog(event)">文字编辑</h-edit-word>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `onchange`| 当前是否选中的回调	 |  `EventEmitter<boolean>` | - | -
