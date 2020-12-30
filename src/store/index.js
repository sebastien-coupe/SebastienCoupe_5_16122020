import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addItem(state, item) {
      state.cart.push(item)
    },

    updateItemQuantity(state, item) {
      state.cart[item.itemIndex].quantity += item.quantity
    },

    setItemQuantity(state, item) {
      state.cart[item.itemIndex].quantity = item.quantity
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
