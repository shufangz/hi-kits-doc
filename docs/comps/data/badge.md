<!--
 * @Author: zengshufang zengshufang@haier.com
 * @Date: 2022-07-26 18:02:27
 * @LastEditors: zengshufang zengshufang@haier.com
 * @LastEditTime: 2022-07-27 09:26:11
 * @FilePath: /vuedoc/docs/comps/data/badge.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# Badge 徽标数

图标右上角的圆形徽标数字。

### 何时使用
一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。


### 基本用法

简单的徽章展示

::: demo
```html

 <h-row gutter="10">
    <h-col span="8">
        <h-space gutter="30">
            <a class="Example">
                <h-badge count="643"></h-badge>
            </a>
            <a class="Example">
                <h-badge count="秒杀"></h-badge>
            </a>
            <a class="Example">
                <h-badge count="0"></h-badge>
            </a>
        </h-space>      
    </h-col>
</h-row>
 <style>
    .Example{
        width: 42px;
        height: 42px;
        border-radius: 4px;
        background: #eee;
        display: inline-block;
    }
</style>

```
:::


### 状态点
用于表示状态的小圆点。

::: demo
```html
<a class="Example">
    <h-badge  badgeStyle="background: green;" dot></h-badge>
</a>
<a class="Example">
    <h-badge  badgeStyle="background: gold;" dot></h-badge>
</a>
<a class="Example">
    <h-badge  badgeStyle="background: cyan;" dot></h-badge>
</a>
<a class="Example">
    <h-badge  color="#3F51B5"></h-badge>
</a>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---