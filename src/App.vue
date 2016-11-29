<template>
  <div id="app" class="app">
    <transition name="in-out-translate-fade" mode="in-out">
      <router-view class="router"></router-view>
    </transition>
    <tabbar class="pf z10"></tabbar>
  </div>
</template>
<script>
import tabbar from './component/tabbar.vue'
import home from './component/home.vue'
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { tabbar, home }
}
</script>
<style type="text/css">
@import 'css/initialize.css';
body{
  padding-bottom:2.5rem;
}
.app > *{
  z-index:10;
}
/* 切换页面效果 */
.in-out-translate-demo-wrapper {
  position: relative;
}
.in-out-translate-demo-wrapper .router {
  position: absolute;
}
.in-out-translate-fade-enter-active, .in-out-translate-fade-leave-active {
  transition: all .3s;
}
.in-out-translate-fade-enter, .in-out-translate-fade-leave-active {
  opacity: 0;
}
.in-out-translate-fade-enter {
  transform: translateX(100%);
}
.in-out-translate-fade-leave-active {
  transform: translateX(-100%);
}
</style>

