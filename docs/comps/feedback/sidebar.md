# Sidebar 侧边栏

侧边栏父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。

### 何时使用

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。
<pre class="language-ts">
import { HiSidebar } from 'hi-kits/sidebar'
</pre>
### 基本用法

基础抽屉，点击触发按钮侧边栏从左滑出，点击遮罩区关闭

::: demo
```html
<h-sidebar id="Sidebar">
    <h2 style="text-align: center">边栏</h2>
    <h-list>
        <h-list-item>数据管理</h-list-item>
        <h-list-item>位置</h-list-item>
        <h-list-item>
            学习
            <h-list-item-action>
                <h-tag style="color: #FFF; background-color: #31d100fd; " noBorder text="333"></h-tag>
            </h-list-item-action>
        </h-list-item>
        <h-list-item>
            收藏
            <h-list-item-action>
                <h-tag noBorder style="color: #FFF; background-color: #01bffd; " text="333"></h-tag>
            </h-list-item-action>
        </h-list-item>
        <h-list-item>
            信用
            <h-list-item-action>
                <h-switch></h-switch>
            </h-list-item-action>
        </h-list-item>
    </h-list>
    
</h-sidebar>
<h-button onclick="document.getElementById('Sidebar').setAttribute('show','')">打开侧边栏</h-button>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `show`| 显示状态 |  `boolean` | - | `false`
