# Divider 分割线

区隔内容的分割线。

### 何时使用
- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。


### 水平分割线

默认为水平分割线，可在中间加入文字。

:::demo
```html
  <div>
    <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
    <h-divider></h-divider>
    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
    <h-divider>With Text</h-divider>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing hit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</span>
    <h-divider text="虚线分割线" dashed></h-divider>
  </div>
  
```
:::

### 标题位置

修改分割线标题的位置。

:::demo
```html
    <h-divider dir="left">少年包青天</h-divider>
    <h-divider dir="center">
        <h-icon name="heart" size="50" color="#F44336"></h-icon>
    </h-divider>
    <h-divider dir="right">阿里云</h-divider>

```
:::

### 垂直分割线

使用 type="vertical" 设置为行内的垂直分割线。

:::demo
```html
  <div>
    <span>雨纷纷</span>
    <h-divider type="vertical"></h-divider>
    <span>旧故里</span>
    <h-divider type="vertical"></h-divider>
    <span>草木深</span>
  </div>

```
:::


### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:----|:---
| type | 水平还是垂直类型 | string | horizontal / vertical | horizontal
| text | 中间文字	 | string | - | -
| dir | 中间文字方向 | string | left / center / right  | center
| dashed | 是否虚线	 | boolean | - | false
