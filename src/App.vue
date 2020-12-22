<template>
  <Navbar />
  <main class="text-gray-700 py-8">
    <div class="container max-w-screen-lg px-4 mx-auto">
      <router-view />
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
