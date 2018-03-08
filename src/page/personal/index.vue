<template>
  <div>
    <div>
      <button>登录</button>
    </div>
    <div>
      <mt-cell
        title="我的订单"
        to="//github.com"
        is-link
        value="全部">
      </mt-cell>
    </div>
    <div>
      <button>
        <a href="#">
          <img src="#" alt="">
        </a>
        <span>待发货</span>
      </button>
      <button>
        <a href="#">
          <img src="#" alt="">
        </a>
        <span>已收货</span>
      </button>
      <button>
        <a href="#">
          <img src="#" alt="">
        </a>
        <span>已完成</span>
      </button>
      <button>
        <a href="#">
          <img src="#" alt="">
        </a>
        <span>退货中/已退货</span>
      </button>
      <div @click="contactService">
        <mt-cell
        title="联系客服"
        is-link>
      </mt-cell>
      </div>
      <mt-cell
        title="常见问题"
        to="//github.com"
        is-link>
      </mt-cell>
    </div>
    <tabbar :selectCurrent="selected"></tabbar>
    <div v-show="payDialogVisible" class="pay-box">
      <div class="visible-top"></div>
      <transition name="move">
        <div v-show="payDialogVisible" class="animate-box">
          <p>电话客服
            <span>010-6565988</span>
          </p>
          <p>服务邮箱
            <span>54525242@163.com</span>
          </p>
          <button @click="cancelBtn">取消</button>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
// import Vue from 'vue'
// import { Cell } from 'mint-ui'
// Vue.component(Cell.name, Cell)

export default {
  // components: {
  //   'mt-cell': Cell
  // },
  data () {
    return {
      selected: 'personal',
      payDialogVisible: false
    }
  },
  methods: {
    contactService () {
      this.payDialogVisible = true
    },
    cancelBtn () {
      this.payDialogVisible = false
    }
  }
}
</script>
<style scoped>
.pay-box .animate-box {
  height: 187px;
  background-color: #eee;
}
.pay-box .animate-box p {
  font-size: 0.67rem;
}
.pay-box .animate-box p span {
   color: #38a1f7;
}
.pay-box .animate-box button {
  margin-top: 7px;
  height: 60px;
  width: 100%;
  background-color: #fff;
  font-size: 0.83rem;
}
.move-enter {
    transform: translateY(187px);
}
</style>
