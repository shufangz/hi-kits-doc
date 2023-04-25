---
title: Image 图片
author: zhangshaoming
date: 2022/09/15
tags:
 - Image
---
::: tip
可预览的图片。
:::

### 何时使用
```ts
import { HiImage } from 'hi-kits/image'
```

### 基本用法

单击图像可以放大显示。


::: demo
```html
    <h-image src="https://ys-oss-zjrs.haier.net/content/img/2022072617500217861338.jpg"></h-image>
```
:::

### 容错处理

加载失败或者无图片时显示图像占位符。

::: demo
```html
    <h-image src="" title="无图片"></h-image>
```
:::

### 多图

多张图片自动 `flex` 布局

::: demo
```html
 <h-image-group>
    <h-image src="https://ys-oss-zjrs.haier.net/content/img/2022072617500217861338.jpg" width="200px"></h-image>
    <h-image src="https://ys-oss-zjrs.haier.net/content/img/2022072617500217861338.jpg" width="200px"></h-image>
    <h-image width="200px" src="https://ys-oss-zjrs.haier.net/content/img/2022072617500217861338.jpg"></h-image>
    <h-image width="200px" src="https://ys-oss-zjrs.haier.net/content/img/2022072617500217861338.jpg"></h-image>
    <h-image width="200px" src="https://ys-oss-zjrs.haier.net/content/img/2022072617500217861338.jpg"></h-image>
    <h-image width="200px" src="https://ys-oss-zjrs.haier.net/content/img/2022072617500217861338.jpg"></h-image>
</h-image-group>
```
:::

### 服务模式创建
图片预览的 `Service` 用法，通过 `HiImage.preview`呈现图片。



::: demo
```html
 <h-button
type="primary"
onclick="HiServe.image.preview({src: 'https\:\/\/ys-oss-zjrs.haier.net/content/img/2022072617500217861338.jpg'})">点击按钮呈现图片
</h-button>

```
:::

### 懒加载

::: demo
```html
<h-row>
    <h-image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" height="200px" width="200px" lazyLoad="true"></h-image>
</h-row>
<h-row>
    <h-image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" height="200px" width="200px" lazyLoad="true"></h-image>
</h-row>
<h-row>
    <h-image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" height="200px" width="200px" lazyLoad="true"></h-image>
</h-row>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `src`| 图片地址 |  `string` | - | -
| `alt`| 图片显示不出来时显示alt中内容 |  `string` | - | -
| `title`| 鼠标放到图像时的提示文字 |  `string` | - | -
| `width`| 图片宽度 |  `string` | - | -
| `height`| 图片高度 |  `string` | - | -
| `lazyLoad`| 是否懒加载 |  `boolean` | - | `false`
