module.exports = {
  head: [
    ['link',
      {
        rel: 'icon',
        href: 'https://ys-zjrs.haier.net/image/logo(1).svg'
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
    logo: 'https://ys-zjrs.haier.net/image/logo.svg',
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
            // {
            //   title: '国际化',
            //   path: '/comps/guide/international'
            // },
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
              title: 'Vajra 金刚区',
              path: '/comps/layout/vajra'
            },
            {
              title: 'Banner 横幅',
              path: '/comps/layout/banner.md'
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
              title: 'Sidebar 侧边栏',
              path: '/comps/feedback/sidebar'
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
    ["cursor-effects"],
    ['vuepress-plugin-global-toc'],
  ], // 配置插件
  markdown: {}
}