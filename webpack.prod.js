const path = require('path') // 路径处理模块
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const PurifyCssWebpack = require('purifycss-webpack') // 引入PurifyCssWebpack插件
const glob = require('glob') // 引入glob模块,用于扫描全部html文件中所引用的css
const MiniCssExtractPlugin = require("mini-css-extract-plugin") //引入css分离插件

module.exports = merge(common, {
  mode: 'production',// 设置mode
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            },
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ]
      }
    ]
  },
  plugins: [
    new PurifyCssWebpack({
      paths: glob.sync(path.join(__dirname, '*.html')) // 同步扫描所有html文件中所引用的css
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: 'css/[id].[hash].css'
    }),
  ]
})