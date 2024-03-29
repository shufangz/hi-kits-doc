module.exports = {
  head: [
    ['link',
      {
        rel: 'icon',
        href: 'image/logo(1).svg'
      }
    ]
  ],
  title: 'Hikits',
  base: '/hidoc/',
  port: '8080',
  themeConfig: { // 新增代码
    smoothScroll: true,
    // repo: 'https://github.com/shufangz/hi-kits-doc.git',
    // docsRepo: 'https://github.com/shufangz/hi-kits-doc.git',
    logo: 'image/logo.svg',
    nav: [ // 配置顶部导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '基础组件',
        link: '/comps/'
      },
      {
        text: '业务组件',
        link: '/business/'
      }
    ],
    sidebar: { // 配置侧边栏部分
      '/comps/': [{
          title: '开发指南',
          collapsable: false,
          children: [{
              title: '安装',
              path: '/comps/'
            },
            {
              title: '快速上手',
              path: '/comps/guide/guide'
            },
            {
              title: 'Config 配置',
              path: '/comps/guide/config'
            },
            {
              title: '自定义主题',
              path: '/comps/guide/theme'
            },
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [{
              title: '通用',
              collapsable: false,
            },
            {
              title: 'Icon 图标',
              path: '/comps/basic/icon'
            },
            {
              title: 'Button 按钮',
              path: '/comps/basic/button'
            },
            {
              title: 'Box 盒子模型',
              path: '/comps/basic/box'
            },
            {
              title: 'Animate 动效',
              path: '/comps/basic/animate'
            },
            {
              title: '布局',
              collapsable: false,
            },
            {
              title: 'Layout 布局',
              path: '/comps/layout/layout'
            },
            {
              title: 'Grid 栅格',
              path: '/comps/layout/grid'
            },

            {
              title: 'Divider 分割线',
              path: '/comps/layout/divider'
            },
            {
              title: 'Space 间距',
              path: '/comps/layout/space'
            },
            {
              title: 'Banner 横幅',
              path: '/comps/layout/banner.md'
            },
            {
              title: 'Board 卡牌布局',
              path: '/comps/layout/board.md'
            },
            {
              title: '导航',
              collapsable: false,
            }, {
              title: 'Breadcrumb 面包屑',
              path: '/comps/navigation/breadcrumb'
            }, {
              title: 'Navdot 导航点',
              path: '/comps/navigation/navdot'
            }, {
              title: 'Navbar 导航栏',
              path: '/comps/navigation/navbar'
            }, {
              title: 'Steps 步骤条',
              path: '/comps/navigation/steps'
            }, {
              title: 'Pagination 分页',
              path: '/comps/navigation/pagination'
            }, {
              title: 'Toolbar 工具栏',
              path: '/comps/navigation/toolbar'
            },
            {
              title: 'Jumper 跳转',
              path: '/comps/navigation/jumper'
            },
            {
              title: 'Title 标题',
              path: '/comps/navigation/title'
            },
            {
              title: 'Float 浮动',
              path: '/comps/navigation/float'
            },
            {
              title: 'Menu 导航菜单',
              path: '/comps/navigation/menu'
            },
            {
              title: 'Affix 固钉',
              path: '/comps/navigation/affix'
            },
            {
              title: '表单录入',
              collapsable: false,
            },
            {
              title: 'Input 输入框',
              path: '/comps/form/input'
            },
            {
              title: 'InputNumber 数字输入框',
              path: '/comps/form/inputNumber'
            },
            {
              title: 'Search 搜索框',
              path: '/comps/form/search'
            },
            {
              title: 'Radio 单选框',
              path: '/comps/form/radio'
            },
            {
              title: 'Checkbox 多选框',
              path: '/comps/form/checkbox'
            },
            {
              title: 'Rate 评分',
              path: '/comps/form/rate'
            },
            {
              title: 'ColorPicker 颜色选择器',
              path: '/comps/form/color'
            },
            {
              title: 'Switch 开关',
              path: '/comps/form/switch'
            },
            {
              title: 'EditWord 文字编辑',
              path: '/comps/form/editWord'
            },
            {
              title: 'Captcha 验证码',
              path: '/comps/form/captcha'
            },
            {
              title: 'DatePicker 日期选择框',
              path: '/comps/form/datepicker'
            },
            {
              title: 'TimePicker 时间选择框',
              path: '/comps/form/timepicker'
            },
            {
              title: 'Slider 滑动输入条',
              path: '/comps/form/slider'
            },
            {
              title: 'Upload 上传',
              path: '/comps/form/upload'
            },
            {
              title: 'NumberKeyboard 数字键盘',
              path: '/comps/form/numberKeyBoard'
            },
            {
              title: '数据展示',
              collapsable: false,
            },
            {
              title: 'Empty 空状态',
              path: '/comps/data/empty'
            },
            {
              title: 'Avatar 头像',
              path: '/comps/data/avatar'
            },
            {
              title: 'Image 图片',
              path: '/comps/data/image'
            },
            {
              title: 'Tag 标签',
              path: '/comps/data/tag'
            },
            {
              title: 'Card 卡片',
              path: '/comps/data/card'
            },
            {
              title: 'Badge 徽标数',
              path: '/comps/data/badge'
            },
            {
              title: 'List 列表',
              path: '/comps/data/list'
            },
            {
              title: 'Comment 评论',
              path: '/comps/data/comment'
            },
            {
              title: 'Ellipsis 文本省略',
              path: '/comps/data/ellipsis'
            },
            {
              title: 'Tips 文字提示',
              path: '/comps/data/tips'
            },
            {
              title: 'Segmented 分段控制器',
              path: '/comps/data/segmented'
            },
            {
              title: 'Tabs 标签页',
              path: '/comps/data/tab'
            },
            {
              title: 'Statistic 统计',
              path: '/comps/data/statistic'
            },
            {
              title: 'Timeline 时间轴',
              path: '/comps/data/timeline'
            },
            {
              title: 'Watermark 水印',
              path: '/comps/data/watermark'
            },
            {
              title: 'Accordion 折叠面板',
              path: '/comps/data/accordion'
            },
            {
              title: 'Carousel 走马灯',
              path: '/comps/data/carousel'
            },
            {
              title: 'Popup 弹出窗',
              path: '/comps/data/popup'
            },
            {
              title: 'Transfer 穿梭框',
              path: '/comps/data/transfer'
            },
            {
              title: 'Flip 翻转',
              path: '/comps/data/flip'
            },
            {
              title: '反馈',
              collapsable: false,
            },
            {
              title: 'Alert 警告提示',
              path: '/comps/feedback/alert'
            },
            {
              title: 'Message 消息提示',
              path: '/comps/feedback/message'
            },
            {
              title: 'Loading 加载',
              path: '/comps/feedback/loading'
            },
            {
              title: 'Toast 轻提示',
              path: '/comps/feedback/toast'
            },
            {
              title: 'Modal 对话框',
              path: '/comps/feedback/modal'
            },
            {
              title: 'Popover 气泡卡片',
              path: '/comps/feedback/popover'
            },
            {
              title: 'Notify 通知',
              path: '/comps/feedback/notify'
            },
            {
              title: 'Notice 通告栏',
              path: '/comps/feedback/notice'
            },
            {
              title: 'Sidebar 侧边栏',
              path: '/comps/feedback/sidebar'
            },
            {
              title: 'Actions 动作面板',
              path: '/comps/form/actions'
            },
            {
              title: 'Result 结果',
              path: '/comps/feedback/result'
            },
            {
              title: '手势',
              collapsable: false,
            },

            {
              title: 'PullToRefresh 拉动刷新',
              path: '/comps/gesture/pullToRefresh'
            },
            {
              title: 'Swipeout 滑动操作',
              path: '/comps/gesture/swipeout'
            },
            {
              title: 'Others',
              collapsable: false,
            },
            {
              title: 'BackTop 回到顶部',
              path: '/comps/other/backTop'
            },
          ]
        },
      ],
      '/business/': [{
        title: '模块简介',
        collapsable: false,
        children: [{
          title: '介绍',
          path: '/business/'
        }]
      }, {
        title: '组件',
        collapsable: false,
        children: [{
            title: 'Vajra 金刚区',
            path: '/business/vajra'
          },
          {
            title: 'PenSigner 签名板',
            path: '/business/penSigner'
          },
          {
            title: 'Drawlottery 转盘抽奖',
            path: '/business/drawlottery'
          },
          {
            title: 'Countdown 倒计时',
            path: '/business/countdown'
          },
          {
            title: 'Task 任务组件',
            path: '/business/task'
          },
        ]
      }]
    },
    lastUpdated: true
  },
  plugins: [
    'demo-container',
    ['@vuepress-reco/vuepress-plugin-back-to-top'],
    ['@vuepress/active-header-links'],
    ['@vuepress/last-updated', {
      dateOptions: {
        hour12: false
      }
    }],
    // ["cursor-effects"],
    ['vuepress-plugin-global-toc'],
  ], // 配置插件
  markdown: {}
}
