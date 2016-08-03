var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/js/app.js'),
  output: {
    path: path.resolve(__dirname, 'web'),
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin("style.css", {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      hash: true
    }),
    new TransferWebpackPlugin([{
      from: 'src/mock',
      to: 'mock'
    }]), //复制文件夹到输出目录
    new TransferWebpackPlugin([{
      from: 'src/vendor',
      to: 'vendor'
    }]), //复制文件夹到输出目录
    new TransferWebpackPlugin([{
      from: 'src/img',
      to: 'img'
    }]), //复制文件夹到输出目录
    new TransferWebpackPlugin([{
      from: 'src/font',
      to: 'font'
    }]) //复制文件夹到输出目录
  ],
  module: {
    loaders: [
      {
        test: /\.(less|css)$/,
        loader: ExtractTextPlugin.extract("style", "css!less")
      }, {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000&name=img/[name].[ext]'
      }, {
        test: /\.(woff|eot|ttf)$/i,
        loader: 'url?limit=10000&name=font/[name].[ext]'
      }
    ]
  }
};