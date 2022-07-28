# Tips 文字提示

简单的文字提示气泡框。

### 何时使用
- 鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。
- 可用来代替系统默认的 title 提示，提供一个按钮/文字/操作的文案解释。

### 基本用法

最简单的用法。

::: demo
```html
<h-tips tips="some tips">
    Tip will show when mouse enter.
</h-tips>

```
:::

### 位置

位置有 12 个方向。

::: demo
```html
 <h-row gutter="10" style="max-width: 600px; margin: 0px auto; --gutter:10px;" class="tips">
    <h-col span="4"></h-col>
    <h-col span="4">
        <h-tips tips="topleft topleft topleft topleft some tips" dir="topleft">
            <h-button>topleft</h-button>
        </h-tips>
    </h-col>
    <h-col span="4">
        <h-tips type="ww" prefix="2223." suffix=".wwwe" tips="some tips" dir="top">
            <h-button>top</h-button>
        </h-tips>
    </h-col>
    <h-col span="4">
        <h-tips tips="some tips" dir="topright">
            <h-button>topright</h-button>
        </h-tips>
    </h-col>
    <h-col span="8"></h-col>
    <h-col span="4">
        <h-tips dir="lefttop" tips="a a a a a a a a a lefttop lefttop lefttop lefttop lefttop some tips">
            <h-button>lefttop</h-button>
        </h-tips>
    </h-col>
    <h-col span="12"></h-col>
    <h-col span="4">
        <h-tips dir="righttop" tips="a a a a a a a a a lefttop lefttop lefttop lefttop lefttop lefttop some tips">
            <h-button>righttop</h-button>
        </h-tips>
    </h-col>
    <h-col span="4"></h-col>
    <h-col span="4">
        <h-tips dir="left" tips="some tips some tips some tips some tips some tips some tips some tips">
            <h-button>left</h-button>
        </h-tips>
    </h-col>
    <h-col span="12"></h-col>
    <h-col span="4">
        <h-tips dir="right" tips="some tips">
            <h-button>right</h-button>
        </h-tips>
    </h-col>
    <h-col span="4"></h-col>
    <h-col span="4">
        <h-tips dir="leftbottom" tips="a a a a a a a a a leftbottom leftbottom leftbottom leftbottom leftbottom leftbottom leftbottom leftbottom some tips">
            <h-button>leftbottom</h-button>
        </h-tips>
    </h-col>
    <h-col span="12"></h-col>
    <h-col span="4">
        <h-tips dir="rightbottom" tips="a a a rightbottom rightbottom rightbottom rightbottom rightbottom some tips">
            <h-button>rightbottom</h-button>
        </h-tips>
    </h-col>
    <h-col span="4"></h-col>
    <h-col span="4"></h-col>
    <h-col span="4">
        <h-tips dir="bottomleft" tips="some tips">
            <h-button>bottomleft</h-button>
        </h-tips>
    </h-col>
    <h-col span="4">
        <h-tips dir="bottom" tips="some tips">
            <h-button>bottom</h-button>
        </h-tips>
    </h-col>
    <h-col span="4">
        <h-tips dir="bottomright" tips="some tips">
            <h-button>bottomright</h-button>
        </h-tips>
    </h-col>
</h-row>
<style>
.tips h-col h-tips h-button {
    width: 100px
}
</style>

```
:::

### 不同状态的提示

::: demo
```html
<h-tips tips="some tips" type="success"><h-button>success</h-button></h-tips>
<h-tips tips="some tips" type="warning"><h-button>warning</h-button></h-tips>
<h-tips tips="some tips" type="error"><h-button>error</h-button></h-tips>

```
:::

### 多彩文字提示

::: demo
```html
<h-tips tips="some tips" color="pink"><h-button>pink</h-button></h-tips>
<h-tips tips="some tips" color="red"><h-button>red</h-button></h-tips>
<h-tips tips="some tips" color="yellow"><h-button>yellow</h-button></h-tips>
<h-tips tips="some tips" color="orange"><h-button>orange</h-button></h-tips>
<h-tips tips="some tips" color="cyan"><h-button>cyan</h-button></h-tips>
<h-tips tips="some tips" color="green"><h-button>green</h-button></h-tips>
<h-divider></h-divider>

<h-tips tips="some tips" color="blue"><h-button>blue</h-button></h-tips>
<h-tips tips="some tips" color="purple"><h-button>purple</h-button></h-tips>
<h-tips tips="some tips" color="volcano"><h-button>volcano</h-button></h-tips>
<h-tips tips="some tips" color="gold"><h-button>gold</h-button></h-tips>
<h-tips tips="some tips" color="#f50"><h-button>#f50</h-button></h-tips>
<h-tips tips="some tips" color="#2db7f5"><h-button>#2db7f5</h-button></h-tips>
<h-divider></h-divider>

<h-tips tips="some tips" color="#87d068"><h-button>#87d068</h-button></h-tips>
<h-tips tips="some tips" color="#108ee9"><h-button>#108ee9</h-button></h-tips>
<h-tips tips="some tips" color="#E6A23C"><h-button>#E6A23C</h-button></h-tips>
<h-tips tips="some tips" color="#F56C6C"><h-button>#F56C6C</h-button></h-tips>
<h-tips tips="some tips" color="#67C23A"><h-button>#67C23A</h-button></h-tips>
<h-tips tips="some tips" color="#409EFF"><h-button>#409EFF</h-button></h-tips>
<style>
h-tips h-button {
    width: 100px
}
</style>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|type|可以通过type设置提示框的颜色，有三种类型|string|success / error / warning |-
|show|添加show属性可以主动控制提示框的出现时机，不再与hover和focus关联，可以取值true和false。|boolean| - |false
|tips|提示文字。如果不设置则不显示提示|string| - |-
|color|背景颜色	|string| - |-
|dir|气泡框位置	|	string| top / right / bottom / left / topleft / topright / righttop / rightbottom / bottomleft / bottomright / lefttop / leftbottom | top
