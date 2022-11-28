---
title: Tabbar 标签栏
author: fico
date: 2022/10/28
tags:
 - 导航
 - 移动端
---
::: tip
用于在不同功能模块之间进行快速切换，位于页面底部
:::
### 何时使用
```ts
import { HiTabbar } from 'hi-kits'
```

### 基本用法

::: demo
```html
<h-row>
    <h-col span="12">
        <h-tabbar>
            <h-tabbar-item>
                <h-icon name="home" size="24">
                <h-badge size="small" count="3"></h-badge>
                </h-icon>
                首页
            </h-tabbar-item>
            <h-tabbar-item>
                <h-icon name="messages" size="24">
                <h-badge  badgeStyle="background: red;" dot></h-badge>
                </h-icon>
                消息中心
            </h-tabbar-item>
            <h-tabbar-item>
                <h-icon name="store" size="24"></h-icon>
                商城
            </h-tabbar-item>
            <h-tabbar-item>
                <h-icon name="person" size="24">
                <h-badge  badgeStyle="background: red;" dot></h-badge>
                </h-icon>
                用户中心
            </h-tabbar-item>
        </h-tabbar>
    </h-col>
</h-row>
```
:::

### 仅图标

::: demo
```html
<h-row>
    <h-col span="12">
        <h-tabbar>
            <h-tabbar-item>
                <h-icon name="home" size="24">
                <h-badge size="small" count="3"></h-badge>
                </h-icon>
            </h-tabbar-item>
            <h-tabbar-item>
                <h-icon name="messages" size="24">
                <h-badge  badgeStyle="background: red;" dot></h-badge>
                </h-icon>
            </h-tabbar-item>
            <h-tabbar-item>
                <h-icon name="store" size="24"></h-icon>
            </h-tabbar-item>
            <h-tabbar-item>
                <h-icon name="person" size="24">
                <h-badge  badgeStyle="background: red;" dot></h-badge>
                </h-icon>
            </h-tabbar-item>
        </h-tabbar>
    </h-col>
</h-row>
```
:::

### 文字

::: demo
```html
<h-row>
    <h-col span="12">
        <h-tabbar>
            <h-tabbar-item>
                首页
            </h-tabbar-item>
            <h-tabbar-item>
                消息中心
            </h-tabbar-item>
            <h-tabbar-item>
                商城
            </h-tabbar-item>
            <h-tabbar-item>
                用户中心
            </h-tabbar-item>
        </h-tabbar>
    </h-col>
</h-row>
```
:::

### 混合

::: demo
```html
<h-row>
    <h-col span="12">
        <h-tabbar>
            <h-tabbar-item>
                首页
            </h-tabbar-item>
            <h-tabbar-item>
                <h-icon name="messages" size="24">
                <h-badge  badgeStyle="background: red;" dot></h-badge>
                </h-icon>
            </h-tabbar-item>
            <h-tabbar-item>
                <h-icon name="store" size="24"></h-icon>
                商城
            </h-tabbar-item>
            <h-tabbar-item>
                <h-button type="primary">用户中心</h-button>
            </h-tabbar-item>
        </h-tabbar>
    </h-col>
</h-row>
```
:::
