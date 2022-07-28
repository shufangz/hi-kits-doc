const {
  containerPlugin
} = require('@vuepress/plugin-container')

module.exports = {
  theme: '',
  title: '',
  base: '/',
  port: '8080',
  head: [
    ['link', {
      rel: 'icon',
      href: './images/logo.svg'
    }]
  ],
  themeConfig: { // 新增代码
    logo: 'https://ys-haier-uplusapp-static.oss-cn-beijing.aliyuncs.com/image/logo.svg',
    nav: [ // 配置顶部导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
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
              title: '国际化',
              path: '/comps/guide/international'
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
              title: 'Vajra 金刚区 ',
              path: '/comps/layout/vajra'
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
              title: 'Tips 文字提示',
              path: '/comps/data/tips'
            },
            {
              title: 'Segmented 分段控制器',
              path: '/comps/data/segmented'
            },
            {
              title: 'Tabs标签页',
              path: '/comps/data/tab'
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
              title: '导航',
              collapsable: false,
            },
            {
              title: 'Steps 步骤条',
              path: '/comps/navigation/steps'
            },
            {
              title: 'Navdot 导航点',
              path: '/comps/navigation/navdot'
            },
            {
              title: 'Pagination 分页',
              path: '/comps/navigation/pagination'
            },
            {
              title: 'Others',
              collapsable: false,
            },
          ]
        },

      ],
    },
    lastUpdated: true
  },
  head: [],
  plugins: [
    'demo-container',
    ['@vuepress-reco/vuepress-plugin-back-to-top'],
    ['@vuepress/active-header-links'],
    ['@vuepress/last-updated', {
      dateOptions:{
        hour12: false
      }
    }],
    ["cursor-effects"],
  ], // 配置插件
  markdown: {}
}