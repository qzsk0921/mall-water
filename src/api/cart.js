import Vuex from 'vuex'
export const isDuplicate = Vuex.Store.state.cartOrder.forEach(item => {
	if(item.id === Vuex.Store.state.id && item.specification === Vuex.Store.state.specification) {
		item.quantity += Vuex.Store.state.quantity
    return true
	}
})