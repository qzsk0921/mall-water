<template>
  <div>
    <header class="logo">咕噜</header>
    <svg class="cart_icon">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#backtop"></use>
                                </svg>
      <!-- <img src="../assets/4.png" class="logo"> -->
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img class="swipe" src="../assets/1.png">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="swipe" src="../assets/2.png">
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="swipe" src="../assets/3.png">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="main-water">
      <div class="category">
        <a href="#title-water">
          <img src="../assets/2.png">
        </a>
        <a href="#title-partner">
          <img src="../assets/3.png">
        </a>
      </div>
      <div id="title-water">优选水源</div>
      <div class="waters">
        <div v-for="water in waterdatas" :key="water.id" class="water">
          <!-- 实际情况id作为参数传送 -->
          <router-link :to="{path:water.path, query:{id:water.id}}">
            <img :src="water.img" style="width: 100%"><br>
            <b>{{water.name}}</b><br>
            <i>{{water.des}}</i><br>
            <span>&yen;{{water.pri}}</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="main-partner">
      <div id="title-partner">健康伴侣</div>
      <div class="partners">
        <div v-for="partner in partnerdatas" :key="partner.id" class="partner">
          <img :src="partner.img" style="width: 100%"><br>
          <b>{{partner.name}}</b><br>
          <i>{{partner.des}}</i><br>
          <span>&yen;{{partner.pri}}</span>
        </div>
      </div>
    </div>
    <div class="customInfo">
      <p>客服电话 010-6549 9549 ( 工作日8:00-20:00 ) </p>
      <p>客服邮箱 aiufa@123.com</p>
      <p class="onlineCustom">联系在线客服 9:00-21:00</p>
      <div class="logo bg-center"></div>
    </div>
    <tabbar :selectCurrent="selected"></tabbar>
    <!-- <tabbar @seleced="parentListen"></tabbar> -->
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
// import Vue from 'vue'
// import Router from 'vue-router'
// import { Swipe, SwipeItem } from 'mint-ui'
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
export default {
  // components: {
  //   'mt-swipe': Swipe,
  //   'mt-swipe-item': SwipeItem
  // },
  data () {
    return {
      waterdatas: [{
        id: '1', img: require('../assets/5.png'), name: 'ISKLAR纯物质矿泉水1', des: '源于阿尔卑斯山脉1', pri: '100', path: 'goodsdetail'
      }, {
        id: '2', img: require('../assets/5.png'), name: 'ISKLAR纯物质矿泉水2', des: '源于阿尔卑斯山脉2', pri: '200', path: 'goodsdetail'
      }, {
        id: '3', img: require('../assets/5.png'), name: 'ISKLAR纯物质矿泉水3', des: '源于阿尔卑斯山脉3', pri: '300', path: 'goodsdetail'
      }, {
        id: '4', img: require('../assets/5.png'), name: 'ISKLAR纯物质矿泉水4', des: '源于阿尔卑斯山脉4', pri: '400', path: 'goodsdetail'
      }, {
        id: '5', img: require('../assets/5.png'), name: 'ISKLAR纯物质矿泉水4', des: '源于阿尔卑斯山脉4', pri: '400', path: 'goodsdetail'
      }],
      partnerdatas: [{
        img: require('../assets/5.png'), name: 'SIIDCHR', des: '精致下午茶伴侣', pri: '500', path: 'goodsdetail'
      }, {
        img: require('../assets/5.png'), name: 'SIIDCHR', des: '精致下午茶伴侣', pri: '400', path: 'goodsdetail'
      }, {
        img: require('../assets/5.png'), name: 'SIIDCHR', des: '精致下午茶伴侣', pri: '300', path: 'goodsdetail'
      }, {
        img: require('../assets/5.png'), name: 'SIIDCHR', des: '精致下午茶伴侣', pri: '200', path: 'goodsdetail'
      }, {
        img: require('../assets/5.png'), name: 'SIIDCHR', des: '精致下午茶伴侣', pri: '200', path: 'goodsdetail'
      }],
      selected: 'home'
    }
  },
  created () {
    // 请求
  },
  // watch: {
  //   selected () {
  //     if (this.selected === 'home') {
  //       this.$router.push('search')
  //     }
  //   }
  // },
  methods: {
    // parentListen (val) {
    //   console.log(val)
    //   this.selected = 'home'
    // },
    a () {
      console.log(24314)
    },
    waterHandle () {
      console.log(123)
    },
    partnerHandle () {
      console.log(1234)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../style/mixin";
  .logo {
    height: 2.08rem;
    background: #fff url('../assets/4.png') 0 0 no-repeat;
    background-size: auto 100%;
    text-indent: -9999px;
  }
  .mint-swipe {
    height: 8.33rem;
  }
  .swipe {
    @include wh(100%, 8.33rem);
  }
  .main-water {
    margin-bottom: 0.42rem;
    padding: 0.83rem 0.42rem;
    width: 100%;
    background-color: #fff;
  }
  .category {
    @include fj();
    width: 100%;
  }
  .category a {
    display: flex;
    width: 49%;
  }
  .category img {
    width: 100%;
    height: 4.17rem;
  }
  /*防止外边距塌陷给上padding 1px*/
  .main-partner {
    padding: 1px 0.42rem 0.83rem;
    width: 100%;
    background-color: #fff;
  }
  #title-water, #title-partner {
    margin-top: 0.83rem;
    line-height: 0.83rem;
    height: 0.83rem;
    font-size: 0.83rem;
    border-left: 0.17rem solid blue;
    text-indent: 0.21rem;
  }
  .water:nth-child(2n) {
    float: right;
  }
  .water, .partner {
    display: inline-block;
    width: 49%;
    margin-top: 0.83rem;
  }
  .water b, .partner b {
    font-size: 0.71rem;
    line-height: 0.71rem;
  }
  .water i, .partner i {
    font-size: 0.62rem;
    line-height: 0.62rem;
    color: #666;
  }
  .water span, .partner span {
    font-size: 0.62rem;
    line-height: 0.62rem;
    color: blue;
  }
  .customInfo {
    padding: 0.83rem 0;
  }
  .customInfo p{
    text-align: center;
    font-size: 0.5rem;
    padding: 0.21rem 0;
  }
  .customInfo .onlineCustom {
    border-radius: 0.62rem;
    font-size: 0.38rem;
    background-color: #fff;
    width: 7.5rem;
    margin: 0.21rem auto 0.62rem;
  }
  .customInfo .bg-center {
    background-position: center;
    background-color: #eee;
  }
</style>
