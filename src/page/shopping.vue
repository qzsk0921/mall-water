<template>
  <div>
    <ul>
      <li v-for="(item, index) in shoppingCart" :key="item.id+item.sId" class="clear">
        <div
        v-if="checkedChildren.indexOf(item.id+item.sId)>=0"
        class="checkbox-wrap checked left">
          <input
          @click="checkedOne(item.id+item.sId, index)"
          :checked="checkedChildren.indexOf(item.id+item.sId)>=0"
          type="checkbox"
          class="checkbox">
        </div>
        <div
        v-else
        class="checkbox-wrap uncheck left">
          <input
          @click="checkedOne(item.id+item.sId, index)"
          :checked="checkedChildren.indexOf(item.id+item.sId)>=0"
          type="checkbox"
          class="checkbox">
        </div>
        <div class="left" style="width: 25%; height: 100%">
          <img :src="item.imgUrl">
        </div>
        <div class="shoppingCart-content right">
          <p>{{item.name}} | {{item.des}}</p>
          <!-- <p v-if="item.emphasize" class="emphasize">{{item.emphasize}}</p> -->
          <p class="emphasize">规格:{{item.specification}}</p>
          <div class="clear price-quantity-box">
            <span class="price left">&yen;{{item.pri}}</span>
            <div class="right">
              <button @click="reduce(item.quantity, index)">-</button>
              <button>{{item.quantity}}</button>
              <button @click="add(index)">+</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div v-show="shoppingCart.length>0" class="foot-wrap">
      <div class="left foot-wrap-left">
        <div class="left" style="width: 30%; height: 100%">
          <div v-if="checkedParent==true" class="checkbox-all-wrap checked">
            <input
            type="checkbox"
            v-model="checkedParent"
            :checked="checkedChildren.length==shoppingCart.length"
            @click="checkedAll"
            class="checkbox-all">
          </div>
          <div v-else class="checkbox-all-wrap uncheck">
            <input
            type="checkbox"
            v-model="checkedParent"
            :checked="checkedChildren.length==shoppingCart.length"
            @click="checkedAll"
            class="checkbox-all">
          </div>
          <span class="quanxuan-text">全选</span>
        </div>
        <div class="right" style="width: 70%; height: 100%">
          <p class="right" style="margin-right: 0.21rem">合计：<span style="color: #38a1f7">&yen;{{totalPrice}}</span></p>
          <p style="margin-left: 4.75rem">不含运费</p>
        </div>
      </div>
      <mt-button @click="pay" type="primary" class="right btn">去支付</mt-button>
    </div>
    <transition name="fade">
      <div v-show="payDialogVisible" class="shade-box">
        <transition name="fade">
          <div @click="payDialogVisible=false" v-show="payDialogVisible" class="visible-top"></div>
        </transition>
        <transition name="move">
          <!-- <transition-group>微信支付</transition-group> -->
          <!-- <transition-group>京东支付</transition-group> -->
          <div v-show="payDialogVisible" class="animate-box">
            <p>微信支付</p>
            <p>京东支付</p>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
