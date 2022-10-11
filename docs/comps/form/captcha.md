---
title: Captcha 验证码
author: fico
date: 2022/08/12
tags:
 - 输入框
 - 表单
 - 验证码
---
::: tip
验证码输入框。
:::
<pre class="language-ts">
import { Hcaptcha } from 'hi-kits/captcha'
</pre>

### 基本用法

::: demo
```html
    <h-captcha></h-captcha>
    
```
:::

### 自定义验证码长度

::: demo
```html
    <h-captcha length=6></h-captcha>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `length`| 验证码长度 |  `number` | - | -
