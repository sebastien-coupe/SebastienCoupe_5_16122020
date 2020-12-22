<template>
  <nav class="bg-gray-800 py-4">
    <div class="container max-w-screen-lg px-4 mx-auto">
      <router-link class="inline-block" :to="{ name: 'Home' }">
        <img
          class="w-24 sm:w-32 md:w-auto relative mt-2"
          src="../assets/orinoco.webp"
          alt="Orinoco logo"
          width="163"
          height="40"
        />
      </router-link>
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