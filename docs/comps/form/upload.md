# Upload 上传

文件选择上传和拖拽上传控件。

### 何时使用
上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。
<pre class="language-ts">
import { HiUpload } from 'hi-kits/upload'
</pre>

### 基本用法

经典款式，用户点击按钮弹出文件选择框。
::: demo
```html
<h-upload>
    <h-button>
        <h-icon name="upload" size="20"></h-icon> 点击上传</a>
    </h-button>
</h-upload>

```
:::

### 拖拽上传

把文件拖入指定区域，完成上传，同样支持点击上传。

::: demo
```html
<h-upload draggable>
    <h-button>
        <h-icon name="upload" size="20"></h-icon> 点击上传</a>
    </h-button>
</h-upload>

```
:::

### 不可用
::: demo
```html
<h-space dir="vertical">
    <h-upload draggable disabled>
        <h-button>
            <h-icon name="upload" size="20"></h-icon> 点击上传</a>
        </h-button>
    </h-upload>
    <h-upload disabled>
        <h-button>
            <h-icon name="upload" size="20"></h-icon> 点击上传</a>
        </h-button>
    </h-upload>
</h-space>
```
:::

### 图片上传

默认是单文件上传，如果设置了多文件，需要设置`max`默认为1
::: demo
```html
    <h-upload-image accept="image/*"></h-upload-image>
    <h-upload-image disabled></h-upload-image>
    <h-upload-image accept="image/*" max="5" multiple></h-upload-image>

```
:::

### h-upload 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `draggable`| 是否拖拽上传 |  `boolean` | - | `false`
| `disabled`| 是否可用 |  `boolean` | - | `false`


### h-upload-image 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `accept`| 可支持的图片格式 |  `string` | - | -
| `disabled`| 是否可用 |  `boolean` | - | `false`
| `multiple`| 是否上传多张 |  `boolean` | - | `false`
| `max`| 限制单次最多上传数量，`multiple` 打开时有效 |  `number` | - | 
