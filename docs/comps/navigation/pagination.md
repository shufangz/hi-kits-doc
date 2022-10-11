---
title: Pagination 分页
author: fico
date: 2022/06/17
tags:
 - 操作
 - 分页
---
::: tip
采用分页的形式分隔长列表，每次只加载一个页面。
:::
### 何时使用
- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。
```ts
import { HiPagination } from 'hi-kits/pagination'
```
### 基本用法

基础分页。


::: demo
```html
<h-pagination onchange="HiMessage.info({content: '当前页: '+ event.detail.current, duration: 1000})" pagesize="3" total="50"></h-pagination>

```
:::

### 简洁分页

::: demo
```html
<h-pagination onchange="HiMessage.info({content: '当前页: '+ event.detail.current, duration: 1000})" simple="true" pagesize="3" total="50"></h-pagination>

```
:::

### 不同大小的分页

::: demo
```html
<h-divider dir="left">大</h-divider>
<h-pagination size="large" onchange="HiMessage.info({content: '当前页: '+ event.detail.current, duration: 1000})" pagesize="3" total="50"></h-pagination>
<h-divider dir="left">中</h-divider>
<h-pagination size="default" onchange="HiMessage.info({content: '当前页: '+ event.detail.current, duration: 1000})" pagesize="3" total="50"></h-pagination>
<h-divider dir="left">小</h-divider>
<h-pagination size="small" onchange="HiMessage.info({content: '当前页: '+ event.detail.current, duration: 1000})" pagesize="3" total="50"></h-pagination>
                        
```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|`defaultcurrent`|默认值	|`number`| - | 1
|`pagesize`|设置或返回分页组件的每页条数	|`number`| - | 1
|`total`|设置或返回分页组件的数据总数	|`number`| - | 1
|`simple`|可以添加simple属性，只展示当前页和总页数	|`boolean`| - | `false`
|`href`|支持href链接模式，可以实现分页通过a链接跳转	|`string`| - | -
