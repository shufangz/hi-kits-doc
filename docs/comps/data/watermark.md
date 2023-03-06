---
title: Watermark 水印
author: fico
date: 2022/07/13
tags:
 - 水印
 - 文本
---
::: tip
给页面的某个区域加上水印。
:::
### 何时使用
```ts
import { HiWatermark } from 'hi-kits/watermark'
```

### 基本用法

::: demo
```html
<h-watermark text="文字水印">
    <div style="height: 300px">给页面的某个区域加上水印给页面的某个区域加上水印给页面的某个区域加上水印给页面的某个区域加上水印给页面的某个区域加上水印给页面的某个区域加上水印给页面的某个区域加上水印</div>
</h-watermark>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `text`| 水印内容 |  `string` | - | -
