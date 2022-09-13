# PullToRefresh 拉动刷新
用于提供下拉刷新的交互操作。

### 何时使用
<pre class="language-ts">
import { HiPullToRefresh } from 'hi-kits/pullToRefresh'
</pre>

### 基本用法
::: demo
```html
<h-pull-refresh style="background-color:#eee ; width: 100%; height:100px;">
</h-pull-refresh>
```
:::

### 下拉列表刷新
::: demo
```html
<h-pull-refresh>
    <h-list>
        <h-list-item>
            content
        </h-list-item>
        <h-list-item>
            content
        </h-list-item>
        <h-list-item>
            content
            <h-list-item-action>
            <h-tips tips="some tips" type="success">
                <h-tag noBorder color="#3F51B5" text="有提醒的标签"></h-tag>
            </h-tips>
            <h-tag noBorder style="color: #FFF; background-color: #31d100fd; " text="333"></h-tag>
            </h-list-item-action>
        </h-list-item>
        <h-list-item>
            content
            <h-list-item-action>
            <h-tag noBorder style="color: #FFF; background-color: #01bffd; " text="333"></h-tag>
            </h-list-item-action>
        </h-list-item>
    </h-list>
</h-pull-refresh>
```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `distance`| 触发距离 |  `number` | - | `44`
