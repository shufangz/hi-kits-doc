# Alert 警告提示
警告提示，展现需要关注的信息。

### 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

### 基本用法

最简单的用法，适用于简短的警告提示。

::: demo
```html
<h-alert type="success">Success Text</h-alert>

<style>
    h-alert {
        margin: 10px;
    }
</style>

```
:::

### 四种样式
共有四种样式 success、info、warning、error。

::: demo
```html
<h-alert type="success">Success Text</h-alert>
<h-alert type="info">Info Text</h-alert>
<h-alert type="warning">Warning Text</h-alert>
<h-alert type="error">Error Text</h-alert>

```
:::

### 可关闭的警告提示
显示关闭按钮，点击可关闭警告提示。

::: demo
```html
<h-alert type="success" closeable>Success Description Success Description Success Description
</h-alert>
<h-alert type="info" closeable>Info Description Info Description Info Description Info Description
</h-alert>
<h-alert type="warning" closeable>Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text
</h-alert>
<h-alert type="error" closeable>Error Description Error Description Error Description Error Description Error Description Error Description
</h-alert>

```
:::

### 带有辅助性文字介绍
包含标题和内容，解释更详细的警告。

::: demo
```html
<h-alert type="success" showIcon title="带辅助性文字介绍
">这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……
</h-alert>

```
:::


### 图标
可口的图标让信息类型更加醒目,提升可读性。

::: demo
```html
<h-alert type="success" showIcon>Detailed description and advices about successful copywriting.</h-alert>
<h-alert type="info" showIcon>Info Text</h-alert>
<h-alert type="warning" showIcon>Warning Text</h-alert>
<h-alert type="error" showIcon>Error Text</h-alert>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|title	|标题	|string	|—	|—
|type	|主题	|string	|success/warning/info/error	|info
|closeable	|是否可关闭	|boolean	|—	|true
|showIcon	|是否显示图标	|boolean	|—	|false
