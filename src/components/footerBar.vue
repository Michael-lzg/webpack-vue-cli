<template>
  <footer>
    <div v-for="(item, index) in items" :key="index" @click="toUrl(item)" class="item">
      <div class="name" :class="{ c1: $route.path == item.url }">{{ item.name }}</div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: '项目介绍',
          url: '/'
        },
        {
          name: '我的主页',
          url: '/admin'
        },
      ],
    }
  },
  methods: {
    toUrl(item) {
      this.$router.replace({
        path: item.url,
      })
    },
  },
}
</script>

<style scoped lang="less">
footer {
  width: 100%;
  height: 55px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  .item {
    float: left;
    text-align: center;
    font-size: 14px;
    height: 55px;
    width: 50%;
    .name {
      text-align: center;
      color: #888888;
      line-height: 55px;
    }
  }
}
</style>
