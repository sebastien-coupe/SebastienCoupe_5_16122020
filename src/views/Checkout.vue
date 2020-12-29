<template>
  <div class="checkout">
    <h1 class="text-xl sm:text-2xl font-semibold text-center uppercase">
      Mon panier
    </h1>
    <div class="pt-10 md:pt-20">
      <h2 class="text-center">Votre panier est vide.</h2>
      <div class="mt-12 text-center">
        <router-link
          :to="{ name: 'Home' }"
          class="inline-block px-4 py-2 border text-blue-500 border-blue-500 rounded-md font-medium hover:bg-blue-500 hover:text-white"
          >Découvrir nos articles</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkout",
};
</script>

<style>
</style>