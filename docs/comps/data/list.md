---
title: List 列表
date: 2022/07/11
tags:
 - 列表
 - 数据渲染
---
::: tip
通用列表。
:::
### 何时使用
最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。
```ts
import { HiList } from 'hi-kits/list'
```


### 简单列表

列表拥有大、中、小三种尺寸。
通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。

::: demo
```html
 <h-row gutter="10">
    <h-col span="24" >
        <h3>Small Size</h3>
        <h-list size="small">
            <h-list-item>
                content
            </h-list-item>
            <h-list-item>
                content
                <h-list-item-action>
                    <h-button type="flat">button</h-button>
                </h-list-item-action>
            </h-list-item>
            <h-list-item>
                content
                <h-list-item-action>
                    <h-tag noBorder text="333"></h-tag>
                </h-list-item-action>
            </h-list-item>
            <h-list-item>
                content
                <h-list-item-action>
                    <h-tag noBorder  text="333"></h-tag>
                </h-list-item-action>
            </h-list-item>
        </h-list>
    </h-col>
    <h-col span="24">
        <h3>默认 Size</h3>
        <h-list>
            <h-list-item>
                content
            </h-list-item>
            <h-list-item>
                content
                <h-list-item-action>
                    <h-button type="flat">button</h-button>
                </h-list-item-action>
            </h-list-item>
            <h-list-item>
                content
                <h-list-item-action>
                    <h-tag noBorder text="333"></h-tag>
                </h-list-item-action>
            </h-list-item>
            <h-list-item>
                content
                <h-list-item-action>
                    <h-tag noBorder  text="333"></h-tag>
                </h-list-item-action>
            </h-list-item>
        </h-list>
    </h-col>
    <h-col span="24">
        <h3>Large Size</h3>
        <h-list  size="large">
            <h-list-item>
                content
                <h-list-item-action>
                    <h-switch></h-switch>
                </h-list-item-action>
            </h-list-item>
            <h-list-item>
                content
                <h-list-item-action>
                    <h-switch></h-switch>
                </h-list-item-action>
            </h-list-item>
            <h-list-item>
                content
                <h-list-item-action>
                    <h-switch></h-switch>
                </h-list-item-action>
            </h-list-item>
            <h-list-item>
                content
                <h-list-item-action>
                    <h-switch></h-switch>
                </h-list-item-action>
            </h-list-item>
        </h-list>
    </h-col>
    <h-col span="24">
        <h3>自定义size</h3>
        <h-list size="50">
            <h-list-item>
                content
            </h-list-item>
            <h-list-item>
                content
            </h-list-item>
            <h-list-item>
                content
                <h-list-item-action>
                    <h-tag noBorder style="color: #FFF; background-color: #31d100fd; " text="333"></h-tag>
                </h-list-item-action>
            </h-list-item>
            <h-list-item>
                content
                <h-list-item-action>
                    <h-tag noBorder style="color: #FFF; background-color: #01bffd; " text="333"></h-tag>
                </h-list-item-action>
            </h-list-item>
        </h-list>
    </h-col>
</h-row>

```
:::

### 基础列表
::: demo
```html
<h-list>
    <h-list-item>
        <h-list-item-media>
            <h-avatar circle color="#42b983">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
            </h-avatar>
        </h-list-item-media>

        <div>
            <div>披头士乐队</div>
            <p style="color: #aaa;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</p>
        </div>
    </h-list-item>
    <h-list-item>
        <h-list-item-media>
            <h-avatar circle color="#42b983">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
            </h-avatar>
        </h-list-item-media>

        <div>
            <div>披头士乐队</div>
            <p style="color: #aaa;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.  </p>
        </div>
    </h-list-item>
    <h-list-item>
        <h-list-item-media>
            <h-avatar circle color="#42b983">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
            </h-avatar>
        </h-list-item-media>

        <div>
            <div>披头士乐队</div>
            <p style="color: #aaa;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.  </p>
        </div>
    </h-list-item>
</h-list>
<h-divider dir="left">带操作选项的列表</h-divider>
<h-list>
    <h-list-item>
        <h-list-item-media>
            <h-avatar  size="64" color="#42b983">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
            </h-avatar>
        </h-list-item-media>

        <div>
            <div>披头士乐队</div>
            <p style="color: #aaa;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, </p>
        </div>

        <h-list-item-action>
            <a href="javascript:;">edit</a>
            <h-divider type="vertical"></h-divider>
            <a href="javascript:;">more</a>
        </h-list-item-action>
        
    </h-list-item>
    <h-list-item>
        <h-list-item-media>
            <h-avatar size="64" color="#42b983">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
            </h-avatar>
        </h-list-item-media>

        <div>
            <div>披头士乐队</div>
            <p style="color: #aaa;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.  </p>
        </div>

        <h-list-item-action>
            <a href="javascript:;">edit</a>
            <h-divider type="vertical"></h-divider>
            <a href="javascript:;">more</a>
        </h-list-item-action>
    </h-list-item>
    <h-list-item>
        <h-list-item-media>
            <h-avatar size="64" color="#42b983">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
            </h-avatar>
        </h-list-item-media>

        <div>
            <div>披头士乐队</div>
            <p style="color: #aaa;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.  </p>
        </div>

        <h-list-item-action>
            <a href="javascript:;">edit</a>
            <h-divider type="vertical"></h-divider>
            <a href="javascript:;">more</a>
        </h-list-item-action>
    </h-list-item>
</h-list>
```
:::

### 竖排列表样式
::: demo
```html
<h-list>
    <h-list-item>
        <h-list-item-inner>
            <h-list-item-media>
                <h-avatar circle color="#42b983">
                    <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                </h-avatar>
            </h-list-item-media>

            <div>
                <div>披头士乐队</div>
                <p style="color: #aaa;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.</p>
                <p> Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</p>
                <h-list-item-action style="color: #aaa; ">
                    <h-icon name="person" color="#42b983"></h-icon> 222
                    <h-divider type="vertical"></h-divider>
                    <h-icon name="heart" color="#F44336"></h-icon> 333
                </h-list-item-action>
            </div>
        </h-list-item-inner>
        <h-list-item-extra>
            <img width="180" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        </h-list-item-extra>
    </h-list-item>
    <h-list-item>
        <h-list-item-inner>
            <h-list-item-media>
                <h-avatar circle color="#42b983">
                    <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                </h-avatar>
            </h-list-item-media>

            <div>
                <div>披头士乐队</div>
                <p style="color: #aaa;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt.</p>
                <p> Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</p>
                <h-list-item-action style="color: #aaa; ">
                    <h-icon name="person" color="#42b983"></h-icon> 222
                    <h-divider type="vertical"></h-divider>
                    <h-icon name="heart" color="#F44336"></h-icon> 333
                </h-list-item-action>
            </div>
        </h-list-item-inner>
        <h-list-item-extra>
            <img width="180" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        </h-list-item-extra>
    </h-list-item>
    
</h-list>

```
:::
### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `size`| 列表大小 |  `string` | `small | large` | -
