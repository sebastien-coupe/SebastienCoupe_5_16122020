<template>
  <div class="mt-10 md:flex md:gap-12">
    <div class="rounded-xl overflow-hidden md:w-2/4">
      <img class="w-full h-full object-cover" :src="image" :alt="name" />
    </div>
    <div class="flex flex-col md:w-2/4">
      <div>
        <p class="mt-4 md:mt-0"><strong>Description:</strong><br>{{ description }}</p>
      </div>
      <div class="flex justify-between mt-8 md:mt-auto">
        <span class="inline-flex flex-1 items-center justify-center bg-white rounded-md text-xl text-2xl font-semibold">{{ formatPrice(price) }}</span>
        <button
          class="inline-block bg-blue-200 text-blue-900 ml-2 px-4 py-2 rounded-md hover:bg-blue-300"
        >
          Ajouter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemDetails",
  props: ["image", "description", "price"],
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2) + " €"
    }
  }
};
</script>

<style>
</style>