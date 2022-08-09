# Loading 加载

用于页面和区块的加载中状态。
### 何时使用
页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
<pre class="language-ts">
import { HiLoading } from 'hi-kits/loading'
</pre>
### 基本用法

一个简单的 loading 状态。

::: demo
```html
<h-loading></h-loading>

```
:::

### 各种大小

::: demo
```html
<h-loading size="20" color="green"></h-loading>
<h-loading size="40" color="yellow"></h-loading>
<h-loading size="60" color="olivedrab"></h-loading>
<h-loading size="80" color="orange"></h-loading> 
<h-loading size="100" color="red"></h-loading> 
<h-loading size="120" color="blue"></h-loading> 

```
:::

### 容器

放入一个容器中。

::: demo
```html
<div class="example">
    <h-loading size="120"></h-loading> 
</div>

<style>
.example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
    }
</style>

```
:::

### 自定义描述文案

::: demo
```html
<h-loading>加载中</h-loading>

```
:::
### 加载遮罩

::: demo
```html
<h-row gutter="10">
    <h-col span="6" style="background:rgba(29, 161, 222, 0.602); height: 100px;">
        <h-loading mask size="30"  color="#fff">
            <div style="font-size: 14px;">加载遮罩</div>
        </h-loading>
    </h-col>
</h-row>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|`size`|大小|`number` |-|-
|`color`|颜色|`string` |-|-