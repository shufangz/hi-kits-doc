# 配置项


### Angular中按需引用配置文件
```shell
/**
 * HI_KITS 公共组件定义
 * @class HIKITSCOMMONMODULES
 * @description
 * 将hi-kits 组件引入在项目中作为公共组件导入导出
 */
 import { NgModule } from "@angular/core";
 /*----------------- hikits库 ---------------------*/  
 import { HI_CONFIG } from 'hi-kits/_shared/config/config';

 // --------------------- 基础组件 ---------------------
 import { HiBoard } from "hi-kits/board";
 import { HiButton } from "hi-kits/button";
 import { HiGoods } from "hi-kits/goods";
 import { HiDrawlottery } from 'hi-kits/drawlottery';
 import { HiIcon } from "hi-kits/icon";
 // ...
 const hiConfig = new HI_CONFIG();
 hiConfig.install([
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