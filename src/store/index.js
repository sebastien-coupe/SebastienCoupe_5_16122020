import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addItem(state, item) {
      state.cart.push(item)
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
