<!--
 * @Author: zengshufang zengshufang@haier.com
 * @Date: 2022-07-26 17:32:49
 * @LastEditors: zengshufang zengshufang@haier.com
 * @LastEditTime: 2022-07-26 17:56:37
 * @FilePath: /vuedoc/docs/comps/data/card.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# Card 卡片

通用卡片容器。将信息聚合在卡片容器中展示。

### 何时使用
最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

### 简单卡片

卡片可以只有内容区域。

::: demo
```html
<h-card>
    <h-card-content>
        <p>Card content</p>
        <p>Card content</p>
    </h-card-content>
</h-card>

```
:::

### 带有标题的卡片
卡片头是用来显示卡的标题。

::: demo
```html
<h-card>
    <h-card-header>Card title</h-card-header>
    <h-card-content>
        <p>Card content</p>
        <p>Card content</p>
    </h-card-content>
</h-card>

```
:::

### 带有尾的卡片
页脚是一些附加信息或自定义操作。

::: demo
```html
<h-row gutter="20">
    <h-col span="12">
        <h-card>
            <h-card-content>
                <p>Card content</p>
                <p>Card content</p>
            </h-card-content>
            <h-card-footer>
                <div><h-icon name="sync" size="16" color="#F44336"></h-icon></div>
                <div><h-icon name="user" size="16" color="#42b983"></h-icon></div>
                <div><h-icon name="heart" size="16" color="#F44336"></h-icon></div>
            </h-card-footer>
        </h-card>
    </h-col>
    <h-col span="12">
        <h-card>
            <h-card-header>
                Card title
                <div slot="extra">
                    <a href="javascript:;">More</a>
                </div>
            </h-card-header>
            <h-card-content>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </h-card-content>
            <h-card-footer style="justify-content: space-between">
                <span>2015年1月20日</span>
                <span>评论 5</span>
            </h-card-footer>
        </h-card>
    </h-col>
</h-row>
```
:::

### 基础卡片
包含标题、内容、操作区域。

::: demo
```html
<h-row gutter="20">
    <h-col span="12">
        <h-card>
            <h-card-header>
                Card title
                <div slot="extra">
                    <a href="javascript:;">More</a>
                    <a href="javascript:;">More</a>
                    <a href="javascript:;">More</a>
                </div>
            </h-card-header>
            <h-card-content>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </h-card-content>
            <h-card-footer>
                <div><h-icon name="sync" size="16" color="#F44336"></h-icon></div>
            </h-card-footer>
        </h-card>
    </h-col>
    <h-col span="12">
        <h-card>
            <h-card-header>Card title</h-card-header>
            <h-card-content>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </h-card-content>
            <h-card-footer  style="justify-content: space-between">
                <a href="javascript:;" class="Link">喜欢</a>
                <a href="javascript:;" class="Link">查看更多</a>
            </h-card-footer>
        </h-card>
    </h-col>
</h-row>

```
:::

### 圆角卡片

::: demo
```html
 <h-card radius="12">
    <h-card-header style="background-image:url(https://ys-oss-zjrs.haier.net/content/img/2022072617500217861338.jpg);height: 300px; color: white;align-items: flex-end;">
        圆角卡片
    </h-card-header>
    <h-card-content>
        带有标题和尾的卡片。卡片头是用来显示卡的标题和脚注的一些附加信息或自定义操作。
    </h-card-content>
    <h-card-footer>
        <div><h-icon name="sync" size="16" color="#F44336"></h-icon></div>
    </h-card-footer>
</h-card>

```
:::

### 无边框

::: demo
```html
<div style="background: #ccc;padding: 10px">
    <h-card noBorder>
        <h-card-header>
            无边框
        </h-card-header>
        <h-card-content>
            <p>在灰色背景上使用无边框的卡片。</p>
            <p>Card content</p>
            <p>Card content</p>
        </h-card-content>
        <h-card-footer>
            <div><h-icon name="sync" size="16" color="#F44336"></h-icon></div>
            <div><h-icon name="user" size="16" color="#42b983"></h-icon></div>
            <div><h-icon name="heart" size="16" color="#F44336"></h-icon></div>
        </h-card-footer>
    </h-card>
</div>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
|[noBorder]|	是否移除边框 |	boolean	|- |false