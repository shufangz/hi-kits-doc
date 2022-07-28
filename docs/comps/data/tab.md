# Tabs 标签页

选项卡切换组件。分隔内容上有关联但属于不同类别的数据集合。


### 何时使用
提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

卡片式的页签，提供可关闭的样式，常用于容器顶部。
标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
RadioButton 可作为更次级的页签来使用。

### 基本用法
默认选中第一项。

::: demo
```html
<h-tabs>
    <h-tab label="tab1">tab111</h-tab>
    <h-tab label="tab2">tab222</h-tab>
    <h-tab label="tab3">tab333</h-tab>
</h-tabs>

```
:::

### 禁用
禁用某一项。
::: demo
```html
 <h-tabs type="card">
    <h-tab label="tab1">tab111</h-tab>
    <h-tab label="tab2" disabled>tab222</h-tab>
    <h-tab label="tab3">tab333</h-tab>
</h-tabs>

```
:::

### 标识key、activekey
::: demo
```html
 <h-tabs id="Tabs" activekey="B">
    <h-tab label="tab1" key="A">tab111</h-tab>
    <h-tab label="tab2" key="B">tab222</h-tab>
    <h-tab label="tab3" key="C">tab333</h-tab>
</h-tabs>
<h-button type="primary" onclick="document.getElementById('Tabs').setAttribute('activekey', 'C')">跳转tab3</h-button>
                    
```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---