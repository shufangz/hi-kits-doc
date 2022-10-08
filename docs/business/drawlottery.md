# Drawlottery 转盘抽奖
适用于活动抽奖等需求

### 何时使用
<pre class="language-ts">
import { HiDrawlottery } from 'hi-kits/drawlottery'
</pre>

### 基本用法
通过`onclick`事件设置转盘的奖品索引及是否开始抽奖。
::: demo
```html
<h-row gutter="10">
    <h-col span="12">
        <h-drawlottery 
          onclick="(
        this.setAttribute('index', '1'),
        this.setAttribute('start', 'true'),
        this.removeAttribute('start')
        )">
          </h-drawlottery>
    </h-col>
</h-row>

```
:::


### 自定义圆角和间距
通过 `radius` 配置转盘方块的圆角，按照`border-radius`的设置，左上，右上，右下，左下。`gutter`设置各方块之间的间距
::: demo
```html
<h-row gutter="10">
    <h-col span="12">
        <h-drawlottery 
          radius="[100,100,100,100]"
          gutter="20"
          onclick="(
            this.setAttribute('index', '1'),
            this.setAttribute('start', 'true'),
            this.removeAttribute('start')
          )">
          </h-drawlottery>
    </h-col>
</h-row>

```
:::

### 自定义转盘控制按钮
通过 `lotteryBtnInfo` 配置转盘中心控制按钮的样式及文案
::: demo
```html
<h-row gutter="10">
    <h-col span="12">
        <h-drawlottery
          id="drawlottery"
          lotteryBtnInfo = "{text: '立即开奖', dec: '剩余1次机会', background: 'lightblue', color: '#000', fontSize: '12px', fontWeight: 600, textcolor: '#000000', textfontSize: '16px', textfontWeight: 500, deccolor: '#333333', decfontSize: '12px', decfontWeight: 400,radius:[100, 100, 100, 100]}"
          radius="[10, 10, 10, 10]"
          onchange="lottoryChange(event)"
          gutter="10">
          </h-drawlottery>
    </h-col>
</h-row>

```
:::
### 自定义配置
可设置奖品方块
::: demo

```html
<template>
  <h-row gutter="10" >
      <h-col span="12">
          <h-drawlottery ref="drawlottery" gutter="20" radius="[100,100,100,100]"  
          onclick="(
          this.setAttribute('index', '1'),
          this.setAttribute('start', 'true'),
          this.removeAttribute('start')
          )">
          剩余0次机会
          </h-drawlottery>
      </h-col>
  </h-row>
</template>
<script>
  export default {
  data: () => ({
    prizeOptionList : [
      {
        prizeImg: 'https://ys-zjrs.haier.net/image/logo(1).svg',
        prizeQuota: '88',
        background: '#dee',
        index: 0,
      },
      {
        prizeImg: 'https://ys-zjrs.haier.net/image/logo(1).svg',
        prizeQuota: '66',
        background: '#dee',
        index: 1,
      },
      {
        prizeImg: 'https://ys-zjrs.haier.net/image/logo(1).svg',
        prizeQuota: '30',
        background: '#dee',
        index: 2,
      },
      {
        prizeImg: 'https://ys-zjrs.haier.net/image/logo(1).svg',
        prizeQuota: '15',
        background: '#dee',
        index: 3,
      },
      {
        prizeImg: 'https://ys-zjrs.haier.net/image/logo(1).svg',
        prizeQuota: '0',
        background: '#dee',
        index: 4,
      },
  
      {
        prizeImg: 'https://ys-zjrs.haier.net/image/logo(1).svg',
        prizeQuota: '5',
        background: '#dee',
        index: 5,
      },
      {
        prizeImg: 'https://ys-zjrs.haier.net/image/logo(1).svg',
        prizeQuota: '10',
        background: '#dee',
        index: 6,
      },
  
      {
        prizeImg: 'https://ys-zjrs.haier.net/image/logo(1).svg',
        prizeQuota: '20',
        background: '#dee',
        index: 7,
      },
  ]
   }),
   mounted() {
    this.$refs.drawlottery.setValueFn('prizeOptionList', this.prizeOptionList)
   }
}
   
</script>
:::


### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `gutter`| 每个奖品块的间距 |  `number` |  -| -
| `background`| 项目背景颜色 |  `string` | - | -
| `radius`| 项目圆角,依照`border-radius` 的顺序，顺序为左上、右上、右下和左下 |  `Array[number,number,number,number]` | - | `[10,10,10,10]`
| `start`| 是否开始抽奖 |  `boolean` | - | -
| `index`| 奖品索引 |  `number` | - | -
| `prizeOptionList`| 父级传入的奖品列表 |  `Array[]` | - | -
| `onclick`|  点击抽奖时触发的回调函数 |  `Function` | - | -
| `onchange`| 转盘抽奖结束 |  `Function` | - | -




`prizeOptionList`: 自定义转盘抽奖数据,格式如下

<pre class="language-js">
prizeOptionList: [{
    prizeImg: 'https://ys-zjrs.haier.net/image/logo(1).svg', // 图片地址
    prizeQuota: '88', // 奖品说明
    background: '#dee', // 转盘背景颜色
    index: 0, // 索引
    prizeName: '0088海贝' // 奖品名称
},...]
</pre>
