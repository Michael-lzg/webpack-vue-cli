<template>
  <div class="mainPage">
    <div class="topBar">
      <img src="../assest/image/lzg.jpg" alt="" width="50" height="50" />
      <div class="info">
        <div class="name">lzg | 广州</div>
        <div class="tel">web前端开发</div>
      </div>
    </div>
    <div class="tab clearfix">
      <div class="item fl">
        <div class="top c1">30篇</div>
        <div class="bot">原创文章</div>
      </div>
      <div class="item fl">
        <div class="top cr">3000+</div>
        <div class="bot">粉丝数</div>
      </div>
      <div class="item fl bn">
        <div class="top c3">4000+</div>
        <div class="bot">点赞数</div>
      </div>
    </div>
    <div class="list">
      <div class="item b-border" v-for="(item, index) in list" :key="index" @click="toUrl(item)">
        <img :src="item.icon" alt="" width="20" />
        <span>{{ item.name }}</span>
      </div>
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
        {
          name: 'github',
          url: 'https://github.com/Michael-lzg',
          icon: 'https://github.com/fluidicon.png',
        },
        {
          name: '掘金',
          url: 'https://juejin.im/user/5b52fd38f265da0f4c6fbd72/posts',
          icon: 'https://b-gold-cdn.xitu.io/favicons/v2/apple-touch-icon.png',
        },
        {
          name: 'segmentfault.',
          url: 'https://segmentfault.com/u/michael_5c03399eed011',
          icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2973367951,1030851604&fm=26&gp=0.jpg',
        },
        {
          name: '我的公众号',
          url: '',
          icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3434089220,2852049479&fm=26&gp=0.jpg',
        },
      ],
    }
  },
  methods: {
    toUrl(item) {
      window.location.href = item.url
    },
  },
}
</script>

<style lang="less" scoped>
@import '../assest/css/admin.less';
</style>
