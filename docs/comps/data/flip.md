---
title: Flip 翻转
author: fico
date: 2022/04/27
tags:
 - animate
---
### 何时使用
```ts
import { HiFlip } from 'hi-kits/flip'
```
### 基本用法

::: demo
```html
<h-flip width="300" height="350">
    <div class="front" slot="front">
        <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
    </div>
    <div class="back" slot="back">
        <div>
        <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
        <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
        <h-button class="button">Click Here</h-button>
        </div>
    </div>
</h-flip>

```
:::
<style>
.front,
.back {
    border-radius: 12px;
    text-align: center;
    color: #fff;
}

.front {
    background-size: cover;
    padding: 2rem;
    font-size: 1.618rem;
    font-weight: 600;
    overflow: hidden;
    font-family: Poppins, sans-serif;
    background: rgba(33, 150, 243, 0.502)
}

.back {
    font-weight: 300;
    color: #333;
    background: rgba(195, 214, 247, 0.654);
    padding: 2em;
}

.back .button::before {
    box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
    background-color: rgba(26, 87, 230, 0.25);
}

.back .button {
    background: linear-gradient(135deg, #e61a80, #e61a3c);
}

.back .button::before {
    box-shadow: 0 0 10px 10px rgba(230, 26, 60, 0.25);
    background-color: rgba(230, 26, 60, 0.25);
}

.button {
    transform: translateZ(40px);
    cursor: pointer;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    font-weight: bold;
    color: #fff;
    padding: .5em 1em;
    border-radius: 100px;
    font: inherit;
    border: none;
    position: relative;
    transform-style: preserve-3d;
    transition: 300ms ease;
}

.button::before {
    transition: 300ms ease;
    position: absolute;
    display: block;
    content: '';
    transform: translateZ(-40px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 100px;
    left: 10px;
    top: 16px;
}

.button:hover {
    transform: translateZ(55px);
}

.button:hover::before {
    transform: translateZ(-55px);
}
</style>

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `width`| 宽度 |  `number` | - | -
| `height`| 高度 |  `number` | - | -
