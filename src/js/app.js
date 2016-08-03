var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Utils = require('radmin').Utils;

var routeConfig = require('./config/RouteConfig');
var filterConfig = require('./config/FilterConfig');
var LoginConfig = require('./config/LoginConfig');
var AjaxConfig = require('./config/AjaxConfig');

require('radmin/lib/index.css');
var style = require('../less/app.less');

// 使用Radmin工具将route配置和filter配置进行整合得到新的ReactRouter配置
var config = Utils.combineConfig(routeConfig, filterConfig);

// 将login配置和ajax配置信息传入Radmin，在初始化完成之后执行React的render
Utils.setLoginConfig(LoginConfig).setAjaxConfig(AjaxConfig).complete(function() {
    ReactDOM.render((<ReactRouter.Router routes={config} history={ReactRouter.hashHistory} />), document.getElementById('react'));
});
