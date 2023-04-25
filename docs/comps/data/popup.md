---
title: Popup 弹出窗
author: fico
date: 2022/08/09
tags:
 - 弹框
---
::: tip
Popup 是一个模态窗口，其中包含在 App 的主要内容上弹出的任何 HTML 内容。与所有其他叠加层一样，弹出窗口是所谓的“临时视图”的一部分
:::
### 何时使用
弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。
```ts
import { HiPopup } from 'hi-kits/popup'
```
### 基本用法

::: demo
```html
<h-button type="primary" onclick="document.getElementById('Popup').setAttribute('show', '')">打开弹出窗口</h-button>
<h-popup heading="Popup Title" id="Popup">
<span slot="content">
    <h-button onclick="HiMessage.info({content: 'This a info message', duration: 3000})">info</h-button>
    <p>Here comes popup. You can put here anything, even independent view with its own navigation. Also not, that
    by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque
    congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum
    pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada
    suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
    pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae
    ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
    <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper
    pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel
    tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at
    vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in
    iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros,
    convallis blandit dui sit amet, gravida adipiscing libero.</p>
</span>
</h-popup>
```
:::


### 打开弹出窗口满屏（手机端）

::: demo
```html
 <h-button type="primary" onclick="document.getElementById('Popup1').setAttribute('show', '')">打开弹出窗口(满屏)
</h-button>
<h-popup heading="Popup Title" full id="Popup1">
    <span slot="content">
        <h-button onclick="HiMessage.info({content: 'This a info message', duration: 3000})">info</h-button>
        <p>Here comes popup. You can put here anything, even independent view with its own navigation. Also not, that
        by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque
        congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum
        pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada
        suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
        pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae
        ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
        <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper
        pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel
        tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at
        vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in
        iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros,
        convallis blandit dui sit amet, gravida adipiscing libero.</p>
    </span>
</h-popup>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `heading`| 标题 |  `string` | - | -
| `full`| 满屏显示 |  `boolean` | - | -
| `show`| 显示状态 |  `boolean` | - | -
