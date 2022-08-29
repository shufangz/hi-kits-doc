# Menu 导航菜单

为页面和功能提供导航的菜单列表。
### 何时使用
导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

<pre class="language-ts">
import { HiMenut } from 'hi-kits/menu'
</pre>

### 基本用法
垂直菜单，子菜单是弹出的形式。
::: demo
```html
<h-menu>
    <h-menu list>
        <h-menu-item>
            <h-icon name="share" size="16" color="#333"></h-icon>
        Share
        </h-menu-item>
        <h-menu-item>
        <h-icon name="note" size="16" color="#333"></h-icon>Rename</h-menu-item>
    </h-menu>

    <h-menu list>
        <h-menu-item>
            <h-icon name="dashboard" size="16" color="#333"></h-icon>
            No status
            <span slot="sub">
                <h-icon name="chevron_forward"  size="16" color="#3F51B5"></h-icon>
            </span>
            <h-menu sub>
                <h-menu-item><h-icon name="bookmark" size="16" color="#3F51B5"></h-icon> Needs review</h-menu-item>
                <h-menu-item><h-icon name="cycling" size="16" color="#3F51B5"></h-icon> In progress</h-menu-item>
                <h-menu-item><h-icon name="diamond" size="16" color="#3F51B5"></h-icon> Approved</h-menu-item>
                <h-menu-item><h-icon name="figma" size="16" color="#3F51B5"></h-icon> No status</h-menu-item>
            </h-menu>
        </h-menu-item>
        <h-menu-item><h-icon name="link" size="16" color="#3F51B5"></h-icon> Copy Link Address</h-menu-item>
        <h-menu-item><h-icon name="crosshairs" size="16" color="#3F51B5"></h-icon> Move to</h-menu-item>
        <h-menu-item><h-icon name="files" size="16" color="#3F51B5"></h-icon> Copy to</h-menu-item>
        <h-menu-item><h-icon name="shield_check" size="16" color="#3F51B5"></h-icon> Make Private</h-menu-item>
        <h-menu-item><h-icon name="download" size="16" color="#3F51B5"></h-icon> Download</h-menu-item>
    </h-menu>
    <h-menu list>
        <h-menu-item><h-icon name="del" size="16" color="#3F51B5"></h-icon>Delete</h-menu-item>
    </h-menu>
</h-menu>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `title`| 通知标题 |  `string` | - | -
