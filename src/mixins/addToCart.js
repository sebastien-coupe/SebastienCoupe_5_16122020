export default {
  methods: {
    addToCart() {
      let itemInformations = {
        id: this.item._id,
        name: this.item.name,
        price: this.item.price,
        quantity: +this.quantity || 1,
        total: this.item.price * this.quantity,
      };

      this.$store.commit("addItem", itemInformations);
      console.log(this.$store.state.price);
    },
  }
}