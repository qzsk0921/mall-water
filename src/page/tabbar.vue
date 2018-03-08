<template>
  <footer style="height: 2.29rem">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="search">
        <img slot="icon" src="../assets/search.svg">
        搜索
      </mt-tab-item>
      <div :class="{selected:(selected=='category')}" style="flex: 1" @click="categoryHandle">
        <mt-tab-item id="category">
          <img slot="icon" src="../assets/category.svg">
          分类
          <ul v-if="ulView==true" class="categoryUl">
            <li @click="a">咕噜饮水机</li>
            <li @click="waterCategory">优选水源</li>
            <li @click="partnerCategory">健康伴侣</li>
            <div></div>
          </ul>
        </mt-tab-item>
      </div>
      <mt-tab-item id="home">
        <img slot="icon" src="../assets/home.svg">
        主页
        <!-- <span v-if="selected!=='home'">主页</span> -->
      </mt-tab-item>
      <mt-tab-item id="shopping">
        <img slot="icon" src="../assets/shopping.svg">
        购物车
        <span v-show="cartSum!==0" class="cart-quantity">{{cartSum}}</span>
        <!-- <div class="cart-quantity">{{$store.state.quantity}}</div> -->
      </mt-tab-item>
      <mt-tab-item id="personal">
        <img slot="icon" src="../assets/mine.svg">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>
<script>
// import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui'
import { mapState } from 'vuex'
// import store from '@/store'
// Vue.component(Tabbar.name, Tabbar)
// Vue.component(TabItem.name, TabItem)
export default {
  // 不能用selected接收是因为组件内只能被动接收组件外传递过来的数据，并且在组件内，不能修改由外层传来的props数据
  props: {
    selectCurrent: String
    // ulUnview: Boolean
  },
  components: {
    'mt-tabbar': Tabbar,
    'mt-tab-item': TabItem
  },
  data () {
    return {
      selected: '',
      ulView: false
    }
  },
  // beforeCreate () {
  //   this.ulView = this.ulUnview
  // },
  created () {
    this.selected = this.selectCurrent
    this.ulView = this.ulUnview
    // 重新计算购物车的数量
    this.$store.state.quantity = 0
    this.$store.commit('addToCart_tip')
    // console.log(this.ulView)
  },
  computed: mapState(['cartSum']),
  watch: {
    selected () {
      if (this.selected === 'search') {
        this.$router.push({path: '/search'})
        this.ulView = false
        // this.$emit('selected', 'search')
      } else if (this.selected === 'home') {
        this.$router.push({path: '/home'})
        this.ulView = false
      } else if (this.selected === 'shopping') {
        // this.$router.push('shopping')
        this.$router.push({path: '/shopping'})
        this.ulView = false
      } else if (this.selected === 'personal') {
        this.$router.push({path: '/personal'})
        this.ulView = false
      }
    }
  },
  methods: {
    a () {
      console.log(24314)
    },
    categoryHandle () {
      this.ulView = !this.ulView
    },
    waterCategory () {
      this.$router.push({path: '/category/water'})
    },
    partnerCategory () {
      this.$router.push({path: '/category/partner'})
    }
  }
}
</script>
<style lang="scss" scoped>
  .mint-tabbar {
    height: 2.29rem;
  }
  .mint-tabbar .categoryUl {
    position: absolute;
    bottom: 2.92rem;
    left: 12%;
    background-color: #fff;
    padding: 0 0.83rem;
    border-radius: 0.42rem;
    box-shadow: 0.21rem 0.21rem 0.25rem #eee;
    li {
      height: 1.67rem;
      width: 4.17rem;
      line-height: 1.67rem;
      border-bottom: 0.04rem solid #eee;
      font: 0.67rem/1.67rem Microsoft Yahei;
      list-style: none;
      color: #333;
    };
    li:nth-last-child() {
      border-bottom: none;
    };
    div {
      position: absolute;
      bottom: -0.27rem;
      left: 2.67rem;
      background-color: #fff;
      width: 0.54rem;
      height: 0.54rem;
      transform: rotate(-45deg);
    }
  }
  .selected {
    background-color: #eaeaea;
  }
  .selected .is-selected {
    color: #26a2ff;
  }
  .cart-quantity {
    position: absolute;
    top: -0.21rem;
    right: 25%;
    width: 0.79rem;
    height: 0.79rem;
    line-height: 0.79rem;
    text-align: center;
    background-color: #d61515;
    font-size: 0.58rem;
    border-radius: 50%;
    color: #fff;
  }
</style>
