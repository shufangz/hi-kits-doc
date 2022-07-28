# Checkbox 多选框
一组备选项中进行多选

### 何时使用
- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

### 基本用法
简单的checkbox

::: demo
```html
<h-checkbox>Checkbox</h-checkbox>

```
:::

### 不可用
checkbox不可用

::: demo
```html
<h-checkbox disabled>Checkbox</h-checkbox>

```
:::

### 受控的 Checkbox
联动的checkbox

::: demo
```html
<h-checkbox>checkbox</h-checkbox>
<h-switch onchange="this.previousElementSibling.disabled = this.checked"></h-switch>

```
:::

### 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

::: demo
```html
<h-checkbox-group name="books" defaultvalue="React,Angular">
  <h-checkbox>React</h-checkbox>
  <h-checkbox indeterminate>Vue</h-checkbox>
  <h-checkbox>Angular</h-checkbox>
  <h-checkbox>Flutter</h-checkbox>
  <h-checkbox>Swift</h-checkbox>
</h-checkbox-group>

```
:::