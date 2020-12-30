<template>
  <div class="checkout">
    <h1 class="text-xl sm:text-2xl font-semibold text-center uppercase">
      Mon panier
    </h1>
    <div v-if="isEmpty" class="pt-10 md:pt-20">
      <p class="text-center">Votre panier est vide.</p>
      <div class="mt-12 text-center">
        <router-link
          :to="{ name: 'Home' }"
          class="inline-block px-4 py-2 border text-blue-500 border-blue-500 rounded-md font-medium hover:bg-blue-500 hover:text-white"
          >Découvrir nos articles</router-link
        >
      </div>
    </div>
    <div v-else class="pt-10 md:pt-20">
      <ItemsTable :cart="cart" @clearCart="cancelCart" />
    </div>
  </div>
</template>

<script>
import ItemsTable from "@/components/ItemsTable.vue";

export default {
  name: "Checkout",
  components: {
    ItemsTable,
  },
  data() {
    return {
      isEmpty: true,
      cart: null,
    };
  },
  methods: {
    fetchCartInformations() {
      if (this.$store.state.cart.length) {
        this.cart = this.$store.state.cart;
        this.isEmpty = false;
      }
    },
    cancelCart() {
      this.$store.commit("removeAllItems");
      this.isEmpty = true;
      this.cart = null;
    },
  },
  mounted() {
    this.fetchCartInformations();
  },
};
</script>

<style>
</style>