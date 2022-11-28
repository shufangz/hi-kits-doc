---
title: 配置项
date: 2022/09/11
tags:
 - 配置
 - 引用指导
---

### Angular中按需引用配置文件
```ts
/**
 * HI_KITS 公共组件定义
 * @class HIKITSCOMMONMODULES
 * @description
 * 将hi-kits 组件引入在项目中作为公共组件导入导出
 */
 import { NgModule } from "@angular/core";
 /*----------------- hikits库 ---------------------*/
 import { HI_CONFIG } from 'hi-kits/_shared/config/config';
 import { HiBoard } from "hi-kits";
 import { HiButton } from "hi-kits";
 import { HiGoods } from "hi-kits";
 import { HiDrawlottery } from 'hi-kits';
 import { HiIcon } from "hi-kits";
 // ...
 HI_CONFIG.case.install([
  HiBoard,
  HiButton,
  HiGoods,
  HiDrawlottery,
  HiIcon,
  // ...
 ])

 @NgModule({})
 export class HIKITSCOMMONMODULES {}
```

### React中按需引用Hi-kits

1.在项目中引入hi-kits
```ts
 import { HI_CONFIG } from 'hi-kits';
 import { HiBoard } from "hi-kits";
 import { HiButton } from "hi-kits";

```
2.页面初始化时加载组件
```ts
HI_CONFIG.case.install([HiBoard, HiButton])
```

### Vue中按需引用Hi-kits
在Vue项目中的main.ts引入并注册，同React 中的使用方法相似
```ts
import { HI_CONFIG } from 'hi-kits';
import { HiBoard } from "hi-kits";
import { HiButton } from "hi-kits";

HI_CONFIG.case.install([HiBoard, HiButton])

```