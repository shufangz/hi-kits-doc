---
title: Result 结果
author: songtianyue
date: 2022/08/25
tags:
 - 结果
 - 数据渲染
---
::: tip
用于反馈一系列操作任务的处理结果。
:::
### 何时使用
当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

<pre class="language-ts">
import { HiResult } from 'hi-kits/result'
</pre>

### 基本用法

成功的结果。

::: demo
```html
<h-result status="success" title="Successfully Purchased Cloud Server ECS!" subTitle="This is subtitle">
    <div slot="resultExtra">
        <h-button type="primary">Go Console</h-button>
        <h-button>Buy Again</h-button>
    </div>
</h-result>

```
:::

### 展示处理结果

::: demo
```html
<h-result status="info" title="Your operation has been executed">
    <div slot="resultExtra">
        <h-button type="primary">Go Console</h-button>
    </div>
</h-result>

```
:::

### 警告类型的结果
::: demo
```html
<h-result status="warn" title="There are some problems with your operation">
    <div slot="resultExtra">
        <h-button type="primary">Go Console</h-button>
    </div>
</h-result>

```
:::

### 复杂的错误反馈

::: demo
```html
<h-result status="error" title="Submission Failed" subTitle="Please check and modify the following information before resubmitting.">
    <div slot="resultContent">
        <div style="margin: 24px 0px;padding:24px 40px;background-color: #fafafa;text-align:left;width:calc(100% - 140px);">
        <h-title title="The content you submitted has the following error:" size="large"></h-title>
        <p>
            <h-icon name="alert_circled"></h-icon>
            Your account has been frozen
            <a>Thaw immediately &gt;</a>
        </p>
        <p>
            <h-icon name="alert_circled"></h-icon>
            Your account is not yet eligible to apply
            <a>Apply immediately &gt;</a>
        </p>
        </div>
    </div>
    <div slot="resultExtra">
        <h-button type="primary">Go Console</h-button>
        <h-button>Buy Again</h-button>
    </div>
</h-result>

```
:::

### 没有此页面的访问权限
::: demo
```html
<h-result status="unauthorized" title="403" subTitle="Sorry, you are not authorized to access this page.">
    <div slot="resultExtra">
        <h-button type="primary">Back Home</h-button>
        <h-button>Buy Again</h-button>
    </div>
</h-result>

```
:::

### 此页面未找到
::: demo
```html
<h-result status="notFound" title="404" subTitle="Sorry, the page you visited does not exist.">
    <div slot="resultExtra">
        <h-button type="primary">Back Home</h-button>
        <h-button>Buy Again</h-button>
    </div>
</h-result>

```
:::

### 服务器发生了错误
::: demo
```html
<h-result status="serverError" title="500" subTitle="Sorry, there is an error on server.">
    <div slot="resultExtra">
        <h-button type="primary">Back Home</h-button>
        <h-button>Buy Again</h-button>
    </div>
</h-result>

```
:::

### 自定义icon
::: demo
```html
<h-result title="This is self-defined icon!" hIcon="person" color="#1890ff">
    <div slot="resultExtra">
        <h-button type="primary">Go Console</h-button>
    </div>
</h-result>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `title`| 标题 |  `string` | - | -
| `subTitle`| 副标题 |  `string` | - | -
| `status`| 状态 |  `string` |  `'success' | 'info' | 'warn' | 'error' | 'unauthorized' | 'notFound' | 'serverError' | ''` | -
| `hIcon`| 自定义图标名称 |  `string` | - | -
| `hColor`| 自定义颜色 |  `string` | - | -
