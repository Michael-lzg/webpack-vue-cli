const merge = require('webpack-merge');  // 引入webpack-merge功能模块
const common = require('./webpack.base.js'); // 引入webpack.common.js
const path = require('path') // 路径处理模块
const webpack = require('webpack') 

module.exports = merge(common, {   // 将webpack.common.js合并到当前文件
  output: {
    path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
    filename: 'js/[name].[hash].js', // 每次保存 hash 都变化
  },
  devServer: {
    contentBase: './dist', // 本地服务器所加载文件的目录
    port: '8899', // 设置端口号为8088
    inline: true, // 文件修改后实时刷新
    historyApiFallback: true, //不跳转
    hot: true // 热更新
  },
  // devtool: 'source-map',
  devtool: 'inline-source-map',
  mode: 'development', // 设置mode
  module: {
    rules: [
      {
        test: /\.css$/,   // 正则匹配以.css结尾的文件
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
  ]
})