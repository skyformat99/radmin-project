var React = require('react');

var UiBase = require('../pages/ui/Base.react');
var UiBase2 = require('../pages/ui/Base2.react');
var UiBase3 = require('../pages/ui/Base3.react');
var UiAdvance = require('../pages/ui/Advance.react');
var UiPopup = require('../pages/ui/Popup.react');
var ExampleForm = require('../pages/example/Form.react');
var ExampleTable = require('../pages/example/Table.react');
var ExampleChart = require('../pages/example/Chart.react');
var ExampleParam = require('../pages/example/Param.react');
var Guide = require('../pages/guide/Main.react');

var App = require('../layout/default/App.react');
var NotLogin = require('../layout/default/NotLogin.react');
var Error404 = require('../layout/default/Error404.react');

/**路由地址和对应的页面
 *
 * 当多个path指向同一个page的相同实例时，希望在这几种path切换时页面不会重新加载，尤其适用于同一页面不同路由参数的情况，写法如下：
 * {path: '/', page: UiBase},
 * {path: '/ui/base', page: UiBase},
 * {path: '/ui/base/:pid', page: UiBase},

 * 当多个path指向同一个page的不同实例时，虽然两个页面内容相同但逻辑上认为是不同页面，切换时内容会被重置，写法如下：
 * {path: '/', page: UiBase},
 * {path: '/ui/base', page: UiBase, clone: true},
 */
module.exports = [
  {path: '/', page: UiBase},
  {path: '/ui/base', page: UiBase},
  {path: '/ui/base/2', page: UiBase2},
  {path: '/ui/base/3', page: UiBase3},
  {path: '/ui/advance', page: UiAdvance},
  {path: '/ui/popup', page: UiPopup},
  {path: '/example/form', page: ExampleForm},
  {path: '/example/table', page: ExampleTable},
  {path: '/example/chart', page: ExampleChart},
  {path: '/example/param', page: ExampleParam},
  {path: '/example/param/:p1', page: ExampleParam},
  {path: '/example/param/:p1/:p2', page: ExampleParam},
  {path: '/guide/main', page: Guide},
  {path: '/notlogin', page: NotLogin, layout: null},
  {path: '*', page: null, layout: Error404},
];

module.exports.defaultLayout = App;
