# Space 间距

设置组件之间的间距。

### 何时使用
避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。目前支持水平（ horizontal ）和竖直（ vertical ）两种方向

### 基本用法
相邻组件水平间距。

::: demo
```html
 <h-space>
    <h-button>button</h-button>
    <h-button>button</h-button>
    <h-button>button</h-button>
</h-space>

```
:::

### 垂直间距
相邻组件垂直间距。

::: demo
```html
 <h-space dir="vertical">
    <h-button>button</h-button>
    <h-button>button</h-button>
    <h-button>button</h-button>
</h-space>

```
:::

### 自定义尺寸
自定义间距大小。

::: demo
```html
 <h-space gutter="30">
    <h-button>button</h-button>
    <h-button>button</h-button>
    <h-button>button</h-button>
</h-space>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| dir | 间距方向| string | vertical / horizontal | horizontal
| gutter | 间距大小	| number | - | 12


