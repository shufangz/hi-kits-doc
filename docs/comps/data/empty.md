# Empty 空状态

空状态时的展示占位图。

### 何时使用
当目前没有数据时，用于显式的用户提示。



### 基本用法

简单的展示。

::: demo
```html
<h-empty></h-empty>

```
:::

### 文字设置

可配置文字内容，颜色及字体大小

::: demo
```html
<h-empty color="green" size="20">
    <img width="300"  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01d29258cce264a801219c77ec3f60.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661074999&t=f35b6021033e83a5e45e6a40c184d79c">
    <p>对不起，目前没有数据</p>
</h-empty>

```
:::

### 自定义状态

自定义图片、描述、附属内容。

::: demo
```html
<h-empty>
    <h-icon name="user" size="50" color="#42b983"></h-icon>
    <p>自定义空状态</p>
    <h-button>Click Here</h-button>
</h-empty>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|   color    |文字颜色     |string       |   -     |     -
|   size    |文字大小   |string       |   -     |     -
|   slot    |自定义内容   |string / TemplateRef / null	       |   -     |     -
