export default {
  methods: {
    addToCart(quantity = 1) {
      let itemInformations = {
        id: this.item._id,
        name: this.item.name,
        price: this.item.price,
        quantity: +quantity,
      };

      // Get index of item in cart
      let itemIndex = this.$store.state.cart.findIndex(item => item.id === itemInformations.id)

      if (itemIndex === -1) {
        // Add item to cart if not present
        this.$store.commit("addItem", itemInformations);
      } else {
        // Update item quantity if present
        let quantity = itemInformations.quantity;
        this.$store.commit("updateItemQuantity", { itemIndex, quantity })
      }

      this.$store.commit("calculateTotalPrice")

      console.log(this.$store.state.total)

    },
  }
}