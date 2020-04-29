# 基于 webpack 搭建一个 vue 项目框架

在这里，我们要做的事情包括

- 搭建 webpack 项目框架
- 搭建 vue 模块化开发环境
- webpack 优化打包

你需要理解的基本知识

- html，css，javascript
- ES6 语法
- webpack 核心属性
- vue，vue-router
- 前端模块化

废话不多说，老司机带你马上上路。

## 搭建 webpack 项目框架

### 构建项目结构

1. 创建 webpack-vue-cli 文件夹，npm-init-y 初始化项目

2. 安装 webpack 相关依赖

```
npm i webpack webpack-cli webpack-dev-server webpack-merge --save-dev
```

如果 webpack 和 webpack-cli 没有全局安装的话，要先全局安装

3. 建立项目文件夹

```js
├── src   // webpack配置文件
    |——main.js  // 入口文件
├── static   // 项目打包路径
├── index.html   // 模板html
├── webpack.base.js   // 打包基本配置
├── webpack.dev.js   // 本地环境配置
├── webpack.prod.js   // 生产环境配置
```

index.html 和 main.js 的代码不多说，直接进入 webpack 配置环节。

### webpack 基本配置

为了更好的优化打包，我们将 webpack 的配置分开本地环境和生产环境。

- webpack.base.js 公共配置文件
- webpack.dev.js 开发环境的配置文件
- webpack.prod.js 生产环境的配置文件

在 webpack.dev.js 和 webpack.prod.js，我们可以利用 webpack-merge 进行配置的合并。

然后，我们在 package.json 定义不同环境的打包命令

```js
"scripts": {
  "dev": "webpack-dev-server  --config webpack.dev.js --mode development",
  "build": "webpack --config webpack.prod.js"
}
```

#### 公共配置

我们先来看一下 webpack.base.js 的公共配置，定义好入口文件和出口文件

```js
module.exports = {
  entry: {
    index: path.join(__dirname, '/src/main.js'),
  },
  output: {
    path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
    filename: 'js/[name].[hash].js', // 每次保存 hash 都变化
  },
}
```

#### webpack-dev-server

webpack 提供了一个可选的本地开发服务器，这个本地服务器基于 node.js 构建，所以在 webpack.dev.js 进行配置

```js
const merge = require('webpack-merge') // 引入webpack-merge功能模块
const common = require('./webpack.base.js') // 引入webpack.common.js

module.exports = merge(common, {
  // 将webpack.common.js合并到当前文件
  devServer: {
    contentBase: './dist', // 本地服务器所加载文件的目录
    port: '8899', // 设置端口号为8088
    inline: true, // 文件修改后实时刷新
    historyApiFallback: true, //不跳转
    hot: true, // 热更新
  },
  mode: 'development', // 设置mode
})
```

#### HtmlWebpackPlugin

HtmlWebpackPlugin 简化了 HTML 文件的创建，它可以根据 html 模板在打包后自动为你生产打包后的 html 文件。这对于在文件名中包含每次会随着编译而发生变化哈希的 webpack bundle 尤其有用。

这主要是生产环境打包用的，所以在 webpack.prod.js 配置

```js
module.exports = merge(common, {
  mode: 'production', // 设置mode
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/index.html'), // new一个这个插件的实例，并传入相关的参数
    }),
  ],
})
```

至此就搭建好一个乞丐版的 webpack 项目了。

### loader 配置

loader 可以让 webpack 能够去处理那些非 javaScript 文件（webpack 自身只理解 javaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。

对于 loader 的科普和配置，在这里不做一一说明，直接奉上代码，分别是处理样式，js 和文件的 loader。

```js
module: {
  rules: [
    {
      test: /\.css$/, // 正则匹配以.css结尾的文件
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src')],
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]'),
      },
    },
  ]
}
```

为了更方便的配置和优化 babel-loader，我们可以将其提取出来，在根目录下新建.babelrc 文件

```
{
  "presets": ["env"]
}
```

### 其他插件配置

#### CleanWebpackPlugin

在每次构建前清理/dist 文件夹，生产最新的打包文件，这时候就用到 CleanWebpackPlugin 插件了。

```js
module.exports = merge(common, {
  mode: 'production', // 设置mode
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/index.html'), // new一个这个插件的实例，并传入相关的参数
    }),
    new CleanWebpackPlugin(), // 所要清理的文件夹名称
  ],
})
```

#### 增加 css 前缀

平时我们写 css 时，一些属性需要手动加上前缀，比如-webkit-border-radius: 10px;，在 webpack 中我们可以让他自动加上

1. 安装 npm i postcss-loader autoprefixer -D
2. 在项目根目录下新建 postcss.config.js 文件

```js
module.exports = {
  plugins: [
    require('autoprefixer'), // 引用autoprefixer模块
  ],
}
```

3. 修改样式 loader

```js
rules: [
  {
    test: /\.css$/, // 正则匹配以.css结尾的文件
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  },
  {
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
  },
]
```
