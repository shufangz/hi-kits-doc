# Accordion 折叠面板

可以折叠/展开的内容区域。

### 何时使用
- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。
<pre class="language-ts">
import { HiAccordion } from 'hi-kits/accordion'
</pre>

### 基本用法

可以同时展开多个面板，这个例子默认展开了第一个。

::: demo
```html
<h-accordion>
    <h-accordion-panel active>
        <span slot="description">This is panel header 1</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel>
        <span slot="description">This is panel header 2</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel>
        <span slot="description">This is panel header 3</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
</h-accordion>

```
:::

<!-- ### 手风琴

每次只打开一个tab.默认打开第一个。
::: demo
```html
<h-accordion isAccordion  onsubmit="handleAccordion()">
    <h-accordion-panel>
        <span slot="description">This is panel header 1</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel>
        <span slot="description">This is panel header 2</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel>
        <span slot="description">This is panel header 3</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
</h-accordion>

```
::: -->

### 幽灵折叠面板

背景透明且无边框

::: demo
```html
<h-accordion ghost>
    <h-accordion-panel >
        <span slot="description">This is panel header 1</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel>
        <span slot="description">This is panel header 2</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel>
        <span slot="description">This is panel header 3</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
</h-accordion>
```
:::

### disabled，无法展开
面板二disabled，无法展开

::: demo
```html
<h-accordion>
    <h-accordion-panel>
        <span slot="description">This is panel header 1</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel disabled>
        <span slot="description">disabled</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel>
        <span slot="description">This is panel header 3</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
</h-accordion>

```
:::

### 箭头图标居右

::: demo
```html
<h-accordion isAccordion  onsubmit="handleAccordion()">
    <h-accordion-panel>
        <span slot="description">This is panel header 1</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel>
        <span slot="description">This is panel header 2</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel>
        <span slot="description">This is panel header 3</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
</h-accordion>

```
:::

### 隐藏箭头

::: demo
```html
<h-accordion>
    <h-accordion-panel>
        <span slot="description">This is panel header 1</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel showArrow>
        <span slot="description">This is panel header 2</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
    <h-accordion-panel showArrow>
        <span slot="description">This is panel header 3</span>
        <div slot="attributes">
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </div>
    </h-accordion-panel>
</h-accordion>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `active`| 是否默认打开面板 |  `boolean` | - | `false`
| `right`| 箭头图标位置居右 |  `boolean` | - | `false`
| `showArrow`| 是否隐藏箭头 |  `boolean` | - | `false`
