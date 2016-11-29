<template>
<div class="person-centered">
    <mt-header title="个人中心">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <div class="page-info">
        <div class="item-head tc">
           <div class="userdata">
               <h3 class="login">立即登录</h3>
           </div>
           <div class="islogin">
               <p>+</p>
           </div>
        </div>
        <div class="item-info">
            <ul class="flex info-list tc">
                <li>
                    <a href="javascript:void(0);">
                        <div class="info-icon icon-orders"></div>
                        <p>全部订单</p>
                        <div></div>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <div class="info-icon icon-pay"></div>
                        <p>代付款</p>
                        <div></div>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <div class="info-icon icon-sign"></div>
                        <p>代签收</p>
                        <div></div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <ol class="page-ol">
        <li class="bdl">
            <strong class="benefit"></strong>
            <span>我的优惠</span>
        </li>
        <li>
            <strong class="fma"></strong>
            <span>F码通道</span>
        </li>
    </ol>
    <ol class="page-ol">
        <li>
            <strong class="service"></strong>
            <span>我的服务</span>
        </li>
    </ol>
    <ol class="page-ol">
        <li>
            <strong class="installed"></strong>
            <span>我的设置</span>
        </li>
    </ol>
    <div class="empty"></div>
    <div class="empty"></div>
</div>
</template>
<script>
import Vue from 'vue'
import { Header,Indicator } from 'mint-ui'
Vue.component(Header.name, Header)
export default{
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
  }
}
</script>
<style>
.person-centered{
    background-color:#f5f5f5;
    height:100%;
}
.page-info{
    background-color:#fff;
    margin-bottom: 1.0rem;
}
.mint-header .mint-button{
    padding-right:12px!important;
}
.item-head{
   background-color:#41b883;
   padding:1rem 0 3.4rem;
   margin-bottom: 2.4rem;
   height:3rem;
   color:#fff;
}
.login{
    font-size:.9rem;
    padding-bottom: .4rem;
}
.islogin{
   margin:0 auto;
   width:4rem;
   height:4rem;
   line-height:3.8rem;
   border: 2px solid;
   font-size:2.2rem;
   border-radius:50%;
   text-align:center;
   background: #FFD24D;
   border-color: #FFD24D;
}
.info-list{
    padding:0.8rem;
}
.info-icon{
    width:2rem;
    height:2rem;
    background-image:url('../assets/spr.png');
    background-repeat:no-repeat;
    background-size:2.0rem;
    margin:0 auto 0.5rem;
}
.icon-orders{
    background-position: 0 0;
}
.icon-pay{
    background-position: 0 -4rem;
}
.icon-sign{
    background-position: 0 -2rem;
}
.info-list li div:last-child{
    width:1.8rem;
    height:1px;
    background-color:#f40;
    margin:0.6rem auto 0;
}
.info-list li:nth-child(2) {
    border-left:1px solid;
    border-right:1px solid;
    border-color: #ececec;
}
.info-list li:nth-child(1) div:last-child{
    background-color:#E33F7B;
}
.info-list li:nth-child(2) div:last-child{
    background-color:#8BC34A;
}
.info-list li:nth-child(3) div:last-child{
    background-color:#FA0;
}
.page-ol{
    margin-bottom: 1.0rem;
}
.page-ol li{
    background-color:#fff;
    line-height:2.4rem;
}
.page-ol .bdl{
    border-bottom:1px solid #ECECEC;
}
.page-ol strong {
    width:1.6rem;
    height:1.5rem;
    display: inline-block;
    vertical-align:middle;
    background-image:url('../assets/spr.png');
    background-repeat:no-repeat;
    background-size:2rem;
    margin-left: 1rem;
}
.page-ol .benefit{
    background-position:0 -6.0rem;
}
.page-ol .fma{
    background-position:0 -7.4rem;
}
.page-ol .service{
    background-position: 0 -8.7rem;
}
.page-ol .installed{
    background-position: 0 -10.2rem;
}
</style>