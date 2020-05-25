import Vue from 'vue';
import App from './App.vue'
import router from './router'

import './assest/css/reset.css'
import './assest/css/common.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});