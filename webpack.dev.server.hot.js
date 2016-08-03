var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot.config');

/* 可以通过配置代理访问后端接口，这样非常方便前后端在不同机器上开发
 * 代理中指定的域名不走本地host，而是直接指定ip，所以本机host中配置的本地域名与接口域名相同或不同都可以
 * 此代码自动读取UrlConfig中配置的接口，除手动排除的以外全部走代理，记得每次修改UrlConfig中的接口需要重新启动此服务器
 * 如果不想使用此自动化代码，也可以写成如下形式，支持通配符，具体可查看webpack dev server相关文档
 * proxy: {
 *   '/login/do': {
 *     target: 'http://119.29.188.156/',
 *     secure: false,
 *     headers: {host: 'xyz.qq.com'}
 *   },
 *   '/vendor/profile/apply': {
 *     target: 'http://119.29.188.156/',
 *     secure: false,
 *     headers: {host: 'xyz.qq.com'}
 *   }
 * }
 */

// 打开注释开启自动接口代理模式
/*
var UrlConfig = require('./src/js/config/UrlConfig');
var getProxyOptions = function() {
  var options = {};
  for (var key in UrlConfig) {
    var url = UrlConfig[key];
    // url是本地文件的不走代理
    if (url && url.substring(0, 6) != '/mock/') {
      options[url] = {
        target: 'http://10.123.8.7',  //后端接口所在机器
        secure: false,
        headers: {Host: 'xyz.qq.com'}  //接口域名
      }
    }
  }
  return options;
};
*/

new WebpackDevServer(webpack(config), {
  contentBase: path.resolve(__dirname, './src'),
  hot: true,
  historyApiFallback: true,
  //proxy: getProxyOptions(), //打开注释开启自动接口代理模式
}).listen(80, 'localhost', function (err) { //注意在更改此端口号时，webpack.hot.config.js里也要一起更改
  if (err) {
    console.log(err);
  }
  
  console.log('Listening at localhost:80');
});
