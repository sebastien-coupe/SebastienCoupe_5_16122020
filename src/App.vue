<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1 text-gray-700 pt-8 pb-16 md:py-16">
      <div class="container max-w-screen-lg px-4 mx-auto">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
</style>
