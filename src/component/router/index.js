/*
* @Author: zengxianlin
* @Date:   2016-11-28 09:24:11
* @Last Modified by:   877529974@qq.com
* @Last Modified time: 2016-11-28 09:40:32
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const route = new VueRouter({
  routes: [{
    path: '/home', component: require('../home')
  }, {
    path: '/classify', component: require('../classify')
  }, {
    path: '/my', component: require('../my')
  }, {
    path: '*', redirect: '/home'
  }],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
export default route