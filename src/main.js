import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/rem'
import './assets/font/iconfont.css'
import './assets/less/reset.css'

import './plugins/vant'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
