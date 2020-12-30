<template>
  <form @submit.prevent="processCheckout">
    <div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
      <div class="flex-1">
        <label for="lastname" class="inline-block w-full text-sm">Nom:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          class="w-full mt-1 px-4 py-2 border rounded-md"
        />
      </div>
      <div class="flex-1">
        <label for="firstname" class="inline-block w-full text-sm"
          >Prénom:</label
        >
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          class="w-full mt-1 px-4 py-2 border rounded-md"
        />
      </div>
    </div>
    <div class="mt-4">
      <label for="address" class="inline-block w-full text-sm">Adresse:</label>
      <input
        type="text"
        name="address"
        id="address"
        required
        class="w-full mt-1 px-4 py-2 border rounded-md"
      />
    </div>
    <div class="mt-4">
      <label for="address-complement" class="inline-block w-full text-sm"
        >Complèment d'adresse:</label
      >
      <input
        type="text"
        name="address-complement"
        id="address-complement"
        required
        class="w-full mt-1 px-4 py-2 border rounded-md"
      />
    </div>
    <div class="flex flex-col gap-4 sm:flex-row sm:gap-8 mt-4">
      <div class="flex-1">
        <label for="zip" class="inline-block w-full text-sm"
          >Code postal:</label
        >
        <input
          type="text"
          name="zip"
          id="zip"
          required
          class="w-full mt-1 px-4 py-2 border rounded-md"
        />
      </div>
      <div class="flex-1">
        <label for="city" class="inline-block w-full text-sm">Ville:</label>
        <input
          type="text"
          name="city"
          id="city"
          required
          class="w-full mt-1 px-4 py-2 border rounded-md"
        />
      </div>
    </div>
    <div class="mt-4">
      <label for="email" class="inline-block w-full text-sm"
        >Adresse mail:</label
      >
      <input
        type="email"
        name="email"
        id="email"
        required
        class="w-full mt-1 px-4 py-2 border rounded-md"
      />
    </div>
    <div class="mt-4">
      <label for="email-confirm" class="inline-block w-full text-sm"
        >Confirmer l'adresse mail:</label
      >
      <input
        type="email"
        name="email-confirm"
        id="email-confirm"
        required
        class="w-full mt-1 px-4 py-2 border rounded-md"
      />
    </div>
    <div class="mt-8 text-right">
      <button
        type="submit"
        class="inline-block bg-blue-200 px-4 py-2 text-blue-900 rounded-md text-lg font-semibold hover:bg-blue-300"
      >
        Commander
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "CustomerInfosForm",
  methods: {
    processCheckout() {
      console.log("submitted");
    },
  },
};
</script>

<style>
</style>