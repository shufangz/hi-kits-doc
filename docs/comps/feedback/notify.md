# Notify 通知

悬浮出现在页面角落，全局展示通知提醒信息。

### 何时使用
在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。
<pre class="language-ts">
import { HiNotify } from 'hi-kits/notify'
</pre>
### 基本用法

最简单的用法，5 秒后自动关闭。

::: demo
```html
<h-button onclick="HiNotify.show({
    title: 'Notify',
    content: 'This a info notify', 
})">默认</h-button>

```
:::

### 指定时间关闭

自定义通知框自动关闭的延时。设为 0 时不自动关闭。

::: demo
```html
<h-button onclick="HiNotify.show({
    title: 'Notify',
    content: 'This a info notify', 
    duration: 2000,
})">指定时间2秒后关闭</h-button>

```
:::

### 取消自动关闭

`autohide`设置为`false`时自动关闭取消

::: demo
```html
<h-button onclick="HiNotify.show({
    title: 'Notify',
    content: 'This a info notify', 
    autohide: false,
})">取消自动关闭</h-button>

```
:::

### 不同状态的通知
Hi-kits 为 `Notify `组件准备了四种通知类型：`success`, `warning`, `info`, `error`。通过`type`字段来设置，除此以外的值将被忽略。

::: demo
```html
<h-button onclick="HiNotify.show({
    title: 'Notify',
    type: 'info',
    content: 'This a info notify', 
})">info</h-button>
<h-button onclick="HiNotify.show({
    title: 'Notify',
    type: 'success',
    content: 'This a info notify', 
})">success</h-button>
<h-button onclick="HiNotify.show({
    title: 'Notify',
    type: 'error',
    content: 'This a info notify', 
})">error</h-button>
<h-button onclick="HiNotify.show({
    title: 'Notify',
    type: 'warning',
    content: 'This a info notify', 
})">warning</h-button>

```
:::

### 自定义弹出位置

可以让 `Notification` 从屏幕四角中的任意一角弹出。

::: demo
```html
<h-button onclick="HiNotify.show({
    title: 'Notify',
    content: 'This a info notify', 
    placement: 'topleft'
})">topleft</h-button>
<h-button onclick="HiNotify.show({
    title: 'Notify',
    content: 'This a info notify', 
    placement: 'topright'
})">topright</h-button>
<h-button onclick="HiNotify.show({
    title: 'Notify',
    content: 'This a info notify', 
    placement: 'bottomleft'
})">bottomleft</h-button>
<h-button onclick="HiNotify.show({
    title: 'Notify',
    content: 'This a info notify', 
    placement: 'bottomright'
})">bottomright</h-button>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `title`| 通知标题 |  `string` | - | -
| `content`| 通知内容| `string | TemplateRef`| - | -
| `duration`| 自动关闭的延时，单位毫秒。设为 0 时不自动关闭| `number` |-	| 5000
| `placement`| 显示位置信息设置 |  `string` | `topleft | topright | bottomleft | bottomright | topleft`
| `type`| 通知类型 |  `string` | `success | warning | info | error`| -
| `autohide`| 自动关闭 |  `boolean` | - | `true`
| `callback`| 关闭时触发的回调函数 | ` () => void` | - | -
