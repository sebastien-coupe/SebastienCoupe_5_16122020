<template>
  <div
    class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
  >
    <div class="bg-white rounded-md p-8">
      <div class="text-lg font-semibold">L'article a bien été ajouté</div>
      <div class="flex flex-col sm:flex-row gap-2 mt-6">
        <router-link
          :to="{ name: 'Checkout' }"
          class="inline-block px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >Aller au panier</router-link
        >
        <button
          @click="closeModal"
          class="inline-block bg-blue-200 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-300"
        >
          Poursuivre mes achats
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmationModal",
  emits: ["closeModal"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style>
</style>