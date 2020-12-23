<template>
  <div class="item">
    <h2 class="ml-2 mb-2 text-xl font-semibold">Peluche "{{ name }}"</h2>
    <div class="image-responsive rounded-xl overflow-hidden">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        :src="img"
        :alt="name"
      />
    </div>
    <div class="flex mt-6">
      <span class="inline-flex flex-1 items-center justify-center bg-white rounded-md text-xl sm:text-2xl font-semibold">{{ formatPrice(price) }}</span>
      <router-link
        class="inline-block ml-2 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
        :to="{ name: 'Product', params: { id: itemId } }"
        >Détails</router-link
      >
      <button
        class="inline-block bg-blue-200 text-blue-900 ml-2 px-4 py-2 rounded-md hover:bg-blue-300"
      >
        Ajouter
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemPreview",
  props: ["img", "name", "price", "itemId"],
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2) + " €"
    }
  }
};
</script>

<style>
</style>