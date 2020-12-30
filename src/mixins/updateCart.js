export default {
  methods: {
    updateCart(item, quantity) {
      let itemId = item.id
      quantity = +quantity

      // Get index of item in cart
      let itemIndex = this.$store.state.cart.findIndex(item => item.id === itemId)

      // Update quantity
      this.$store.commit("setItemQuantity", { itemIndex, quantity })

      // Recalculate cart total price
      this.$store.commit("calculateTotalPrice")
    },
  }
}