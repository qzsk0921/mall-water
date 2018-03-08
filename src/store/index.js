import Vue from 'vue'
import Vuex from 'vuex'
import { mapstates, mapmutations, mapactions, mapgetters } from 'vuex'
// import { isDuplicate } from '@/api/cart'

Vue.use(Vuex)

const state = {
	id: '',
  imgUrl: '', 
  name: '', 
  des: '', 
  pri: '',
  emphasize: '',
  specification: '',
  sId: '',
  cartSum: '',
	quantity: null,
	cartList: {}, //加入购物车的商品列表
	cartOrder: []
}
const mutations = {
	addToCart_tip (state) {
		// state.cartSum += state.quantity
    state.cartSum = state.cartOrder.reduce((sum, item) => {
      return sum + item.quantity
    }, 0) + state.quantity
	},
	addToCart_list (state) {
		let count = 0
		state.cartList = {}
		state.cartOrder.every(item => {
			count ++
			if (item.id + item.sId === state.id + state.sId) {
				item.quantity += state.quantity
				return false
			} else if (count >= state.cartOrder.length) {
        state.cartList.quantity = state.quantity
		    state.cartList.id = state.id
		    state.cartList.imgUrl = state.imgUrl
		    state.cartList.name = state.name
		    state.cartList.des = state.des
		    state.cartList.pri = state.pri
		    state.cartList.emphasize = state.emphasize
		    state.cartList.specification = state.specification
		    state.cartList.sId = state.sId
		    state.cartOrder.push(state.cartList)
			}
			return true
		})
		if (!state.cartOrder.length) {
      state.cartList.quantity = state.quantity
	    state.cartList.id = state.id
	    state.cartList.imgUrl = state.imgUrl
	    state.cartList.name = state.name
	    state.cartList.des = state.des
	    state.cartList.pri = state.pri
	    state.cartList.emphasize = state.emphasize
	    state.cartList.specification = state.specification
	    state.cartList.sId = state.sId
	    // console.log(state.cartList)
	    state.cartOrder.push(state.cartList)
		}
	}
}
const actions = {
  
}
const store = new Vuex.Store({
	state,
	mutations
})

export default store