<template>
  <div class="overview">
    <h-card>
      <h-card-header class="header1">通用(4)</h-card-header>
      <h-card-content>
        <h-row gutter="20">
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/basic/button.html')">Button 按钮</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/basic/icon.html')">Icon 图标</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/basic/animate.html')">Animate 动画</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/basic/box.html')">Box 盒子模型</h-card-header>
            </h-card>
          </h-col>
        </h-row>
      </h-card-content>
    </h-card>
    <h-card>
      <h-card-header class="header1">布局(6)</h-card-header>
      <h-card-content>
        <h-row gutter="20">
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/layout/layout.html')">Layout 布局</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/layout/grid.html')">Grid 栅格</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/layout/space.html')">Space 间距</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/layout/divider.html')">Divider 分割线</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/layout/banner.html')">Banner 横幅</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/layout/board.html')">Board 卡牌布局</h-card-header>
             </h-card>
          </h-col>
        </h-row>
      </h-card-content>
    </h-card>
    <h-card>
      <h-card-header class="header1">导航(12)</h-card-header>
      <h-card-content>
        <h-row gutter="20">
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/breadcrumb.html')">Breadcrumb 面包屑</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/navdot.html')">Navdot 导航点</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/navbar.html')">Navbar 导航栏</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/steps.html')">Steps 步骤条</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/pagination.html')">Pagination 分页</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/toolbar.html')">Toolbar 工具栏</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/jumper.html')">Jumper 跳转</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/title.html')">Title 标题</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/float.html')">Float 浮动</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/menu.html')">Menu 导航菜单</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/affix.html')">Affix 固钉</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/navigation/tabbar.html')">Tabbar 标签栏</h-card-header>
            </h-card>
          </h-col>
        </h-row>
      </h-card-content>
    </h-card>
    <h-card>
      <h-card-header class="header1">表单录入(17)</h-card-header>
      <h-card-content>
        <h-row gutter="20">
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/input.html')">Input 输入框</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/inputNumber.html')">InputNumber 数字输入框</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/search.html')">Search 搜索框</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/select.html')">Select 选择器</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/radio.html')">Radio 单选框</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/checkbox.html')">Checkbox 多选框</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/Rate.html')">Rate 评分</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/colorPicker.html')">ColorPicker 颜色选择器</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/switch.html')">Switch 开关</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/editWord.html')">EditWord 文字编辑</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/captcha.html')">Captcha 验证码</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/datePicker.html')">DatePicker 日期选择框</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/timePicker.html')">TimePicker 时间选择器</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/slider.html')">Slider 滑动输入条</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/upload.html')">Upload 上传</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/numberKeyboard.html')">NumberKeyboard 数字键盘</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/form/textarea.html')">TextArea 文本域</h-card-header>
            </h-card>
          </h-col>
        </h-row>
      </h-card-content>
    </h-card>
    <h-card>
      <h-card-header class="header1">数据展示(20)</h-card-header>
      <h-card-content>
        <h-row gutter="20">
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Empty 空状态</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Avatar 头像</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Image 图片</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Tag 标签</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Card 卡片</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Badge 徽标数</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">List 列表</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Comment 评论</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Ellipsis 文本省略</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">EditWord 文字编辑</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Segmented 分段控制器</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Tabs 标签页</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Statistic 统计</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Timeline 时间轴</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Watermark 水印</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Accordion 折叠面板</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/button.html')">Carousel 走马灯</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/popup.html')">Popup 弹出窗</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/flip.html')">Flip 翻转</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/data/swipe.html')">Swipe 轮播</h-card-header>
            </h-card>
          </h-col>
        </h-row>
      </h-card-content>
    </h-card>
    <h-card>
      <h-card-header class="header1">反馈(13)</h-card-header>
      <h-card-content>
        <h-row gutter="20">
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/alert.html')">Alert 警告提示</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/message.html')">Message 消息提示</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/loading.html')">Loading 加载</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/toast.html')">Toast 轻提示</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/modal.html')">Modal 对话框</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/popover.html')">Popover 气泡卡片</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/notify.html')">Notify 通知</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/notice.html')">Notice 通告栏</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/sidebar.html')">Sidebar 侧边栏</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/actions.html')">Actions 动作面板</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/result.html')">Result 结果</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/skeleton.html')">Skeleton 骨架屏</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/feedback/progress.html')">Progress 进度条</h-card-header>
            </h-card>
          </h-col>
        </h-row>
      </h-card-content>
    </h-card>
    <h-card>
      <h-card-header class="header1">手势(2)</h-card-header>
      <h-card-content>
        <h-row gutter="20">
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/gesture/pullToRefresh.html')">PullToRefresh 拉动刷新</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/gesture/swipeout.html')">Swipeout 滑动操作</h-card-header>
            </h-card>
          </h-col>
        </h-row>
      </h-card-content>
    </h-card>
    <h-card>
      <h-card-header class="header1">业务组件(6)</h-card-header>
      <h-card-content>
        <h-row gutter="20">
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/business/vajra.html')">Vajra District 金刚区</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/business/penSigner.html')">PenSigner 签名板</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/business/drawlottery.html')">Drawlottery 转盘抽奖</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/business/countdown.html')">Countdown 倒计时</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/business/task.html')">Task 任务组件</h-card-header>
            </h-card>
          </h-col>
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/business/barrage.html')">Barrage 弹幕</h-card-header>
            </h-card>
          </h-col>
        </h-row>
      </h-card-content>
    </h-card>
    <h-card>
      <h-card-header class="header1">其他(1)</h-card-header>
      <h-card-content>
        <h-row gutter="20">
          <h-col span="6">
            <h-card>
              <h-card-header class="itemTitle" @click="goToPage('/comps/other/backTop.html')">BackTop 回到顶部</h-card-header>
            </h-card>
          </h-col>
        </h-row>
      </h-card-content>
    </h-card>
  </div>
</template>


<script>
import svgImg from "./image/Space.svg";
export default {
  data() {
    return {
      imageUrl: svgImg,
    };
  },
  mounted() {},
  methods: {
    goToPage(ev) {
      window.location.href=window.location.origin + '/Hi-Kits-Doc' + ev;
    },
  },
};
</script>

<style>
.cardCtn {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.layout {
  width: 100px;
  height: 80px;
  background: lightblue;
}
.side {
  width: 100px;
  background: rgb(138, 209, 233);
}
.main {
  margin: 0 10px;
  background: rgb(56, 100, 114);
}
.box {
  width: 50px;
  height: 50px;
  color: rgba(255, 255, 255, 0);
  background: rgb(10, 180, 236);
}
.header,
.footer {
  color: rgba(255, 255, 255, 0);
  background: rgb(159, 225, 195);
}

.grid h-col {
  padding: 20px;
  color: #fff;
  background: #42b983c5;
}
.grid h-col:nth-child(odd) {
  background: #3ba1f49a;
}
.header1 {
  background: var(--theme-color);
  color: #fff;
}
.itemTitle {
  cursor: pointer;
  color: var(--theme-color);
}
</style>