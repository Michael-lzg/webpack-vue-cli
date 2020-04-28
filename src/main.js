import Vue from 'vue';
import App from './App.vue'
import router from './router'
import './assest/css/common.less'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});