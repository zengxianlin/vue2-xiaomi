/*
* @Author: zengxianlin
* @Date:   2016-11-29 09:53:53
* @Last Modified by:   877529974@qq.com
* @Last Modified time: 2016-11-29 09:59:27
*/
import Vue from 'vue'
import App from './App.vue'
import router from './component/router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.debug = true

Vue.use(VueResource)
Vue.use(MintUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

