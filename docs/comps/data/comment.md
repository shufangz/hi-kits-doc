---
title: Comment 评论
author: fico
date: 2022/07/02
tags:
 - 列表
 - 评论
---
::: tip
对网站内容的反馈、评价和讨论。
:::
### 何时使用
评论组件可用于对事物的讨论，例如页面、博客文章、问题等等。
```ts
import { HiComment } from 'hi-kits/comment'
```
### 基本评论

一个基本的评论组件，带有作者、头像、时间和操作。

::: demo
```html
<h-comment>
    <div slot="avatar">
        <h-avatar circle color="#42b983">
            <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg" />
        </h-avatar>
    </div>
    <div slot="author">
        作者名
    </div>
    <div slot="time">
        less than a minute
    </div>
    We supply a series of design principles, practical patterns and high quality design resources (Sketch and
Axure), to help people create their product prototypes beautifully and efficiently.
    <h-comment-action>
        <h-icon name="leaderboard" color="#42b983"></h-icon> 0
        <h-divider type="vertical"></h-divider>
        <h-icon name="loader" color="#42b983"></h-icon> 222
        <h-divider type="vertical"></h-divider>
        <h-icon name="heart" color="#F44336"></h-icon> 333
    </h-comment-action>
</h-comment>

```
:::

### 配合列表组件

配合 h-list 组件展现评论列表
::: demo
```html
<h-list size="small">
    <h-list-item>
        <h-comment>
            <div slot="avatar">
                <h-avatar circle color="#42b983">
                    <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </h-avatar>
            </div>
            <div slot="author">
                作者名
            </div>
            <div slot="time">
                1 day
            </div>
            We supply a series of design principles, practical patterns and high quality design resources (Sketch and
Axure), to help people create their product prototypes beautifully and efficiently.
            <h-comment-action>
                <h-icon name="internet" color="#42b983"></h-icon> 0
                <h-divider type="vertical"></h-divider>
                <h-icon name="message" color="#42b983"></h-icon> 222
                <h-divider type="vertical"></h-divider>
                <h-icon name="heart" color="#F44336"></h-icon> 333
            </h-comment-action>
        </h-comment>
    </h-list-item>
    <h-list-item>
        <h-comment>
            <div slot="avatar">
                <h-avatar circle color="#42b983">
                    <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </h-avatar>
            </div>
            <div slot="author">
                作者名
            </div>
            <div slot="time">
                2 day
            </div>
            We supply a series of design principles, practical patterns and high quality design resources (Sketch and
Axure), to help people create their product prototypes beautifully and efficiently.
            <h-comment-action>
                <h-icon name="layers" color="#42b983"></h-icon> 0
                <h-divider type="vertical"></h-divider>
                <h-icon name="notes" color="#42b983"></h-icon> 222
                <h-divider type="vertical"></h-divider>
                <h-icon name="heart" color="#F44336"></h-icon> 333
            </h-comment-action>
        </h-comment>
    </h-list-item>
</h-list>

```
:::

### 嵌套评论
评论可以嵌套。
::: demo
```html
<h-comment>
    <div slot="avatar">
        <h-avatar circle color="#42b983">
            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </h-avatar>
    </div>
    <div slot="author">
        作者名
    </div>
    <div slot="time">
        1 day
    </div>
    We supply a series of design principles, practical patterns and high quality design resources.
    <h-comment-action>
        <h-icon name="home" color="#42b983"></h-icon> 0
        <h-divider type="vertical"></h-divider>
        <h-icon name="justify" color="#42b983"></h-icon> 222
        <h-divider type="vertical"></h-divider>
        <h-icon name="heart" color="#F44336"></h-icon> 333
    </h-comment-action>
    <h-comment>
        <div slot="avatar">
            <h-avatar circle color="#42b983">
                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </h-avatar>
        </div>
        <div slot="author">
            作者名
        </div>
        <div slot="time">
            2 day
        </div>
        We supply a series of design principles, practical patterns and high quality design resources.
        <h-comment-action>
            <h-icon name="flashlight" color="#42b983"></h-icon> 0
            <h-divider type="vertical"></h-divider>
            <h-icon name="history" color="#42b983"></h-icon> 222
            <h-divider type="vertical"></h-divider>
            <h-icon name="heart" color="#F44336"></h-icon> 333
        </h-comment-action>
        <h-comment>
            <div slot="avatar">
                <h-avatar circle color="#42b983">
                    <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </h-avatar>
            </div>
            <div slot="author">
                作者名
            </div>
            <div slot="time">
                2 day
            </div>
            We supply a series of design principles, practical patterns and high quality design resources.
            <h-comment-action>
                <h-icon name="flight" color="#42b983"></h-icon> 0
                <h-divider type="vertical"></h-divider>
                <h-icon name="hourglass" color="#42b983"></h-icon> 222
                <h-divider type="vertical"></h-divider>
                <h-icon name="heart" color="#F44336"></h-icon> 333
            </h-comment-action>
        </h-comment>
    </h-comment>
</h-comment>
                            
```
:::

