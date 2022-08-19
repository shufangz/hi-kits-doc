# Banner 横幅
Banner 广告横幅一般是放置在网页上的不同位置,在用户浏览网页信息的同时,吸引用户对于 广告信息的关注
<pre class="language-ts">
import { HiBanner } from 'hi-kits/banner'
</pre>

### 基本用法
默认比例，尺寸自适应，圆角可配置

::: demo
```html
 <h-row gutter="20">
    <h-col span="8">
        <p>默认</p>
        <h-banner img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
        </h-banner>
    </h-col>
    <h-col span="8">
        <p>圆角 radius="40"</p>
        <h-banner radius="40" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
        </h-banner>
    </h-col>
    <h-col span="8">
        <p>圆角 radius="80"</p>
        <h-banner radius="80" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
        </h-banner>
    </h-col>
</h-row>

```
:::

### 不同比例

Hikits 可以自定义比例展示banner

::: demo
```html
<h-row gutter="10">
    <h-col span="4">
        <p>5:2</p>
        <h-banner ratio="5:2" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
        </h-banner>
    </h-col>
    <h-col span="4">
        <p>16:9</p>
        <h-banner ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
        </h-banner>
    </h-col>
    <h-col span="4">
        <p>3:2</p>
        <h-banner ratio="3:2" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
        </h-banner>
    </h-col>
    <h-col span="4">
        <p>4:3</p>
        <h-banner ratio="4:3" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
        </h-banner>
    </h-col>
    <h-col span="4">
        <p>1:1</p>
        <h-banner ratio="1:1" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
        </h-banner>
    </h-col>
    <h-col span="4">
        <p>自定义比例3:1</p>
        <h-banner ratio="3:1" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
        </h-banner>
    </h-col>
</h-row>

```
:::

### 不同模式

Hikits 提供了模式，为适配不同需求中的布局

::: demo
```html
<h-row gutter="10">
    <h-col span="12">
        <p>一行二个</p>
        <h-banner mode="1/1" gutter="10">
            <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
            <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
        </h-banner>
    </h-col>
    <h-col span="12">
        <p>一行三个</p>
        <h-banner mode="1/1/1" gutter="10">
            <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
            <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
            <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
        </h-banner>
        <p>一行四个</p>
        <h-banner mode="1/1/1/1" gutter="10">
            <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
            <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
            <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
            <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
        </h-banner>
    </h-col>
    <h-col span="12">
        <p>左一右二</p>
        <h-banner mode="1/2" gutter="10">
            <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
            <h-banner gutter="10">
                <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
                <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
            </h-banner>
        </h-banner>
    </h-col>
    <h-col span="12">
        <p>左一右三</p>
        <h-banner mode="1/3" gutter="10">
            <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
            <h-banner gutter="10">
                <h-banner-item  ratio="16:9" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
                <h-banner mode="1/1" gutter="10">
                    <h-banner-item  ratio="1:1" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
                    <h-banner-item  ratio="1:1" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d"></h-banner-item>
                </h-banner>
            </h-banner>
        </h-banner>
    </h-col>
    <h-col span="6">
        <p>一上两下</p>
        <h-banner mode="auto" gutter="10">
            <h-banner-item ratio="2:1"
              img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
            </h-banner-item>
            <h-banner mode="1/1" gutter="10">
                <h-banner-item ratio="1:1"
                    img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
                </h-banner-item>
                <h-banner-item ratio="1:1"
                    img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
                </h-banner-item>
            </h-banner>
        </h-banner>
    </h-col>
    <h-col span="12">
        <p>一下两上</p>
        <h-banner mode="auto" gutter="10">
            <h-banner mode="1/1" gutter="10">
              <h-banner-item ratio="1:1"
                img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
              </h-banner-item>
              <h-banner-item ratio="1:1"
                img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
              </h-banner-item>
            </h-banner>
            <h-banner-item ratio="2:1"
              img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cbbe5a095d8ca80121985c875200.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661492672&t=a611f9ae37c7a49fe53b49507f9df30d">
            </h-banner-item>
        </h-banner>
    </h-col>
</h-row>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `radius`| 圆角半径 |  `number` | - | 8
| `img`| 图片地址 |  `string` | - | -
| `ratio`| 显示比例 |  `string` | - | 5:2
| `mode`| 显示模式 |  `string` | - | 1/1/1
| `gutter`| 以模式显示时，各个子banner之间的间距 |  `number` | - | -

### 不同模式参数设置

|模式|说明
|:--|:--
| 1/1 | 一行二个
| 1/1/1 | 一行三个
| 1/1/1/1 | 一行四个
| 1/2 | 左一右二
| 1/3 | 左一右三


