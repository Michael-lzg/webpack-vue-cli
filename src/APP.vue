<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import '../src/assest/css/reset.css';
@import '../src/assest/css/common.less';

#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: "微软雅黑";
  font-size: 16px;
}
</style>
