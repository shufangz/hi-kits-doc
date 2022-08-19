# Carousel 走马灯

当选项过多时，使用下拉菜单展示并选择内容。
### 何时使用
<pre class="language-ts">
import { HiCarousel } from 'hi-kits/carousel'
</pre>

### 基本用法

适用广泛的基础用法,设置`autoplay`可自动播放

::: demo
```html
<h-row gutter="30">
    <h-col span="12">
        <h-carousel autoplay>
            <h-carousel-item>
                <div>1</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>2</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>3</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>4</div>
            </h-carousel-item>
        </h-carousel>
    </h-col>
        <h-col span="12">
        <h-carousel>
            <h-carousel-item>
                <div>1</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>2</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>3</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>4</div>
            </h-carousel-item>
        </h-carousel>
    </h-col>
</h-row>

```
:::

### 指示器
可以修改指示器的显示位置，`dotPosition`设置为`none`则不显示，设置为`outside`则显示在容器外部

::: demo
```html
<h-row gutter="30">
    <h-col span="12">
        <h-carousel dotPosition="center">
          <h-carousel-item>
            <div>1</div>
          </h-carousel-item>
          <h-carousel-item>
            <div>2</div>
          </h-carousel-item>
          <h-carousel-item>
            <div>3</div>
          </h-carousel-item>
          </h-carousel-item>
        </h-carousel>
      </h-col>
      <h-col span="12">
        <h-carousel dotPosition="left">
          <h-carousel-item>
            <div>1</div>
          </h-carousel-item>
          <h-carousel-item>
            <div>2</div>
          </h-carousel-item>
          <h-carousel-item>
            <div>3</div>
          </h-carousel-item>
          </h-carousel-item>
        </h-carousel>
      </h-col>
      <h-col span="12">
        <h-carousel dotPosition="outside">
          <h-carousel-item>
            <div>1</div>
          </h-carousel-item>
          <h-carousel-item>
            <div>2</div>
          </h-carousel-item>
          <h-carousel-item>
            <div>3</div>
          </h-carousel-item>
          </h-carousel-item>
        </h-carousel>
      </h-col>
      <h-col span="12">
        <h-carousel dotPosition="none">
          <h-carousel-item>
            <div>1</div>
          </h-carousel-item>
          <h-carousel-item>
            <div>2</div>
          </h-carousel-item>
          <h-carousel-item>
            <div>3</div>
          </h-carousel-item>
          </h-carousel-item>
        </h-carousel>
    </h-col> 
</h-row>

```
:::

### 切换箭头
可以设置切换箭头的显示时机,`arrow`默认为`hover`,效果是鼠标进入容器箭头显示，离开箭头隐藏，当`arrow`设置为`always` 时，箭头一直显示，设置为`none`时，不显示箭头
::: demo
```html
<h-row gutter="30">
    <h-col span="12">
        <h-carousel arrow="always">
            <h-carousel-item>
                <div>1</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>2</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>3</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>4</div>
            </h-carousel-item>
        </h-carousel>
    </h-col>
    <h-col span="12">
        <h-carousel arrow="nerver" autoplay>
            <h-carousel-item>
                <div>1</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>2</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>3</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>4</div>
            </h-carousel-item>
        </h-carousel>
    </h-col>
</h-row>

```
:::

### 指示器点击风格
可以修改指示器的点击风格，默认为`fillup`

::: demo
```html
<h-row gutter="30">
    <h-col span="12">
        <h-carousel dotType="scaleup">
            <h-carousel-item>
                <div>1</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>2</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>3</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>4</div>
            </h-carousel-item>
        </h-carousel>
    </h-col>
    <h-col span="12">
        <h-carousel dotType="puff">
            <h-carousel-item>
                <div>1</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>2</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>3</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>4</div>
            </h-carousel-item>
        </h-carousel>
    </h-col>
</h-row>
```
:::

### 自定义自动播放时间间隔
可以修改自动切换的时间间隔，单位是毫秒，默认1秒
::: demo
```html
<h-row gutter="30">
    <h-col span="12">
        <h-carousel interval="3000" autoplay>
            <h-carousel-item>
                <div>1</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>2</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>3</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>4</div>
            </h-carousel-item>
        </h-carousel>
    </h-col>
</h-row>

```
:::

### 修改初始化激活状态的索引
初始状态激活的幻灯片的索引,默认从 0 开始	
::: demo
```html
<h-row>
    <h-col span="12">
        <h-carousel initCurrent="2">
            <h-carousel-item>
                <div>1</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>2</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>3</div>
            </h-carousel-item>
            <h-carousel-item>
                <div>4</div>
            </h-carousel-item>
        </h-carousel>
    </h-col>
</h-row>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `height`| 走马灯的高度	 |  `number` | - | -
| `autoplay`| 是否自动播放 |  `boolean` | - | false
| `dotPosition`| 指示器的位置	 | `string`  | `'left' | 'center' | 'right' | 'outside' | 'none'` | `'right'`
| `dotType`| 指示器点击风格	 | `string`  | `'puff' | 'scaleup' | 'fillup'` | `'fillup'`
| `arrow`| 箭头显示方式	 | `string`  | ` 'always' | 'hover' | 'never'` | `'hover'`
| `initCurrent`| 初始状态激活的幻灯片的索引，从 0 开始 |  `number` | - | 0
| `interval`| 自动切换的时间间隔，单位为毫秒		 |  `number` | - | 1000
| `onchange`| 幻灯片切换时触发	返回目前激活的幻灯片的索引，原幻灯片的索引 |  `Function` | - | -
