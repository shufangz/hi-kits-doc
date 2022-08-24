<template>
  <div id="animatebox">
    <div v-for="(itemlist, ind) in activeList" :key="ind">
      <div
        class="littlebox"
        v-for="(item, index) in itemlist.list"
        :key="index"
        :id="'box' + ind + index"
        @click="animate1('box' + ind + index, item)"
        :style="{ background: itemlist.bgcolor }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 图标name
      activeList: [
        {
          list: [
            "heartBeat",
            "hinge",
            "jackInTheBox",
            "flash",
            "jello",
            "pulse",
            "rubberBand",
            "swing",
            "tada",
            "wobble",
          ],
          bgcolor: "#81cba9",
        },
        {
          list: ["shake", "shakeX", "shakeY", "headShake"],
          bgcolor: "#81a1cb",
        },
        {
          list: ["backInDown", "backInLeft", "backInRight", "backInUp"],
          bgcolor: "#cbba81",
        },
        {
          list: ["backOutDown", "backOutLeft", "backOutRight", "backOutUp"],
          bgcolor: "#daa8be",
        },
        {
          list: [
            "bounce",
            "bounceIn",
            "bounceInDown",
            "bounceInLeft",
            "bounceInRight",
            "bounceInUp",
          ],
          bgcolor: "#7bcce4",
        },
        {
          list: [
            "bounceOut",
            "bounceOutDown",
            "bounceOutUp",
            "bounceOutLeft",
            "bounceOutRight",
          ],
          bgcolor: "#bca0cd",
        },
        {
          list: [
            "fadeIn",
            "fadeInBottomLeft",
            "fadeInBottomRight",
            "fadeInDown",
            "fadeInDownBig",
            "fadeInLeft",
            "fadeInLeftBig",
            "fadeInRight",
            "fadeInRightBig",
            "fadeInTopLeft",
            "fadeInTopRight",
            "fadeInUp",
            "fadeInUpBig",
          ],
          bgcolor: "#a0c7f0",
        },
        {
          list: [
            "fadeOut",
            "fadeOutBottomLeft",
            "fadeOutBottomRight",
            "fadeOutDown",
            "fadeOutDownBig",
            "fadeOutLeft",
            "fadeOutLeftBig",
            "fadeOutRight",
            "fadeOutRightBig",
            "fadeOutTopLeft",
            "fadeOutTopRight",
            "fadeOutUp",
            "fadeOutUpBig",
          ],
          bgcolor: "#7bcce4",
        },
        {
          list: ["flip", "flipInX", "flipInY", "flipOutX", "flipOutY"],
          bgcolor: "#f5b9d4",
        },
        {
          list: [
            "lightSpeedInLeft",
            "lightSpeedInRight",
            "lightSpeedOutLeft",
            "lightSpeedOutRight",
          ],
          bgcolor: "#81b9cb",
        },
        {
          list: [
            "rotateIn",
            "rotateInDownLeft",
            "rotateInUpLeft",
            "rotateInUpRight",
            "rotateInDownRight",
          ],
          bgcolor: "#8ece93",
        },
        {
          list: [
            "rotateOut",
            "rotateOutDownLeft",
            "rotateOutDownRight",
            "rotateOutUpLeft",
            "rotateOutUpRight",
          ],
          bgcolor: "#ccd677",
        },
        {
          list: ["slideInDown", "slideInLeft", "slideInRight", "slideInUp"],
          bgcolor: "#f1ab99",
        },
        {
          list: ["slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp"],
          bgcolor: "#e7a773",
        },
        {
          list: ["rollIn", "rollOut"],
          bgcolor: "#a1e4d9",
        },
        {
          list: [
            "zoomIn",
            "zoomInDown",
            "zoomInLeft",
            "zoomInRight",
            "zoomInUp",
          ],
          bgcolor: "#9f8dca",
        },
        {
          list: [
            "zoomOut",
            "zoomOutDown",
            "zoomOutLeft",
            "zoomOutRight",
            "zoomOutUp",
          ],
          bgcolor: "#db8888",
        },
      ],
    };
  },
  methods: {
    animate1(box, name) {
      HiAnimate.run(document.getElementById(box), name);
      var text = document.getElementById(box).innerText;
      var ID = "TEXTAREA_COPY";
      if (!document.getElementById(ID)) {
        var TEXTAREA = document.createElement("input");
        TEXTAREA.id = ID;
        TEXTAREA.value = text;
        TEXTAREA.style.width = "4px";
        TEXTAREA.style.height = "4px";
        TEXTAREA.style.border = "0";
        TEXTAREA.style.opacity = "0";
        TEXTAREA.style.position = "fixed";
        TEXTAREA.style.top = "0";
        TEXTAREA.style.left = "0";
        document.getElementsByTagName("body")[0].appendChild(TEXTAREA);
      } else {
        var TEXTAREA = document.getElementById("TEXTAREA_COPY");
        TEXTAREA.value = text;
      }
      TEXTAREA.select();
      document.execCommand("Copy");
      HiMessage.success({ content: name + " 复制成功！", duration: 3000 });
    },
  },
};
</script>
<style>
#animatebox {
  display: table;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.littlebox {
  width: 120px;
  height: 120px;
  background: #81cba9;
  margin-bottom: 15px;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 120px;
  color: #fff;
  font-size: 12px;
}
</style>