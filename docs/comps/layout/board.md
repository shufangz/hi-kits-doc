# Board 卡牌布局

商品卡片，用于展示商品的图片、价格等信息。

### 何时使用
<pre class="language-ts">
import { HiBoard } from 'hi-kits/board'
</pre>

### 基本用法

::: demo
```html
<h-row gutter="10">
    <h-col span="4">
        <p>一行一个</p>
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
     <h-col span="12" >
        <p>一行两个</p>
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
    <h-col span="12" >
          <p>一行三个</p>
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
    <h-col span="4">
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

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `title`| 通知标题 |  `string` | - | -
