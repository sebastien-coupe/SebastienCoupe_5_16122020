<template>
  <div class="mt-10 md:flex md:gap-8">
    <div class="rounded-xl overflow-hidden md:w-2/4">
      <img class="w-full h-full object-cover" :src="image" :alt="name" />
    </div>
    <div class="flex flex-col md:w-2/4">
      <div>
        <h2 class="mt-2 text-xl font-semibold sm:text-2xl sm:mt-0">{{ name }}</h2>
        <p class="mt-4"><strong>Description:</strong> {{ description }}</p>
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
  props: ["name", "image", "description", "price"],
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2) + " €"
    }
  }
};
</script>

<style>
</style>