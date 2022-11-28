---
title: Affix 固钉
author: yangyajuan
date: 2022/08/31
tags:
 - 浮动
 - 布局
---
::: tip
将页面元素钉在可视范围。
:::
### 何时使用
- 当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

- 页面可视范围过小时，慎用此功能以免遮挡页面内容。
```ts
import { HiAffix } from 'hi-kits'
```

### 固定在页面顶部
可通过 `siteTop`配置到顶部的距离
::: demo
```html
<h-affix offset="top" siteTop="10">
    <h-button type="primary">Affix Top</h-button>
</h-affix>
<h-affix offset="top" siteTop="120">
    <h-button type="primary">120px to affix top</h-button>
</h-affix>
```
:::


### 固定在页面底部
 可通过 `siteTop`配置到底部的距离
::: demo
```html
<h-affix offset="bottom" siteTop="10">
    <h-button type="primary">Affix Bottom</h-button>
</h-affix>
<h-affix offset="bottom" siteTop="120">
    <h-button type="primary">120px to affix bottom</h-button>
</h-affix>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|offset| 固定方向 | `string`| `top | bottom` | -
|siteTop | 滚动距离 | `string` | - | -
|- | - | - | - | -
|- | - | - | - | -

