# Grid 栅格

通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局
使用单一分栏创建基础的栅格布局。

::: demo通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。
```html
<div class="grid">
  <h-row>
  <h-col span="24"><div></div></h-col>
</h-row>
<h-row>
  <h-col span="12"><div></div></h-col>
  <h-col span="12"><div></div></h-col>
</h-row>
<h-row>
  <h-col span="8"><div></div></h-col>
  <h-col span="8"><div></div></h-col>
  <h-col span="8"><div></div></h-col>
</h-row>
<h-row>
  <h-col span="6"><div></div></h-col>
  <h-col span="6"><div></div></h-col>
  <h-col span="6"><div></div></h-col>
  <h-col span="6"><div></div></h-col>
</h-row>
<h-row>
  <h-col span="4"><div></div></h-col>
  <h-col span="4"><div></div></h-col>
  <h-col span="4"><div></div></h-col>
  <h-col span="4"><div></div></h-col>
  <h-col span="4"><div></div></h-col>
  <h-col span="4"><div></div></h-col>
</h-row>
</div>
<style>
  .grid h-row {
    margin-bottom: 20px;
  }
  .grid h-col {
    padding: 20px;
    color: #fff;
    background: #42b983c5;
  }
  .grid h-col:nth-child(odd) {
    background: #3ba1f49a;
  }
  
</style>

```
:::

### 分栏间隔
分栏之间存在间隔。

::: demoRow 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。
```html
<div class="grid">
<h-row gutter="20">
  <h-col span="12"><div></div></h-col>
  <h-col span="12"><div></div></h-col>
</h-row>
<h-row gutter="30">
  <h-col span="8"><div></div></h-col>
  <h-col span="8"><div></div></h-col>
  <h-col span="8"><div></div></h-col>
</h-row>
<h-row gutter="10">
  <h-col span="6"><div></div></h-col>
  <h-col span="6"><div></div></h-col>
  <h-col span="6"><div></div></h-col>
  <h-col span="6"><div></div></h-col>
</h-row>
<h-row gutter="5">
  <h-col span="4"><div></div></h-col>
  <h-col span="4"><div></div></h-col>
  <h-col span="4"><div></div></h-col>
  <h-col span="4"><div></div></h-col>
  <h-col span="4"><div></div></h-col>
  <h-col span="4"><div></div></h-col>
</h-row>
</div>
<style>
  .grid h-row {
    margin-bottom: 20px;
  }
  .grid h-col {
    padding: 20px;
    color: #fff;
    background: #42b983c5;
  }
  .grid h-col:nth-child(odd) {
    background: #3ba1f49a;
  }
  
</style>

```
:::

### 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

::: demo
```html
<div class="grid">
<h-row gutter="20">
  <h-col span="16"><div></div></h-col>
  <h-col span="8"><div></div></h-col>
</h-row>
<h-row gutter="20">
  <h-col span="4"><div></div></h-col>
  <h-col span="6"><div></div></h-col>
  <h-col span="14"><div></div></h-col>
</h-row>
<h-row gutter="20">
  <h-col span="4"><div></div></h-col>
  <h-col span="16"><div></div></h-col>
  <h-col span="2"><div></div></h-col>
  <h-col span="2"><div></div></h-col>
</h-row>
<h-row gutter="20">
  <h-col span="12"><div></div></h-col>
  <h-col span="12"><div></div></h-col>
</h-row>
</div>
<style>
  .grid h-row {
    margin-bottom: 20px;
  }
  .grid h-col {
    padding: 20px;
    color: #fff;
    background: #42b983c5;
  }
  .grid h-col:nth-child(odd) {
    background: #3ba1f49a;
  }
  
</style>

```
:::

### 可配置分栏间隔
通过滑块动态配置分栏间隔。

::: demo
```html
<h-slider type="number" oninput="this.nextElementSibling.gutter=this.value" min="0" max="24" suffix="px" defaultvalue="10" showtips></h-slider>
<h-row gutter="10" class="grid">
    <h-col span="6">col-6</h-col>
    <h-col span="6">col-6</h-col>
    <h-col span="6">col-6</h-col>
    <h-col span="6">col-6</h-col>
</h-row>
<style>
  .grid h-row {
    margin-bottom: 20px;
  }
  .grid h-col {
    padding: 20px;
    color: #fff;
    background: #42b983c5;
  }
  .grid h-col:nth-child(odd) {
    background: #3ba1f49a;
  }
</style>

```
:::

### Row 参数说明

|__参数__|__说明__|__类型__|__可选值__|__默认值__
|:--|:--|:--|:-----|:---
| gutter | 栅格间隔	 | number | - | 0

### Col 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| span | 栅格占据的列数		 | number | - | 1


