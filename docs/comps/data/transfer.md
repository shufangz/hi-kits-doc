# Transfer 穿梭框

双栏穿梭选择框。

### 何时使用
用直观的方式在两栏中移动元素，完成选择行为。

选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。 其中，左边一栏为 source，右边一栏为 target，API 的设计也反映了这两个概念。
<pre class="language-ts">
import { HiTransfer } from 'hi-kits/transfer'
</pre>

### 基本用法

最基本的用法，展示了 `sourceData` 左侧源数据，`targetData`右侧目标数据 以及回调函数 `onSelectChange`, `onTransChange`的用法。

::: demo
```html
<h-transfer
     titles="['Source', 'Target']"
     sourceData="[{key: 3,title: '喜羊羊',disabled: false},{key: 4,title: '懒羊羊',disabled: false},{key: 1,title: '沸羊羊',disabled: false},{key: 2,title: '名字很长的羊羊羊羊羊羊羊羊羊羊羊羊',disabled: false}]"
    targetData="[{key: 6,title: '灰太狼',disabled: false},{key: 5,title: '红太狼',disabled: false}]"
    labelKey="title"
    valueKey="key"
    Operations="['向右', '向左']"
    onSelectChange="console.log('%c选取穿梭项', 'font-size: 35px',$event)"
    onTransChange="console.log('%c点击穿梭按钮', 'font-size: 35px',$event)"
    leftDefaultSelectedKeys="[3,4]"
    rightDefaultSelectedKeys="[6]"
    >
</h-transfer>
```
:::


### 自定义展示项

::: demo
```html
<h-transfer 
    titles="['左边', '右边']"
    sourceData="[{key: 3,title: '喜羊羊',disabled: true},{key: 4,title: '懒羊羊',disabled: false},{key: 1,title: '沸羊羊',disabled: false},{key: 2,title: '名字很长的羊羊羊羊羊羊羊羊羊羊羊羊',disabled: false}]"
    targetData="[{key: 6,title: '灰太狼',disabled: true},{key: 5,title: '红太狼',disabled: false}]" 
    labelKey="title"
    valueKey="key" 
    Operations="['向右', '向左']" 
    onSelectChange="console.log('%c选取穿梭项', 'font-size: 35px',$event)"
    onTransChange="console.log('%c点击穿梭按钮', 'font-size: 35px',$event)" 
    leftDefaultSelectedKeys="[3,4]" 
    rightDefaultSelectedKeys="[6]"
    ItemsUnit="项目" 
    ItemUnit="项" 
    renderItem="renderItem">
        <template #renderItem label="key">
            <h-icon name="person"></h-icon>
            $key$
        </template>
    </h-transfer>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `titles`| 标题集合，顺序从左至右	 |  `string[]		` | - | `['', '']`
| `sourceData`| 穿梭框左侧数据源 |  `TransferItem[]	` | - | `[]`
| `targetData`| 穿梭框右侧数据源 |  `TransferItem[]	` | - | `[]`
| `labelKey`| 指定展示的字段名称 |  `string` | - | -
| `valueKey`| 指定作为值交互的字段名称 |  `string` | - | -
| `Operations`| 操作文案集合，顺序从下至上	 |  `string[]` | - | `['', '']`
| `leftDefaultSelectedKeys`| 左侧设置被选中的 `key` 集合	 |  `string` | - | -
| `rightDefaultSelectedKeys`| 右侧设置被选中的 `key` 集合 |  `string` | - | -
| `ItemsUnit`| 复数单位		 |  `string` | - | -
| `ItemUnit`| 单数单位	 |  `string` | - | -
| `renderItem`| 每行数据渲染模板，见示例	 |  `TemplateRef<void>` | - | -
| `onSelectChange`| 穿梭框勾选数据回调 |  `string` | - | -
| `onTransChange`| 通知标题 |  `string` | - | -
