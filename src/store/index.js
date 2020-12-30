import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    total: 0
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

    calculateTotalPrice(state) {
      state.total = 0;
      state.cart.forEach((item) => {
        state.total += item.quantity * item.price;
      });
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
