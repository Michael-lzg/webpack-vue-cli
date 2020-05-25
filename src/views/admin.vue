<template>
  <div class="mainPage">
    <div class="topBar">
      <img src="../assest/image/lzg.jpg" alt="" width="50" height="50">
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
      <div class="item b-border" v-for="(item,index) in list" :key="index">
        <img :src="item.icon" alt="" width="20">
        <span>{{item.name}}</span>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '../components/footerBar'
export default {
  components: { footerBar },
  data () {
    return {
      list: [
        { name: 'github', url: 'orderList', icon: 'https://github.com/fluidicon.png' },
        { name: '掘金', url: '/echarts', icon: 'https://b-gold-cdn.xitu.io/favicons/v2/apple-touch-icon.png' },
        { name: 'segmentfault.', url: '/map', icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2973367951,1030851604&fm=26&gp=0.jpg' },
        { name: '我的公众号', url: 'qrCode', icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3434089220,2852049479&fm=26&gp=0.jpg' }
      ]
    }
  },
  methods: {
    toUrl (item) {
      this.$router.push({
        path: item.url
      })
    },
  }
}
</script>

<style lang="less" scoped>
.mainPage {
  height: 100%;
  background-color: #f6f6f6;
  padding-bottom: 55px;
}
.topBar {
  height: 100px;
  padding: 20px 15px;
  background-color: rgb(49, 144, 232);
  position: relative;
  color: white;
  padding-left: 85px;
  > img {
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 15px;
    top: 20px;
    width: 60px;
    height: 60px;
  }
  .info {
    .name {
      font-size: 18px;
      line-height: 30px;
    }
    .tel {
      font-size: 14px;
      margin-top: 5px;
    }
  }
}
.tab {
  margin-top: 10px;
  padding: 15px;
  background-color: #fff;
  .bn {
    border-right: none !important;
  }
  .item {
    width: 33.33%;
    text-align: center;
    border-right: 1px solid #e9e9e9;
    .top {
      font-size: 24px;
      font-weight: bold;
    }
  }
}
.list {
  margin-top: 10px;
  padding: 0 15px;
  background-color: #fff;
  .item {
    height: 45px;
    line-height: 45px;
    > img {
      margin-right: 10px;
    }
  }
}
.cr {
  color: red;
}
.c2 {
  color: #d3751d;
}
.c3 {
  color: green;
}
</style>

