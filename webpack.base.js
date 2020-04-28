const path = require('path') // 路径处理模块
const webpack = require('webpack') // 这个插件不需要安装，是基于webpack的，需要引入webpack模块
const HtmlWebpackPlugin = require('html-webpack-plugin') // 引入HtmlWebpackPlugin插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 引入CleanWebpackPlugin插件
// const ExtractTextPlugin = require('extract-text-webpack-plugin') //引入分离插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const devMode = process.env.NODE_ENV !== 'production'


module.exports = {
  entry: {
    index: path.join(__dirname, '/src/main.js'),
  },
  output: {
    path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
    filename: 'js/[name].[hash].js', // 每次保存 hash 都变化
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    },
    // 在import这些拓展名的文件时，可以省略拓展名
    extensions: ['*', '.js', '.json', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,  // 限制只有小于1kb的图片才转为base64，例子图片为1.47kb,所以不会被转化
              outputPath: 'images'  // 设置打包后图片存放的文件夹名称
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/index.html') // new一个这个插件的实例，并传入相关的参数
    }),
    new CleanWebpackPlugin(), // 所要清理的文件夹名称
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    // new ExtractTextPlugin('css/index.css'), // 将css分离到/dist文件夹下的css文件夹中的index.css
    new VueLoaderPlugin()
  ]
}