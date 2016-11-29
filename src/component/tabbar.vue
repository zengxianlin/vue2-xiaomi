<template>
<div class="footer flex">
  <router-link to="/home">
    <img src="../assets/icon/home.png" alt="" />
    <p>首页</p>
  </router-link>
  <router-link to="/classify">
    <img src="../assets/icon/classify.png" alt="" />
    <p>分类</p>
  </router-link>
  <router-link to="/my">
    <img src="../assets/icon/my.png" alt="" />
    <p>我的</p>
  </router-link>
</div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui'
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
export default {
  data () {
    return {
      msg: '123'
    }
  },
  methods: {

  }
}
</script>