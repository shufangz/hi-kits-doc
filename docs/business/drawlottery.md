# Drawlottery 转盘抽奖
适用于活动抽奖等需求

### 何时使用
<pre class="language-ts">
import { HiDrawlottery } from 'hi-kits/drawlottery'
</pre>

### 基本用法
通过onchange事件设置转盘的奖品索引及是否开始抽奖。
::: demo
```html
<h-row gutter="10">
    <h-col span="12">
        <h-drawlottery onchange="(
        this.setAttribute('index', '5'),
        this.setAttribute('start', 'true'),
        this.removeAttribute('start')
        )" gutter="4">
        剩余0次机会
        </h-drawlottery>
    </h-col>
</h-row>
```
:::


### 自定义配置
可设置奖品方块的背景颜色，圆角，间距
::: demo
```html
<h-row gutter="10" >
    <h-col span="12">
        <h-drawlottery gutter="20" radius="100"  background="pink" onchange="(
        this.setAttribute('index', '1'),
        this.setAttribute('start', 'true'),
        this.removeAttribute('start')
        )">
        剩余0次机会
        </h-drawlottery>
    </h-col>
</h-row>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `gutter`| 每个奖品块的间距 |  `number` |  -| -
| `background`| 项目背景颜色 |  `string` | - | -
| `radius`| 项目圆角 |  `number` | - | -
| `start`| 是否开始抽奖 |  `boolean` | - | -
| `index`| 奖品索引 |  `number` | - | -
| `prizeOptionList`| 奖品列表 |  `Array[]` | - | -

`prizeOptionList`: 自定义转盘抽奖数据,格式如下

<pre class="language-js">
prizeOptionList: [{
    prizeImg: 'assets/images/home/packet.png', // 图片地址
    prizeQuota: '88', // 奖品说明
    index: 0, // 索引
    prizeName: '0088海贝' // 奖品名称
},...]
</pre>
