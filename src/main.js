import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入全局变量
import globaData from './api/globalData'



Vue.prototype.globaData = globaData;
Vue.use(VueAxios,axios);
Vue.config.productionTip = false
Vue.use(iview)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
