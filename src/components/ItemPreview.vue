<template>
  <div class="item">
    <div class="image-responsive rounded-xl overflow-hidden">
      <img class="absolute inset-0 h-full w-full object-cover" :src="img" :alt="name" />
    </div>
    <div class="px-2">
      <div>
      <h2 class="mt-2 text-xl font-semibold">{{ name }}</h2>
      <p class="mt-2">{{ description }}</p>
    </div>
    <div class="mt-6 text-right">
      <a class="inline-block bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">Détails</a>
      <button class="inline-block bg-blue-200 text-blue-900 ml-2 px-4 py-2 rounded-md hover:bg-blue-300">
        Ajouter
      </button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemPreview",
  props: ["img", "name", "description", "price"],
};
</script>

<style>
</style>