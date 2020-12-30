<template>
  <div
    class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
  >
    <div class="bg-white rounded-md px-8 py-4">
      <p class="text-lg font-semibold">L'article a bien été ajouté</p>
      <div class="text-center mt-4">
        <button
          @click="closeModal"
          class="bg-blue-200 text-blue-900 ml-2 px-4 py-2 rounded-md"
        >
          OK
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