import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    price: 0
  },
  mutations: {
    addItem(state, item) {
      state.cart.push(item)
      this.commit('calculatePrice')
    },
    calculatePrice(state) {
      state.price = 0;
      state.cart.forEach((item) => state.price += item.total)
    },
    removeAllItems(state) {
      state.cart = []
    }
  },
  actions: {
  },
  modules: {
  }
})
