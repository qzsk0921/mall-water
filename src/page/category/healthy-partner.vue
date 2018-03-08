<template>
  <div>
    <div class="header-c">
      <div class="select-box-c">
        <span>{{sj}}</span>
        <select v-model="selected" @click="selectClick" @change="selectChange" @blue="blur">
          <option v-for="option in options" :key="option.id" :value="option.value">{{option.text}}</option>
        </select>
        <span>{{sj}}</span>
      </div>
    </div>
    <div class="waters-c">
      <div v-for="water in waterData" :key="water.id" class="water-c">
        <router-link :to="{path:'/'+water.path, query:{id:water.id}}">
          <img :src="water.img.goods">
          <div class="content-box-c">
            <p>{{water.name}} | {{water.des}}</p>
            <div class="cart-box-c clear">
              <div class="price-c left">&yen;{{water.pri}}</div>
              <div class="cart-c right"><img :src="water.img.cart"></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sj: '▽',
      selected: '健康伴侣',
      options: [{
        value: '优选水源', text: '优选水源'
      }, {
        value: '健康伴侣', text: '健康伴侣'
      }],
      waterData: [{id: '1', img: {goods: require('../../assets/goods.png'), cart: require('../../assets/icon/cart.png')}, name: 'ISKLAR纯物质矿泉水1', des: '源于阿尔卑斯山脉1', pri: '10000', path: 'goodsdetail'
      }, {id: '2', img: {goods: require('../../assets/goods.png'), cart: require('../../assets/icon/cart.png')}, name: 'ISKLAR纯物质矿泉水1', des: '源于阿尔卑斯山脉2', pri: '20000', path: 'goodsdetail'
      }, {id: '3', img: {goods: require('../../assets/goods.png'), cart: require('../../assets/icon/cart.png')}, name: 'ISKLAR纯物质矿泉水1', des: '源于阿尔卑斯山脉3', pri: '30000', path: 'goodsdetail'
      }, {id: '4', img: {goods: require('../../assets/goods.png'), cart: require('../../assets/icon/cart.png')}, name: 'ISKLAR纯物质矿泉水1', des: '源于阿尔卑斯山脉4', pri: '40000', path: 'goodsdetail'
      }, {id: 'goods', img: {goods: require('../../assets/goods.png'), cart: require('../../assets/icon/cart.png')}, name: 'ISKLAR纯物质矿泉水1', des: '源于阿尔卑斯山脉5', pri: '50000', path: 'goodsdetail'
      }]
    }
  },
  methods: {
    selectClick () {
      this.sj = '△'
    },
    selectChange () {
      this.sj = '▽'
      if (this.selected === '优选水源') {
        this.$router.push({path: '/category/water'})
      }
    },
    blur () {
      this.sj = '▽'
    }
  }
}
</script>
