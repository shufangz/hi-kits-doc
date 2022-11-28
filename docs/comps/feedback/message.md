---
title: Message 消息提示
author: fico
date: 2022/04/28
tags:
 - 提示
---
::: tip
常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。
:::
### 何时使用

- 全局展示操作反馈信息。
- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式
```ts
import { HiServe.message } from 'hi-kits'
```
### 基础用法

从顶部出现，3 秒后自动消失。

::: demo
```html
<h-button onclick="HiServe.message.info({content: 'This a info message'})">打开消息提示</h-button>

```
:::

### 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

::: demo
```html
<h-button onclick="HiServe.message.info({content: 'This a info message'})">info</h-button>
<h-button onclick="HiServe.message.success({content:'This a success message'})">success</h-button>
<h-button onclick="HiServe.message.error({content:'This a error message'})">error</h-button>
<h-button onclick="HiServe.message.warning({content:'This a warning message'})">warning</h-button>

```
:::

### 修改延时
自定义时长 10s，默认时长为 3s。

::: demo
```html
<h-button onclick="HiServe.message.info({content: 'This a info message', duration: 10000})">点击10秒后消失</h-button>

```
:::

### 加载中
进行全局 loading，异步自行移除。

::: demo
```html
<h-button onclick="HiServe.message.loading({content:'This a loading message'})">loading</h-button>

```
:::

### 可关闭

::: demo
```html
<h-button onclick="HiServe.message.info({content:'This a long info message',duration: 3000000})">消息展示</h-button>
<h-button onclick="HiServe.message.close()">关闭消息展示</h-button>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `content`| 提示内容| `string | TemplateRef`| - | -
| `duration`| 持续时间(毫秒)| `number` |-	| 3
