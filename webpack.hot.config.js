var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:80',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, './src/js/app.js')
  ],
  output: {
    path: path.resolve(__dirname, 'hot'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new TransferWebpackPlugin([{
      from: 'src/mock',
      to: 'mock'
    }]),
    new TransferWebpackPlugin([{
      from: 'src/vendor',
      to: 'vendor'
    }]),
    new TransferWebpackPlugin([{
      from: 'src/img',
      to: 'img'
    }]),
    new TransferWebpackPlugin([{
      from: 'src/font',
      to: 'font'
    }])
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.(less|css)$/,
        loader: 'style!css!less'
      }, {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000'
      }, {
        test: /\.(woff|eot|ttf)$/i,
        loader: 'url?limit=10000'
      }
    ]
  }
};