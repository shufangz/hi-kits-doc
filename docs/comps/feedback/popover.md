# Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。
### 何时使用
- 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。
- 和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。
<pre class="language-ts">
import { HiPopover } from 'hi-kits/popover'
</pre>
### 基本用法

最简单的用法，浮层的大小由内容区域决定。

::: demo
```html
<h-popover type="confirm" onsubmit="console.log('ok')" ptitle="确定删除吗?" content="删除后无法撤销"><h-button>confirm</h-button></h-popover>

```
:::

### 不可用

::: demo
```html
<h-popover disabled type="confirm" onsubmit="console.log('ok')" title="确定删除吗?" content="删除后无法撤销">
    <h-button> disabled</h-button>
</h-popover>

```
:::

### 自定义content

::: demo
```html
<h-popover>
    <h-button>自定义content</h-button>
    <h-popcon title="确定删除吗?" type="confirm" onsubmit="console.log('ok')">
        <div>
        <div>自定义删除后无法撤销</div>
        <div>删除后无法撤销</div>
        <div>删除后无法撤销</div>
        </div>
    </h-popcon>
</h-popover>

 <h-popover>
    <h-button>自定义2</h-button>
    <h-popcon type="pane" title="提示">
        <div>
        <div>这是一段提示提示提示提示提示</div>
        <div>这是一段提示</div>
        <div>这是一段提示</div>
        </div>
    </h-popcon>
</h-popover>

```
:::

### 触发方式
鼠标移入、聚集、点击。

::: demo
```html
<h-popover dir="left" title="uuu" trigger="click" hOk='alert(233)' type='confirm'>
    <h-button>confirmOk</h-button>
</h-popover>
<h-popover dir="top" title="我是title" content="我是内容" trigger="hover">
    <h-button>hover popover</h-button>
</h-popover>

```
:::
### h-popover

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `dir`| 展示方向 |  `string` | `'top' | 'right' | 'bottom' | 'left' |  'topleft' | 'topright' | 'righttop' | 'rightbottom' | 'bottomleft' | 'bottomright' | 'lefttop' | 'leftbottom' | 'auto'` | `bottom`
| `disabled`| 是否可用 |  `boolean` | - | `false`
| `accomplish`| 是否直接打开 |  `boolean` | - | `false`
| `trigger`| 触发方式 |  `string` | `'hover' | 'focus' | 'contextmenu' | 'click'`| -
| `type`| 类型 |  `string` | `'confirm' | 'nomal'`|`nomal`
| `content`| 内容 |  `string` | -|-
| `oktext`| 确定文案 |  `string` | -|确 定
| `canceltext`| 取消文案 |  `string` | -|取 消
| `loading`| 加载状态 |  `boolean` | -|`false`
| `hOk`| 点击确认回调函数 |  ` string  |  Function` | -|-

### h-popcon

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `stopfocus`| 聚焦 |  `boolean` | -|`false`
| `disabled`| 是否可用 |  `boolean` | - | `false`
| `title`| 标题 |  `string` | -|-
| `type`| 类型 |  `string` | `'confirm' | 'nomal'`|`nomal`
| `oktext`| 确定文案 |  `string` | -|确 定
| `canceltext`| 取消文案 |  `string` | -|取 消
| `trigger`| 触发方式 |  `string` | `'hover' | 'focus' | 'contextmenu' | 'click'`| -
| `loading`| 加载状态 |  `boolean` | -|`false`
| `popoverVisible`| 控制popover展示与否 |  `boolean` | -|`false`
| `hOk`| 点击确认回调函数 |  ` string  |  Function` | -|-