import { Button } from 'mint-ui'
export default {
  components: {
    'mt-button': Button
  },
  data () {
    return {
      shoppingCart: [
      // {
      //   id: '1', img: require('../assets/goods.png'), name: '卡布奇诺', des: '源自阿尔卑斯山', emphasize: '', price: 345.5, quantity: 14
      // }, {
      //   id: '2', img: require('../assets/goods.png'), name: '摩卡咖啡', des: '纯真享受', emphasize: '进口咖啡系列', price: 2000, quantity: 2
      // }, {
      //   id: '3', img: require('../assets/goods.png'), name: '山水茶叶', des: '寄情山水之间', emphasize: '新品上市', price: 999.98, quantity: 3
      // }, {
      //   id: '4', img: require('../assets/goods.png'), name: '星巴克咖啡豆', des: '原味尊享', price: 40000, quantity: 4
      // }, {
      //   id: '5', img: require('../assets/goods.png'), name: '卡布奇诺', des: '源自阿尔卑斯山', emphasize: '', price: 345.5, quantity: 14
      // }, {
      //   id: '6', img: require('../assets/goods.png'), name: '卡布奇诺', des: '源自阿尔卑斯山', emphasize: '', price: 345.5, quantity: 14
      // }, {
      //   id: '7', img: require('../assets/goods.png'), name: '卡布奇诺', des: '源自阿尔卑斯山', emphasize: '', price: 345.5, quantity: 14
      // }
      ],
      checkedParent: true,
      checkedChildren: [],
      payDialogVisible: false
    }
  },
  created () {
    this.shoppingCart = this.$store.state.cartOrder
    this.$store.state.cartOrder.forEach(item => {
      this.checkedChildren.push(item.id+item.sId)
    })
  },
  mounted () {
    for (let i; i < this.shoppingCart.length; i++) {
      this.$set(this.quantity, i, this.shoppingCart[i].quantity)
    }
  },
  watch: {
    checkedChildren (newVal, oldVal) {
      if (this.checkedChildren.length === this.shoppingCart.length) {
        this.checkedParent = true
      } else {
        this.checkedParent = false
      }
    },
    deep: true
  },
  computed: {
    totalPrice () {
      let SUM = this.shoppingCart.reduce((sum, item) => {
        if (this.checkedChildren.indexOf(item.id+item.sId) === -1) {
          return sum + 0
        }
        return sum + item.quantity * item.pri
      }, 0)
      // let S = SUM.toString()
      // let index = S.indexOf('.')
      // if (index < 0) {
      //   index = S.length
      //   S += '.'
      // }
      // while (S.length <= index + 2) {
      //   S += '0'
      // }
      // return S
      return SUM.toFixed(2)
    }
  },
  methods: {
    checkedAll () {
      if (this.checkedParent) {
        // 反选
        this.checkedChildren = []
      } else {
        // 全选
        this.checkedChildren = []
        this.shoppingCart.forEach(item => {
          this.checkedChildren.push(item.id+item.sId)
        })
      }
      this.checkedParent = !this.checkedParent
    },
    checkedOne (id, ind) {
      const index = this.checkedChildren.indexOf(id)
      if (index >= 0) {
        this.checkedChildren.splice(index, 1)
      } else {
        this.checkedChildren.push(id)
      }
    },
    reduce (val, index) {
      if (val === 1) {
        return
      }
      // 数组更新检测
      let item = this.shoppingCart.slice(index, index + 1)[0]
      item.quantity --
      this.shoppingCart.splice(index, 1, item)
    },
    add (index) {
      let item = this.shoppingCart.slice(index, index + 1)[0]
      item.quantity ++
      this.shoppingCart.splice(index, 1, item)
    },
    pay () {
      this.payDialogVisible = true
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../style/mixin";
  input[type='checkbox'] {
    @include wh(1.04rem, 1.04rem);
    opacity: 0;
  }
  .checkbox-all {
    @include ct();
    left: 0.29rem;
  }
  ul {
    background-color: #fff;
    margin-bottom: 2.42rem;
  }
  ul li {
    font-size: 0;
    height: 5.42rem;
    padding-right: 0.21rem;
    border-bottom: 0.08rem solid #eee
  }
  ul img {
    width: 100%;
    height: 100%;
  }
  .shoppingCart-content {
    position: relative;
    padding: 0.21rem 0;
    height: 100%;
    width: 65%;
  }
  .shoppingCart-content p {
    margin-top: 0.42rem;
  }
  .shoppingCart-content .price-quantity-box{
    height: 1.67rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .checkbox-wrap {
    width: 10%;
    height: 100%;
    position: relative;
  }
  .checked:before {
    width: 1.04rem;
    height: 1.04rem;
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('../assets/icon/checked.png') center center no-repeat;
    background-size: 100%;
  }
  .uncheck:before {
    width: 1.04rem;
    height: 1.04rem;
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('../assets/icon/check.png') center center no-repeat;
    background-size: 100%;
  }
  .checkbox {
     @include center;
  }
  ul p, .price, button {
    font-size: 0.67rem;
  }
  .emphasize {
    color: #999;
  }
  .price {
    margin-top: 0.21rem;
    font-weight: 500;
  }
  ul li button {
    width: 1.25rem;
    height: 1.25rem;
    background-color: #eee;
  }
  ul li button:nth-child(2) {
    width: 2.08rem;
    height: 1.25rem;
    margin: 0 0.08rem;
  }
  .foot-wrap {
    width: 100%;
    position: fixed;
    bottom: 0;
    font-size: 0.67rem;
    height: 2.42rem;
    background-color: #ddd;
  }
  .foot-wrap-left {
    width: 68%;
    height: 100%;
    padding-top: 0.08rem;
  }
  .foot-wrap .checkbox-all-wrap {
    width: 49%;
    height: 100%;
    position: relative;
  }
  .foot-wrap .quanxuan-text {
    @include ct()
    left: 1.67rem;
  }
  .foot-wrap .btn {
    width: 32%;
    height: 100%;
  }
  .foot-wrap .mint-button {
    font-size: 0.75rem;
  }
  .foot-wrap p {
    padding-top: 0.08rem;
  }
</style>
