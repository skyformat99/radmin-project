//配置导航菜单
module.exports = [{
    text: 'UI组件',
    alias: 'ui',
    url: ['/ui/base', '/'],
    className: 'icon-ui',
    value: [
        {text: '基础组件', alias: 'ui-base', url: ['/ui/base', '/'], value: [{
          text: '基础组件一',
          alias: 'ui-base-1',
          url: ['/ui/base', '/'],
        }, {
          text: '基础组件二',
          alias: 'ui-base-2',
          url: '/ui/base/2',
        }, {
          text: '字体图标',
          alias: 'ui-base-3',
          url: '/ui/base/3',
        }
      ]},
      {text: '高级组件', alias: 'ui-advance', url: '/ui/advance'},
      {text: '弹窗组件', alias: 'ui-popup', url: '/ui/popup'}
    ],
    open: true
  }, {
    text: '页面示例',
    alias: 'example',
    url: '/example/form',
    className: 'icon-example',
    value: [
      {text: '表单示例', alias: 'example-form', url: '/example/form'},
      {text: '表格示例', alias: 'example-table', url: '/example/table'},
      {text: '图表示例', alias: 'example-chart', url: '/example/chart'},
      {text: '传参示例', alias: 'example-param', url: ['/example/param', '/example/param/:p1', '/example/param/:p1/:p2']}
    ],
    open: false
  }, {
    text: '开发文档',
    alias: 'guide',
    url: '/guide/main',
    className: 'icon-guide',
    open: false
  }
];
