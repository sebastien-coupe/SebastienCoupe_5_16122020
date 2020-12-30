export default {
  methods: {
    formatPrice(price) {
      // format price as "12,34 €"
      return (price / 100).toFixed(2) + " €"
    }
  }
}