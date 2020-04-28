const path = require('path') // 路径处理模块
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const PurifyCssWebpack = require('purifycss-webpack') // 引入PurifyCssWebpack插件
const glob = require('glob') // 引入glob模块,用于扫描全部html文件中所引用的css

module.exports = merge(common, { 
  mode: 'production',// 设置mode
  plugins: [
    new PurifyCssWebpack({
      paths: glob.sync(path.join(__dirname, '*.html')) // 同步扫描所有html文件中所引用的css
    })
  ]
})