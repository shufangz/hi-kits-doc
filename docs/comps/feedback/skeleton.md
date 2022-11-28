---
title: Skeleton 骨架屏
author: songtianyue
date: 2022/10/30
tags:
 - 数据渲染
---
::: tip
在需要等待加载内容的位置提供一个占位图形组合。
:::
### 何时使用
- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只适合用在第一次加载数据的场景。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验
```ts
import { HiSkeleton } from 'hi-kits'
```

### 基本用法
最简单的用法。
:::demo
```html
<h-skeleton></h-skeleton>
```
:::

### 可设置行数的骨架图
:::demo
```html
<h-skeleton rows="4"></h-skeleton>
```
:::

### 带头像占位的骨架图
:::demo
```html
<h-skeleton havatar="true"></h-skeleton>
```
:::

### 带动画效果的骨架图
:::demo
```html
<h-skeleton hactive="true" havatar="true"></h-skeleton>
```
:::

### 可隐藏标题的骨架图
:::demo
```html
<h-skeleton  htitle="false"></h-skeleton>
```
:::

### 可隐藏段落的骨架图
:::demo
```html
<h-skeleton hparagraph="false"></h-skeleton>
```
:::

### 内容和骨架图切换
:::demo
```html
<div>
    <h-switch onchange="document.getElementById('Skeleton').setAttribute('hloading', event.detail.checked)" checked></h-switch>
    <h-list>
    <h-skeleton hloading="true" id="Skeleton">
        <div slot="replaceContent">
        <h-list-item>
            <h-list-item-inner>
            <h-list-item-media>
                <h-avatar circle color="#42b983">
                <img src="./01.jpg" />
                </h-avatar>
            </h-list-item-media>

            <div>
                <div>披头士乐队</div>
                <p style="color: #aaa;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus
                ut turpis condimentum, ut dignissim lacus tincidunt.</p>
                <p> Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel
                felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id,
                pulvinar lacus.</p>
                <h-list-item-action style="color: #aaa; ">
                <h-icon name="person" color="#42b983"></h-icon> 222
                <h-divider type="vertical"></h-divider>
                <h-icon name="heart" color="#F44336"></h-icon> 333
                </h-list-item-action>
            </div>
            </h-list-item-inner>
            <h-list-item-extra>
            <img width="180" src="./02.jpg" />
            </h-list-item-extra>
        </h-list-item>
        </div>
    </h-skeleton>
    </h-list>
</div>
```
:::

### 自定义骨架元素
:::demo
```html
 <div>
    <h-row gutter="24">
    <h-col span="6">
        按钮形状：
        <h-segmenteds current="default" onCurrentChange="document.getElementById('SkeletonButtonItem').setAttribute('hshape', event.detail)">
        <h-segmented value="default">default</h-segmented>
        <h-segmented value="circle">circle</h-segmented>
        <h-segmented value="round">round</h-segmented>
        </h-segmenteds>
    </h-col>
    <h-col span="6">
        头像形状：
        <h-segmenteds current="circle" onCurrentChange="document.getElementById('SkeletonAvatarItem').setAttribute('hshape', event.detail)">
        <h-segmented value="circle">circle</h-segmented>
        <h-segmented value="square">square</h-segmented>
        </h-segmenteds>
    </h-col>
    <h-col span="6">
        尺寸：
        <h-segmenteds current="default" onCurrentChange="document.getElementById('SkeletonButtonItem').setAttribute('hsize', event.detail);document.getElementById('SkeletonAvatarItem').setAttribute('hsize', event.detail);document.getElementById('SkeletonInputItem').setAttribute('hsize', event.detail)">
        <h-segmented value="default">default</h-segmented>
        <h-segmented value="small">small</h-segmented>
        <h-segmented value="large">large</h-segmented>
        </h-segmenteds>
    </h-col>
    <h-col span="6">
        动画特效：
        <h-switch onchange="document.getElementById('SkeletonButtonItem').setAttribute('hactive', event.detail.checked);document.getElementById('SkeletonAvatarItem').setAttribute('hactive', event.detail.checked);document.getElementById('SkeletonInputItem').setAttribute('hactive', event.detail.checked);document.getElementById('SkeletonImageItem').setAttribute('hactive', event.detail.checked)"></h-switch>
    </h-col>
    </h-row>
    <h-row gutter="24">
    <h-col span="6">
        <h-skeleton-item htype="button" id="SkeletonButtonItem"></h-skeleton-item>
    </h-col>
    <h-col span="6">
        <h-skeleton-item htype="avatar" id="SkeletonAvatarItem"></h-skeleton-item>
    </h-col>
    <h-col span="6">
        <h-skeleton-item htype="input" id="SkeletonInputItem"></h-skeleton-item>
    </h-col>
    <h-col span="6">
        <h-skeleton-item htype="image" id="SkeletonImageItem"></h-skeleton-item>
    </h-col>
    </h-row>
</div>
```
:::