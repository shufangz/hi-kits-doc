# Radio 单选框

在一组备选项中进行单选。

### 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。
<pre class="language-ts">
import { HiRadio } from 'hi-kits/radio'
</pre>
### 基本用法
最简单的用法

::: demo
```html
 <h-radio>Web Components</h-radio>

```
:::

### 默认选中

::: demo
```html
 <h-radio checked>Web Components</h-radio>

```
:::

### 不可用
::: demo
```html
<h-radio disabled>Web Components</h-radio>
<h-divider line></h-divider>
<h-radio>radio</h-radio>
<h-switch onchange="this.previousElementSibling.disabled = this.checked"></h-switch>

```
:::

### 单选框组1
通常多个出现，有一个相同的name，表示同一组，可以通过`name`来获取当前组的选中

::: demo
```html
<h-radio name="radio" checked>Html</h-radio>
<h-radio name="radio">Css</h-radio>
<h-radio name="radio">Javascript</h-radio>
<h-radio name="radio">Python</h-radio>
<h-radio name="radio">Php</h-radio>
<h-radio name="radio">Dart</h-radio>
<h-radio name="radio">Swift</h-radio>
<h-button type="primary" onclick="HiMessage.info({
    content: Array.from(document.querySelectorAll('h-radio[name=radio][checked]')).map(el=>el.textContent)
})">获取选中状态</h-button>

```
:::

### 单选框组2
适用于在多个互斥的选项中选择的场景

::: demo
```html
 <h-radio-group name="books" defaultvalue="Angular">
    <h-radio>React</h-radio>
    <h-radio>Vue</h-radio>
    <h-radio>Angular</h-radio>
    <h-radio>Flutter</h-radio>
    <h-radio>Swift</h-radio>
</h-radio-group>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `name`| 通知标题 |  `string` | - | -
| `value`| 通知标题 |  `string` | - | -
| `disabled`| 不可选择 |  `boolean` | - | -
| `onchange`| 当前是否选中的回调	 |  `EventEmitter<boolean>` | - | `false`