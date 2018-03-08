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
      <div v-for="(water, index) in waterData" :key="water.id" class="water-c">
        <router-link :to="{path:'/'+water.path, query:{id:water.id}}">
          <img :src="water.img.goods">
          <div class="content-box-c">
            <p>{{water.name}} | {{water.des}}</p>
            <div class="cart-box-c clear">
              <div class="price-c left">&yen;{{water.pri}}</div>
              <div class="cart-c right"><img @click.prevent="cartShadeHandle(water, index)" :src="water.img.cart"></div>
            </div>
          </div>
        </router-link>
        <transition name="fade">
          <div v-show="showSpecification[index]" class="shade-box">
            <div @click="shadeHandle(index)" class="visible-top"></div>
            <transition name="move">
              <div v-show="showSpecification[index]" style="width:100%;position:absolute;bottom:0">
                <div style="padding:0 0.42rem;background: #fff">
                  <div>
                    <img :src="water.img.goods" style="width:2.5rem;height:2.5rem">
                    <h6 class="font-red">&yen;{{water.pri}}</h6>
                    <h6 class="gray">库存{{water.inventory}}</h6>
                    <h6>已选择 {{specification}}</h6>
                    <button @click="shadeHandle(index)" style="position:absolute;top:0;right:0;width:1.04rem;font-size: 1.04rem;background:#fff">×</button>
                  </div>
                  <div style="height: 150px;overflow:auto">
                    <div>
                      <div>
                        <h6>规格</h6>
                        <ul style="padding: 10px 0;border: 1px solid #000;">
                          <li @click="specificationChoose(item, index, $event)" v-for="(item, index) in water.specifications" :key="water.specifications.id" :class="{active: index===isActive}" style="display:inline-block">{{item.specification}}</li>
                        </ul>
                      </div>
                      <div>
                        <span class="left">数量</span>
                        <div class="right" style="font-size:0.67rem">
                          <button @click="reduce(quantity)" style="width:1.25rem;height:1.25rem;font-size:0.58rem">-</button>
                          <button style="width:2.5rem;height:1.25rem;font-size:0.58rem">{{quantity}}</button>
                          <button @click="quantity+=1" style="width:1.25rem;height:1.25rem;font-size:0.58rem">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div @click="addToCart(water, index)" style="padding:0.21rem 0;text-align:center;background-color:red">
                  加入购物车
                </div>
              </div>
            </transition>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      sj: '▽',
      selected: '优选水源',
      options: [{
        value: '优选水源', text: '优选水源'
      }, {
        value: '健康伴侣', text: '健康伴侣'
      }],
      waterData: [{id: '1', inventory: 123, img: {goods: require('../../assets/5.png'), cart: require('../../assets/icon/cart.png')}, name: 'ISKLAR纯物质矿泉水1', des: '源于阿尔卑斯山脉1', pri: 10000, emphasize: '原装进口', path: 'goodsdetail', specifications: [{sId: '1', specification: '<拉拉裤XL3888*2'}, {sId: '2', specification: '拉拉裤L44*2'}, {sId: '3', specification: 'L54*2'}, {sId: '4', specification: 'M64*2'}, {sId: '5', specification: '拉拉裤XL38*2'}, {sId: '6', specification: '拉拉裤L44*2'}, {sId: '7', specification: 'L54*2'}, {sId: '8', specification: 'M64*2'}]
      }, {id: '2', inventory: 389102, img: {goods: require('../../assets/goods.png'), cart: require('../../assets/icon/cart.png')}, name: 'ISKLAR纯物质矿泉水1', des: '源于阿尔卑斯山脉2', pri: 76496.98, emphasize: '长白山特供', path: 'goodsdetail', specifications: [{sId: '1', specification: '拉拉裤XL38*2'}, {sId: '2', specification: 'L54*2'}, {sId: '3', specification: 'M64*2'}]
      }, {id: '3', inventory: 99999, img: {goods: require('../../assets/5.png'), cart: require('../../assets/icon/cart.png')}, name: 'ISKLAR纯物质矿泉水1', des: '源于阿尔卑斯山脉3', pri: '30000', emphasize: '', path: 'goodsdetail', specifications: [{sId: '1', specification: '拉拉裤XL999*2'}, {sId: '2', specification: '拉拉裤L888*2'}, {sId: '3', specification: '拉拉裤XL777*2'}, {sId: '4', specification: '拉拉裤L44*2'}]
      }, {id: '4', inventory: 92347, img: {goods: require('../../assets/5.png'), cart: require('../../assets/icon/cart.png')}, name: 'ISKLAR纯物质矿泉水1', des: '源于阿尔卑斯山脉4', pri: 40000, emphasize: '原装进口', path: 'goodsdetail', specifications: [{sId: '1', specification: '拉拉裤XLLLL*2'}, {sId: '2', specification: '拉拉裤SSS*2'}, {sId: '3', specification: 'XXX*2'}, {sId: '4', specification: 'MMM*2'}]
      }, {id: '5', inventory: 0, img: {goods: require('../../assets/5.png'), cart: require('../../assets/icon/cart.png')}, name: 'ISKLAR纯物质矿泉水1', des: '源于阿尔卑斯山脉5', pri: 55555, emphasize: '原装进口', path: 'goodsdetail', specifications: [{sId: '1', specification: '拉拉裤XL38*2'}, {sId: '2', specification: '拉拉裤L中号'}, {sId: '3', specification: '拉拉裤M小号'}, {sId: '4', specification: '拉拉裤M64*2'}]
      }],
      showSpecification: [],
      quantity: 1,
      // goodsSpecification: [],
      specification: '',
      sId: '',
      isActive: -1
    }
  },
  created () {
    // this.axios.get('/shop/goods?id=12345').then(respose => {
    //   console.log(respose)
    //   if (respose.status === 200) {
    //     this.goodsSpecification = respose.data.articles
    //   }
    // }).catch(error => {
    //   console.log(error)
    // })
  },
  mounted () {
    for (let i = 0; i < this.waterData.length; i++) {
      this.showSpecification[i] = false
      // this.$set(this.showSpecification, i, false)
    }
  },
  // computed: mapState(['quantity']),
  methods: {
    selectClick () {
      this.sj = '△'
    },
    selectChange () {
      this.sj = '▽'
      if (this.selected === '健康伴侣') {
        this.$router.push({path: '/category/partner'})
      }
    },
    blur () {
      this.sj = '▽'
    },
    cartShadeHandle (item, index) {
      // this.showSpecification[index] = !this.showSpecification[index]
      this.$set(this.showSpecification, index, !this.showSpecification[index])
      this.specification = item.specifications[0].specification
      this.sId = item.specifications[0].sId
      this.quantity = 1
      this.isActive = 0
    },
    shadeHandle (index) {
      // this.showSpecification[index] = !this.showSpecification[index]
      this.$set(this.showSpecification, index, !this.showSpecification[index])
    },
    specificationChoose (item, index, e) {
      this.specification = e.target.innerText
      this.isActive = index
      this.sId = item.sId
    },
    reduce (quantity) {
      if (quantity === 1) {
        return
      }
      this.quantity -= 1
    },
    addToCart (item, index) {
      this.$set(this.showSpecification, index, !this.showSpecification[index])
      // this.showSpecification[index] = !this.showSpecification[index]
      this.$set(this.$store.state, 'quantity', this.quantity)
      // this.$store.state['quantity'] = this.quantity
      this.$store.commit('addToCart_tip')
      this.$store.state['id'] = item.id
      this.$store.state['imgUrl'] = item.img.goods
      this.$store.state['name'] = item.name
      this.$store.state['des'] = item.des
      this.$store.state['pri'] = item.pri
      this.$store.state['emphasize'] = item.emphasize
      this.$store.state['specification'] = this.specification
      this.$store.state['sId'] = this.sId
      this.$store.commit('addToCart_list')
      // this.$store.commit('addToCart_order')
    }
  }
}
</script>
<style scoped>
  .active {
    background-color: hotpink;
  }
  .move-enter-active, .move-leave-active {
    transition: all .6s ease;
  }
  .move-enter, .move-leave-active {
    transform: translateY(350px);
  }
</style>
