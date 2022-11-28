---
title: Board 卡牌布局
author: fico
date: 2022/09/02
tags:
 - 卡片式
 - 布局
---
::: tip
商品卡片，用于展示商品的图片、价格等信息。
:::
### 何时使用
```ts
import { HiBoard } from 'hi-kits'
```

### 基本用法

::: demo
```html
<h-row gutter="10">
    <h-col span="10">
        <h-divider text="一行一个" dir="left"></h-divider>
        <h-board gutter="10">
            <h-goods picture="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F79bH5QEe4hO6yps3XG3JsA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664694209&t=4be791401a14527fea19700b574d1efb"
                name="商品名称"
                price="¥100.00"
                discount="¥90.00"
            >
            </h-goods>
            <h-goods picture="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F79bH5QEe4hO6yps3XG3JsA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664694209&t=4be791401a14527fea19700b574d1efb"
                name="商品名称"
                price="¥100.00"
                discount="¥90.00"
            >
            </h-goods>
        </h-board>
    </h-col>
</h-row>

```
:::


### 多种模式

::: demo
```html
<h-row gutter="10">
     <h-col span="16" >
        <h-divider text="一行两个" dir="left"></h-divider>
        <h-board mode="1/1"  gutter="10">
            <h-goods picture="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F79bH5QEe4hO6yps3XG3JsA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664694209&t=4be791401a14527fea19700b574d1efb"
              name="商品名称"
              price="¥100.00"
              discount="¥90.00"
            >
            </h-goods>
            <h-goods picture="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F79bH5QEe4hO6yps3XG3JsA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664694209&t=4be791401a14527fea19700b574d1efb"
              name="商品名称"
              price="¥100.00"
              discount="¥90.00"
            >
            </h-goods>
            <h-goods picture="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F79bH5QEe4hO6yps3XG3JsA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664694209&t=4be791401a14527fea19700b574d1efb"
              name="商品名称"
              price="¥100.00"
              discount="¥90.00"
            >
            </h-goods>
        </h-board>
    </h-col>
    <h-col span="20" >
          <h-divider text="一行三个" dir="left"></h-divider>
          <h-board mode="1/1/1"  gutter="10px 20px">

            <h-goods picture="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F79bH5QEe4hO6yps3XG3JsA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664694209&t=4be791401a14527fea19700b574d1efb"
              name="商品名称"
              price="¥100.00"
              discount="¥90.00"
            >
            </h-goods>
            <h-goods picture="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F79bH5QEe4hO6yps3XG3JsA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664694209&t=4be791401a14527fea19700b574d1efb"
              name="商品名称"
              price="¥100.00"
              discount="¥90.00"
            >
            </h-goods>
            <h-goods picture="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F79bH5QEe4hO6yps3XG3JsA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664694209&t=4be791401a14527fea19700b574d1efb"
              name="商品名称"
              price="¥100.00"
              discount="¥90.00"
            >
            </h-goods>
            <h-goods picture="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F79bH5QEe4hO6yps3XG3JsA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664694209&t=4be791401a14527fea19700b574d1efb"
              name="商品名称"
              price="¥100.00"
              discount="¥90.00"
            >
            </h-goods>
            <h-goods picture="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F79bH5QEe4hO6yps3XG3JsA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664694209&t=4be791401a14527fea19700b574d1efb"
              name="商品名称"
              price="¥100.00"
              discount="¥90.00"
            >
            </h-goods>
        </h-board>
    </h-col>
</h-row>

```
:::

### 自定义内容

::: demo
```html
<h-row gutter="10">
    <h-col span="18">
        <h-board mode="1/1"  gutter="10px 20px">
            <h-goods>
              <div slot="custom">
                <div>
                  <img style="max-width: 100%;" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F79bH5QEe4hO6yps3XG3JsA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664694209&t=4be791401a14527fea19700b574d1efb"/>
                </div>
                <p style="color: #f00;">商品名称</p>
                <p style=" font-size: 12px; color: rgb(140, 140, 140);">¥100.00</p>
                <p style=" font-size: 16px; color: rgb(9, 255, 5);">¥90.00</p>
              </div>
            </h-goods>
        </h-board>
    </h-col>
</h-row>

```
:::

### 参数说明
#### h-board

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `mode`| 显示模式 |  `string` |  `'1/1' | '1/1/1' | 'auto'`| -
| `gutter`| 子项目间距 |  `string` | - | -

#### h-goods

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `picture`| 商品图片 |  `string` |  -| -
| `name`| 商品名称 |  `string` | - | -
| `price`| 商品价格 |  `string` | - | -
| `discount`| 商品折扣价 |  `string` | - | -
