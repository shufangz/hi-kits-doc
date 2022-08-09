# Toast 轻提示

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。
<pre class="language-ts">
import { HiToast } from 'hi-kits/toast'
</pre>
### 基本用法

::: demo
```html
<h-button onclick="HiToast({content: 'This a Toast'})">默认</h-button>

```
:::

### 自定义位置
Toast 默认渲染在屏幕底部正中位置，通过配置 site 可以控制 Toast 展示的位置。
::: demo
```html
<h-button onclick="HiToast({content: '居中提示', site:['50%'], duration: 1000})">居中提示</h-button>
<h-button onclick="HiToast({content: '顶部提示', site:['5%'], duration: 1000})">顶部提示</h-button>
<h-button onclick="HiToast({content: '左侧提示', site:['50%',,,10], duration: 1000})">左侧提示</h-button>
<h-button onclick="HiToast({content: '右侧提示', site:['50%',10,], duration: 1000})">右侧提示</h-button>
```
:::

### 修改延时
自定义时长 5s，默认时长为 3s。

::: demo
```html
<h-button onclick="HiToast({content: 'This a Toast', duration: 5000})">5秒后自动消失</h-button>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `content`| 提示内容| `string | TemplateRef`| - | -
| `duration`| 持续时间(毫秒)| `number` |-	| 3
| `site`| 显示位置信息设置 |  `{Array} `|-	| 
