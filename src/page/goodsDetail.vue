<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img class="swipe" :src="goodsData.img.lunbo">
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="swipe" src="../assets/2.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="swipe" src="../assets/3.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="swipe" src="../assets/6.png">
      </mt-swipe-item>
    </mt-swipe>
    <div class="content-top">
      <p>{{goodsData.name}} | {{goodsData.specifications}}</p>
      <p>{{goodsData.des}}</p>
      <s>&yen;{{goodsData.delPrice}}</s>
      <p>&yen;{{goodsData.currentPrice}}</p>
      <div class="clear">
        <div class="left">快递：{{goodsData.express}}</div>
        <div class="right">发货地：{{goodsData.address}}</div>
      </div>
    </div>
    <div class="content-center">
      <mt-cell
        :title="'店铺：'+goodsData.shop"
        value="进入店铺"
        to="//github.com"
        is-link>
        <img slot="icon" src="../assets/icon/shop.png">
      </mt-cell>
    </div>
    <div class="content-bottom">
      <p>产品介绍</p>
      <img :src="goodsData.img.content">
    </div>
    <div class="logo">
      <div class="logo-box logo-bgcc"></div>
      <button>联系商家</button>
    </div>
    <div class="foot-wrap clear">
      <div class="left">
        <div class="icon-shop"></div>
        <p>商城</p>
      </div>
      <div class="left">
        <div class="icon-cart"></div>
        <p>购物车</p>
      </div>
      <button class="left">加入购物车</button>
      <button class="left">立即购买</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // goodsDate: [{
      //   id: '001', img: require('../assets/1.png'), name:' 农夫山泉', specifications: '饮用水天然红盖瓶装4*6L瓶一箱家庭装', des: 'G20峰会 指定用水 后厨用水', delPrice: '60.00', currentPrice: '54.9', express: '顺丰或中通包邮', address: '浙江杭州', shop: '咕噜微商城'
      // }, {
      //   id: '002', img: require('../assets/2.png'), name:' 农夫山泉', specifications: '饮用水天然红盖瓶装4*6L瓶一箱家庭装', des: 'G21峰会 指定用水 后厨用水', delPrice: '600.00', currentPrice: '540.9', express: '顺丰或中通包邮', address: '浙江杭州', shop: '咕噜微商城'
      // }, {
      //   id: '003', img: require('../assets/3.png'), name:' 农夫山泉', specifications: '饮用水天然红盖瓶装4*6L瓶一箱家庭装', des: 'G22峰会 指定用水 后厨用水', delPrice: '6000.00', currentPrice: '5400.9', express: '顺丰或中通包邮', address: '浙江杭州', shop: '咕噜微商城'
      // }, {
      //   id: '004', img: require('../assets/2.png'), name:' 农夫山泉', specifications: '饮用水天然红盖瓶装4*6L瓶一箱家庭装', des: 'G23峰会 指定用水 后厨用水', delPrice: '999.00', currentPrice: '99.9', express: '顺丰或中通包邮', address: '浙江杭州', shop: '咕噜微商城'
      // }],
      goodsData: {
        id: '001', img: {lunbo: require('../assets/1.png'), content: require('../assets/content.png')}, name: ' 农夫山泉', specifications: '饮用水天然红盖瓶装4*6L瓶一箱家庭装', des: 'G20峰会 指定用水 后厨用水', delPrice: '60.00', currentPrice: '54.9', express: '顺丰或中通包邮', address: '浙江杭州', shop: '咕噜微商城'
      }
    }
  }
}
</script>
<style scoped>
.mint-swipe {
  height: 10.42rem;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.content-top {
  font-size: 0.71rem;
  padding: 0.42rem 0.42rem;
  background-color: #fff;
}
.content-top p {
  padding: 5px 0;
}
.content-top p:nth-child(1) {
  padding-right: 0.83rem;
}
.content-top p:nth-child(2), .content-top s {
  font-size: 0.67rem;
  color: #999;
}
.content-top p:nth-child(4) {
  font-size: 1.0rem;
  color: #38a1f7;
}
.content-top div {
  font-size: 0.62rem;
  color: #666;
}
.content-center {
  padding: 0.42rem 0;
}
.content-center a {
  height: auto;
}
.content-center a >>> div.mint-cell-wrapper {
  height: auto;
  font-size: 0.67rem;
}
.content-center .mint-cell-wrapper img {
  width: 1.25rem;
  height: 1.25rem;
}
.content-center a >>> .mint-cell-text {
  color: #666;
}
.content-center a >>> .mint-cell-value span {
  color: #999;
}
.content-center a >>> .mint-cell-allow-right:after {
  width: 0.25rem;
  height: 0.25rem;
}
.content-bottom {
  padding: 0.42rem 0.42rem;
  background-color: #fff;
}
.content-bottom p {
  font-size: 0.67rem;
  padding-bottom: 0.21rem;
}
.content-bottom img {
  width: 100%;
}
.logo {
  height: 5.0rem;
  position: relative;
}
.logo .logo-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.17rem;
  height: 2.5rem;
}
.logo button {
  position: absolute;
  bottom: 0.42rem;
  left: 0.83rem;
  border: 1px solid #ddd;
  height: 1.04rem;
  width: 3.33rem;
  background-color: #fff;
  border-radius: 0.33rem;
  font-size: 0.33rem;
}
.foot-wrap {
  width: 100%;
}
.foot-wrap > div {
  width: 15%;
  height: 2.42rem;
  padding: 0.33rem;
  text-align: center;
  background-color: #ddd;
}
.foot-wrap > div > div {
  margin: 0 auto;
  height: 1.25rem;
  width: 1.25rem;
}
.foot-wrap > div .icon-shop {
  background: url("../assets/icon/shop.png") center center no-repeat;
  background-size: 100% 100%;
}
.foot-wrap > div .icon-cart {
  background: url("../assets/icon/shop.png") center center no-repeat;
  background-size: 100% 100%;
}
.foot-wrap div p {
  font-size: 0.54rem;
  font-weight: 600;
  color: #777;
}
.foot-wrap button {
  width: 35%;
  height: 2.42rem;
  color: #fff;
  background-color: #38a1f7;
  font-size: 0.67rem;
  font-weight: 600;
  border-left: 0.04rem solid #bbb;
}
.foot-wrap button:active {
  background-color: #68b1ec;
}
</style>
