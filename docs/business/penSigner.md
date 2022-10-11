---
title: PenSigner 签名板
author: fico
date: 2022/08/25
tags:
 - 业务
 - 签名
---
::: tip
适用于电子签名，结果输出为一张图片
:::
### 何时使用
```ts
import { HiPenSigner } from 'hi-kits/penSigner'
```

### 基本用法
可以设置宽、 高、 颜色和背景色， 返回生成的图片
::: demo
```html
<h-pen-signer width="300" height="100" color="#F60" background="#c6d6db" onchange="console.log(event.detail.img)">
</h-pen-signer>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `width`| 签字板宽度 |  `string` | - | -
| `height`| 签字板高度 |  `string` | - | -
| `color`| 签字板文字颜色 |  `string` | - | -
| `background`| 签字板背景色 |  `string` | - | -
| `onchange`| 签字板内容更改时的回调函数 |  `Function` | - | -
