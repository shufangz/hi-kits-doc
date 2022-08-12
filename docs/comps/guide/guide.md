# 快速上手

本节将介绍如何在项目中使用 Hi-kits。Hi-kits是跨框架的组件，无论是React、Vue、Angular还是原生项目均可使用

### 引入 Hi-kits
 你可以引入整个 Hi-kits，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Hi-kits

#### 完整引入
```shell
import 'hi-kits'
```
#### 按需引入
我们可以只引入需要的组件，以达到减小项目体积的目的。如果你只希望引入部分组件，比如 Button 和 Select，那么只需要在项目中添加一下代码

```shell
    import { HiButton } from 'hi-kits/button'
    import { HiSelect } from 'hi-kits/select'
```
### 使用方法
Hikits 的组件引入后，只需在HTML代码中直接使用即可。如下所示

 <h-button type="primary">Primary Button</h-button>
 <h-button>Default Button</h-button>
```shell
    <h-button type="primary">Primary Button</h-button>
    <h-button>Default Button</h-button>
```
