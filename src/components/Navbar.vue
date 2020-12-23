<template>
  <nav class="bg-gray-800 py-4">
    <div class="container max-w-screen-lg px-4 mx-auto">
      <div class="flex justify-between items-center">
        <router-link class="inline-block" :to="{ name: 'Home' }">
        <img
          class="w-24 sm:w-32 md:w-auto"
          src="../assets/orinoco.webp"
          alt="Orinoco logo"
          width="163"
          height="40"
        />
      </router-link>
      <router-link class="text-white font-semibold hover:text-blue-200" :to="{ name: 'Checkout' }">
        Mon panier
      </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>