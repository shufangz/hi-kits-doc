# Ellipsis 文本省略

展示空间不足时，隐去部分内容并用“...”替代
### 何时使用
 - 文本内容长度或高度超过列宽或行高。
 - 图表中空间有限，文本内容无法完全显示。
 - 自适应调整时宽度变小。
<pre class="language-ts">
import { HiEllipsis } from 'hi-kits/ellipsis'
</pre>

### 基本用法

::: demo
```html
 <h-divider text="尾部省略"></h-divider>
<h-ellipsis
content="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！"
></h-ellipsis>
<h-divider text="头部省略"></h-divider>
<h-ellipsis
dir="start"
content="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！"
></h-ellipsis>
<h-divider text="英文字符"></h-divider>
 <h-ellipsis dir="start"
content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, lacus."
></h-ellipsis>

```
:::


### 展开收起

::: demo
```html
 <h-divider text="展开收起"></h-divider>
<h-ellipsis dir="start" expand="展开" collapse="收起"
content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, lacus."
></h-ellipsis>
 <h-divider text="仅展开"></h-divider>
<h-ellipsis
dir="start" expand="展开"
content="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！"
></h-ellipsis>
<br>

<h-ellipsis dir="middle" expand="展开"
content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinarlacus."
></h-ellipsis>
<br>

<h-ellipsis
dir="end" expand="展开"
content="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！"
></h-ellipsis>
```
:::

### 多行

::: demo
```html
<h-ellipsis
    dir="end" line="2"
    content="雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖！雪晴天地一冰壶，竟往西湖探老逋，骑驴踏雪溪桥路。笑王维作画图，拣梅花多处提壶。对酒看花笑，无钱当剑沽，醉倒在西湖"
    >
</h-ellipsis>
<br>

<h-ellipsis dir="middle" expand="展开" line="3"
content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinarlacus."
></h-ellipsis>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `dir`| 省略位置 |  `string` | `'start' | 'middle' | 'end'`| `end`
| `line`| 显示行数 |  `number` | - | 1
| `content`| 内容 |  `string` | - | -
| `expand`| 展开操作的文案 |  `string` | - | -
| `collapse`| 收起操作的文案 |  `string` | - | -
