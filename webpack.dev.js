const merge = require('webpack-merge');  // 引入webpack-merge功能模块
const common = require('./webpack.base.js'); // 引入webpack.common.js

module.exports = merge(common, {   // 将webpack.common.js合并到当前文件
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
  }
})