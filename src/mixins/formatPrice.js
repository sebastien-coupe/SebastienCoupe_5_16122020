export default {
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2) + " €"
    }
  }
}