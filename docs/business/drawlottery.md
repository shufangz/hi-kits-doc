---
title: Drawlottery 转盘抽奖
author: liulina
date: 2022/09/23
tags:
 - 活动业务
 - 转盘
---
::: tip
适用于活动抽奖等需求
:::
### 何时使用
```ts
import { HiDrawlottery } from 'hi-kits'
```

### 基本用法
通过`onclick`事件设置转盘的奖品索引及是否开始抽奖。
::: demo
```html
<h-row gutter="10">
    <h-col span="12" style="width: 375px; height:375px">
          <h-drawlottery id="drawlottery"
            lotteryInfo="{text: '立即开奖', dec: '剩余1次机会'}"
            lotteryDecStyle= "{color: '#333333', fontSize: '12px', fontWeight: 400}"
            lotteryTextStyle= "{color: '#000', fontSize: '16px', fontWeight: 500}"
            lotteryWarpStyle="{background: '#6cd2d2',radius:[100, 100, 100, 100]}"
            prizeListStyle="{color: '#42b983',fontSize: '12px',fontWeight: 500, radius:[10, 10, 10, 10]}"
            onclick="(
            this.setAttribute('index', '1'),
            this.setAttribute('start', 'true'),
            this.removeAttribute('start')
          )" gutter="10">
          </h-drawlottery>
    </h-col>
</h-row>

```
:::


### 自定义转盘方块
通过 `prizeListStyle` 配置转盘方块的样式
::: demo
```html
<h-row gutter="10">
    <h-col span="12" style="width: 375px; height:375px">
        <h-drawlottery id="drawlottery"
            lotteryInfo="{text: '立即开奖', dec: '剩余1次机会'}"
            lotteryWarpStyle="{background: '#6cd2d2',radius:[100, 100, 100, 100]}"
            prizeListStyle="{color: '#42b983',fontSize: '12px',fontWeight: 500, background: '#e8f8a1',}"
            onclick="(
            this.setAttribute('index', '1'),
            this.setAttribute('start', 'true'),
            this.removeAttribute('start')
          )" gutter="10">
          </h-drawlottery>
    </h-col>
</h-row>

```
:::

### 自定义转盘控制按钮
通过 `lotteryInfo` 配置转盘中心控制按钮文字及描述，`lotteryTextStyle`配置按钮文字的样式， `lotteryDecStyle`配置描述文字的样式，`lotteryWarpStyle`配置控制按钮的样式
::: demo
```html
<h-row gutter="10">
    <h-col span="12" style="width: 375px; height:375px">
        <h-drawlottery
          id="drawlottery"
          lotteryInfo="{text: '开奖啦', dec: '点击领奖'}"
          lotteryDecStyle= "{color: '#e38163', fontSize: '12px', fontWeight: 400}"
            lotteryTextStyle= "{color: '#eca6a6', fontSize: '16px', fontWeight: 500}"
            lotteryWarpStyle="{background: '#3bffef',radius:[30, 30, 30, 30]}"
          onchange="lottoryChange(event)"
          gutter="10">
          </h-drawlottery>
    </h-col>
</h-row>

```
:::
### 自定义配置
可设置奖品方块内容
::: demo

```html
<template>
  <h-row gutter="10" >
      <h-col span="12" style="width: 375px; height:375px">
          <h-drawlottery ref="drawlottery" gutter="20" 
           lotteryWarpStyle="{background: '#abb8af',radius:[30, 30, 30, 30]}"
           prizeListStyle="{color: '#1ef',fontSize: '12px',fontWeight: 500, background: '#d39f86',radius:[30, 30, 30, 30] }" 
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
        prizeImg: '../images/zoo/11.jpeg',
        prizeQuota: '88',
        background: '',
        index: 0,
        prizeName: '100海贝'
      },
      {
        prizeImg: '../images/zoo/22.jpeg',
        prizeQuota: '66',
        background: '',
        index: 1,
        prizeName: '再来一次'
      },
      {
        prizeImg: '../images/zoo/33.jpeg',
        prizeQuota: '30',
        background: '',
        index: 2,
        prizeName: '30海贝'
      },
      {
        prizeImg: '../images/zoo/77.jpeg',
        prizeQuota: '15',
        background: '',
        index: 3,
        prizeName: '谢谢参与'
      },
      {
        prizeImg: '../images/zoo/00.jpeg',
        prizeQuota: '0',
        background: '',
        index: 4,
        prizeName: '200海贝'
      },
  
      {
        prizeImg: '../images/zoo/66.jpeg',
        prizeQuota: '5',
        background: '',
        index: 5,
        prizeName: '很遗憾，没有奖励'
      },
      {
        prizeImg: '../images/zoo/88.jpeg',
        prizeQuota: '10',
        background: '',
        index: 6,
        prizeName: '300海贝'
      },
  
      {
        prizeImg: '../images/zoo/99.jpeg',
        prizeQuota: '20',
        background: '',
        index: 7,
        prizeName: '500海贝'
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
| `lotteryInfo`| 抽奖按钮信息 |  `string` | - | -
| `lotteryDecStyle`| 抽奖按钮描述文本样式信息 |  `string` | - | ``
| `lotteryTextStyle`| 抽奖按钮文字样式信息 |  `string` | - | ``
| `lotteryWarpStyle`| 抽奖按钮整体样式信息 |  `string` | - | ``
| `prizeListStyle`| 奖品按钮样式信息 |  `string` | - | ``
| `start`| 是否开始抽奖 |  `boolean` | - | -
| `index`| 奖品索引 |  `number` | - | -
| `prizeOptionList`| 父级传入的奖品列表 |  `Array[]` | - | -
| `onclick`|  点击抽奖时触发的回调函数 |  `Function` | - | -
| `onlottchange`| 开始抽奖的回调 |  `Function` | - | -




`prizeOptionList`: 自定义转盘抽奖数据,格式如下

```js
prizeOptionList: [{
    prizeImg: 'https://ys-zjrs.haier.net/image/logo(1).svg', // 图片地址
    prizeQuota: '88', // 奖品说明
    background: '#dee', // 转盘背景颜色
    index: 0, // 索引
    prizeName: '0088海贝' // 奖品名称
},...]
```
