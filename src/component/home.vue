<template>
<div class="page-index" id="home" data-log="首页">
  <div class="index-header">
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
  </div>
  <div class="page-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item class="banner1"><img src="../assets/banner1.jpg"></mt-swipe-item>
      <mt-swipe-item class="banner2"><img src="../assets/banner2.jpg"></mt-swipe-item>
      <mt-swipe-item class="banner3"><img src="../assets/banner3.jpg"></mt-swipe-item>
      <mt-swipe-item class="banner4"><img src="../assets/banner4.jpg"></mt-swipe-item>
    </mt-swipe>
  </div>
  <div class="wxad">
    <img src="../assets/over-power.jpg" />
  </div>
  <div class="section">
    <div class="itmes-list flex3">
        <div class="itmes">
          <img src="../assets/1.jpg" alt="">
        </div>
        <div class="itmes">
          <img src="../assets/2.jpg" alt="">
        </div>
        <div class="itmes">
          <img src="../assets/3.jpg" alt="">
        </div>
        <div class="itmes">
          <img src="../assets/4.jpg" alt="">
        </div>
        <div class="itmes">
          <img src="../assets/5.jpg" alt="">
        </div>
        <div class="itmes">
          <img src="../assets/6.jpg" alt="">
        </div>
        <div class="itmes">
          <img src="../assets/7.jpg" alt="">
        </div>
        <div class="itmes">
          <img src="../assets/8.jpg" alt="">
        </div>
        <div class="itmes">
          <img src="../assets/9.jpg" alt="">
        </div>
    </div>
  </div>
  <pagelist></pagelist>
</div>
</template>
<script>
import pagelist from './homelist.vue'
import { InfiniteScroll,Indicator } from 'mint-ui'
import Vue from 'vue'
Vue.use(InfiniteScroll)
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  created(){
    this.get();
  },
  methods:{
    get(){
      setTimeout(function(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
      },300)
      setTimeout(function(){
        Indicator.close();
      },2000)
    }
  },
  components: {
    pagelist
  }
}
</script>
<style type="text/css" media="screen">
@import '../css/home.css'
</style>