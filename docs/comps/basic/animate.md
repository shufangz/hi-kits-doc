# Animate 动效

### 何时使用
<pre class="language-ts">
import { HiAnimate } from 'hi-kits/animate'
</pre>

### 使用方法
直接通过设置`name`来使用即可

<div id="AnimateBox" style="background-color: #1890ff; width:100px; height:100px"></div>

::: demo
```html
<h-space>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'zoomOutLeft')">bounce</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'flash')">flash</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'headShake')">headShake</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'heartBeat')">heartBeat</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'jello')">jello</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'pulse')">pulse</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rubberBand')">rubberBand</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'shake')">shake</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'shakeX')">shakeX</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'shakeY')">shakeY</h-button>
</h-space>
<h-space style="margin-top: 20px" >
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'swing')">swing</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'tada')">tada</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'wobble')">wobble</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'backInDown')">backInDown</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'backInLeft')">backInLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'backInRight')">backInRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'backInUp')">backInUp</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'backOutDown')">backOutDown</h-button>
</h-space>
<h-space style="margin-top: 20px" >
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'backOutLeft')">backOutLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'backOutRight')">backOutRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'bounceIn')">bounceIn</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'bounceInDown')">bounceInDown</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'bounceInLeft')">bounceInLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'bounceInRight')">bounceInRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'bounceInUp')">bounceInUp</h-button>
</h-space>
<h-space style="margin-top: 20px" >
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'bounceOut')">bounceOut
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'bounceOutDown')">
    bounceOutDown</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'bounceOutLeft')">
    bounceOutLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'bounceOutRight')">
    bounceOutRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeIn')">fadeIn
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInBottomLeft')">
    fadeInBottomLeft</h-button>
</h-space>
<h-space style="margin-top: 20px" >
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInBottomRight')">
    fadeInBottomRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInDown')">
    fadeInDown</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInDownBig')">
    fadeInDownBig</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInLeft')">
    fadeInLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInLeftBig')">
    fadeInLeftBig</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInRight')">
    fadeInRight</h-button>
</h-space>
<h-space style="margin-top: 20px" >
     <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInRightBig')">
    fadeInRightBig</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInTopLeft')">
    fadeInTopLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInTopRight')">
    fadeInTopRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInUp')">fadeInUp
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeInUpBig')">
    fadeInUpBig</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOut')">fadeOut
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutBottomLeft')">
    fadeOutBottomLeft</h-button>
</h-space>
<h-space style="margin-top: 20px" >
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutBottomRight')">
    fadeOutBottomRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutDown')">
    fadeOutDown</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutDownBig')">
    fadeOutDownBig</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutLeft')">
    fadeOutLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutLeftBig')">
    fadeOutLeftBig</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutRight')">
    fadeOutRight</h-button>
</h-space>
<h-space style="margin-top: 20px" >
     <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutRightBig')">
    fadeOutRightBig</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutTopLeft')">
    fadeOutTopLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutTopRight')">
    fadeOutTopRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutUp')">fadeOutUp
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'fadeOutUpBig')">
    fadeOutUpBig</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'flip')">flip
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'flipInX')">flipInX
    </h-button>
</h-space>
<h-space style="margin-top: 20px" >
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'flipInY')">flipInY
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'flipOutX')">flipOutX
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'flipOutY')">flipOutY
    </h-button>
     <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'lightSpeedInLeft')">
    lightSpeedInLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'lightSpeedInRight')">
    lightSpeedInRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'lightSpeedOutLeft')">
    lightSpeedOutLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'lightSpeedOutRight')">
    lightSpeedOutRight</h-button>
    </h-space>
<h-space style="margin-top: 20px" >
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rotateIn')">rotateIn
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rotateInDownLeft')">
    rotateInDownLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rotateInDownRight')">
    rotateInDownRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rotateInUpLeft')">
    rotateInUpLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rotateInUpRight')">
    rotateInUpRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rotateOut')">rotateOut
    </h-button>
    </h-space>
<h-space style="margin-top: 20px" >
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rotateOutDownLeft')">
    rotateOutDownLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rotateOutDownLeft')">
    rotateOutDownLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rotateOutDownRight')">
    rotateOutDownRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rotateOutUpLeft')">
    rotateOutUpLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rotateOutUpRight')">
    rotateOutUpRight</h-button>
</h-space>
<h-space style="margin-top: 20px" >
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'slideInDown')">
    slideInDown</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'slideInLeft')">
    slideInLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'slideInRight')">
    slideInRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'slideInUp')">slideInUp
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'slideOutDown')">
    slideOutDown</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'slideOutLeft')">
    slideOutLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'slideOutRight')">
    slideOutRight</h-button>
</h-space>
<h-space style="margin-top: 20px" >
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'slideOutUp')">
    slideOutUp</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'hinge')">hinge
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'jackInTheBox')">
    jackInTheBox</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rollIn')">rollIn
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'rollOut')">rollOut
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'zoomIn')">zoomIn
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'zoomInDown')">
    zoomInDown</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'zoomInLeft')">
    zoomInLeft</h-button>
</h-space>
<h-space style="margin-top: 20px" >
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'zoomInRight')">
    zoomInRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'zoomInUp')">zoomInUp
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'zoomOut')">zoomOut
    </h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'zoomOutDown')">
    zoomOutDown</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'zoomOutLeft')">
    zoomOutLeft</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'zoomOutRight')">
    zoomOutRight</h-button>
    <h-button type="primary" onclick="HiAnimate.run(document.getElementById('AnimateBox'), 'zoomOutUp')">zoomOutUp
    </h-button>
</h-space>

```
:::

### 参数说明

|参数|说明|类型|可选值|默认值
|:--|:--|:--|:-----|:---
| `title`| 通知标题 |  `string` | - | -
