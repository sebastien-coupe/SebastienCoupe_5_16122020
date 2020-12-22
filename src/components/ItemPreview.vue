<template>
  <div class="mt-12">
    <div class="rounded-xl overflow-hidden">
      <img :src="img" :alt="name" />
    </div>
    <div>
      <h2 class="mt-2 text-xl font-semibold">{{ name }}</h2>
      <p class="mt-2">{{ description }}</p>
    </div>
    <div class="mt-6 text-right">
      <a class="inline-block bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200">Détails</a>
      <button class="inline-block bg-blue-200 text-blue-900 ml-2 px-4 py-2 rounded-md hover:bg-blue-300">
        Ajouter
      </button>
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