export default {
  methods: {
    addToCart(quantity = 1) {
      let itemInformations = {
        id: this.item._id,
        name: this.item.name,
        price: this.item.price,
        quantity: +quantity,
      };

      this.$store.commit("addItem", itemInformations);
      console.log(this.$store.state.cart);
    },
  }
}