<template>
  <div class="list">
    <div class="listItem" v-for="(item, index) in list" :key="index">
      {{ item.name }}
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '../components/footerBar'
export default {
  components: { footerBar },
  data() {
    return {
      list: [
        { name: '区分环境变量及合并配置' },
        { name: '本地服务器 webpack-dev-server' },
        { name: 'HtmlWebpackPlugin 生成html' },
        { name: 'CleanWebpackPlugin 清理文件夹' },
        { name: 'loader 及 babel 配置' },
        { name: 'HotModuleReplacementPlugin 热更新' },
        { name: 'postcss-loader 增加css前缀' },
        { name: 'vue SPA 引入及解析' },
        { name: 'vue-router 安装与使用' },
        { name: 'mini-css-extract-plugin 分离css' },
        { name: 'purifycss-webpack purify-css 消除冗余css' },
        { name: 'optimize-css-assets-webpack-plugin 压缩css' },
        { name: 'terser-webpack-plugin 压缩js' },
        { name: 'splitChunks 提取公共代码' },
        { name: 'image-webpack-loader 图片压缩' },
        { name: 'gZip 加速优化' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
@import '../assest/css/home.less';
</style>
