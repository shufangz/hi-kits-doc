<!--
 * @Author: zengshufang zengshufang@haier.com
 * @Date: 2022-07-21 17:33:37
 * @LastEditors: zengshufang zengshufang@haier.com
 * @LastEditTime: 2022-07-21 18:00:25
 * @FilePath: /vuedoc/docs/comps/feedback/loading.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# Loading 加载

加载数据时显示动效。

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
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|size|大小|number |-|-
|color|颜色|string |-|-