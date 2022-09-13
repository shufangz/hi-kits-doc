# Statistic 统计

展示统计数字。

### 何时使用
- 当需要突出某个或某组数字时。
- 当需要展示带描述的统计类数据时使用。
<pre class="language-ts">
import { HiStatistic } from 'hi-kits/statistic'
</pre>
### 基本用法

简单的展示。
x
::: demo
```html
<h-row gutter="10">
    <h-col span="4">
        <h-statistic title="Active Users">
            1,949,101
        </h-statistic>
    </h-col>
    <h-col span="4">
        <h-statistic title="Account Balance (CNY)
        ">
        2,019.11
        </h-statistic>
    </h-col>
     <h-col span="4">
        <h-statistic title="Unmerged">
            93/ 100
        </h-statistic>
    </h-col>
</h-row>

```
:::

### 自定义内容

::: demo
```html
<h-row>
    <h-col span="4">
        <h-statistic title="Feedback">
            <h-icon name="heart" size="24" color="#F44336"></h-icon>  1,128
        </h-statistic>
    </h-col>
    <h-col span="4">
        <h-statistic title="Day Level">
            <h-countdown style="font-size: 24px; color: rgba(8, 136, 6, 0.707);"></h-countdown>
        </h-statistic>
    </h-col>
</h-row>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `title`| 数据标题 |  `string` | - | -
