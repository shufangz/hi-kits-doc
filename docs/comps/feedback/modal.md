# Modal 对话框
模态对话框。

### 何时使用
- 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

- 另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 NzModalService.confirm() 等方法。

- 推荐使用加载Component的方式弹出Modal，这样弹出层的Component逻辑可以与外层Component完全隔离，并且做到可以随时复用，

- 在弹出层Component中可以通过依赖注入NzModalRef方式直接获取模态框的组件实例，用于控制在弹出层组件中控制模态框行为。
<pre class="language-ts">
import { HiModal } from 'hi-kits/modal'
</pre>
### 基本用法

第一个对话框
::: demo
```html
<h-button type="primary" onclick="HiModal.alert({
    content: 'This a alert Modal',
    ok: () => {
        HiMessage.info({content: '确认', duration: 2000})
    }
})">点击打开对话框</h-button>

```
:::

### 确认对话框

::: demo
```html
 <h-button type="primary" onclick="HiModal.confirm({
    content: 'This is a question',
    ok: () => {
        HiMessage.info({content: 'ok', duration: 2000})
    },
    cancel:function(){
        //按取消键的操作
        HiMessage.info({content: 'cancel', duration: 2000})
    }
})">Confirm</h-button>

```
:::

### 带输入框的对话框

::: demo
```html
<h-button type="primary" onclick="HiModal.prompt({content: 'This a info message'})">prompt</h-button>

```
:::

### 自定义弹窗内容

::: demo
```html
<h-button type="primary" onclick="document.getElementById('modal01').open = true;">open modal</h-button>
<h-modal id="modal01" heading="自定义弹窗内容" oktext="知道了" >
    <h-tabs>
        <h-tab label="tab1">tab111</h-tab>
        <h-tab label="tab2">tab222</h-tab>
        <h-tab label="tab3">tab333</h-tab>
    </h-tabs>
</h-modal>
```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `oktext`| 确定键文本| `string`| - | 确定
| `heading`| 标题| `string` |-	| -
| `canceltext`| 取消键文本| `string` |-	| 取消
| `type`| 对话框类型| `string` |`alert' | confirm | prompt`	| -
| `open`| 显示open。当 HiModal 内容比较复杂时，可以直接写在页面body上，通过 open 属性来控制显示 | `boolean` |-| `false`
| `ok`| 点击确定按钮时将执行的回调函数。该函数可返回promise，待执行完毕或promise结束时，将自动关闭对话框（返回false可阻止关闭）| `function`| - | -
| `cancel`| 点击遮罩层或右上角叉或取消按钮的回调。该函数可返回promise，待执行完毕或promise结束时，将自动关闭对话框（返回false可阻止关闭）	| `function`| - | -
