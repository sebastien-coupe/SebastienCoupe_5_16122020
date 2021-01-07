<template>
  <form @submit.prevent="processCheckout">
    <div class="px-4 py-2 bg-yellow-200 text-sm text-yellow-900 rounded-md">
      <span class="mr-2">&#128712;</span>Les champs précédés d'un
      <strong>*</strong> sont requis.
    </div>
    <div
      v-if="errors.length"
      class="mt-4 px-4 py-2 bg-red-200 text-sm text-red-900 rounded-md"
    >
      <p>Veuillez corriger les erreurs suivantes</p>
      <ul class="ml-4 list-disc">
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <div class="flex flex-col gap-4 mt-8 sm:flex-row sm:gap-8">
      <div class="flex-1">
        <label for="lastname" class="inline-block w-full text-sm">*Nom:</label>
        <input
          v-model="lastName"
          type="text"
          name="lastname"
          id="lastname"
          required
          class="w-full mt-1 px-4 py-2 border rounded-md"
        />
      </div>
      <div class="flex-1">
        <label for="firstname" class="inline-block w-full text-sm"
          >*Prénom:</label
        >
        <input
          v-model="firstName"
          type="text"
          name="firstname"
          id="firstname"
          required
          class="w-full mt-1 px-4 py-2 border rounded-md"
        />
      </div>
    </div>
    <div class="mt-4">
      <label for="address" class="inline-block w-full text-sm">*Adresse:</label>
      <input
        v-model="address"
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
          class="w-full mt-1 px-4 py-2 border rounded-md"
        />
      </div>
      <div class="flex-1">
        <label for="city" class="inline-block w-full text-sm">*Ville:</label>
        <input
          v-model="city"
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
        v-model="email"
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
        v-model="emailConfirm"
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
        <span v-if="processing">Validation...</span>
        <span v-else>Commander</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "CustomerInfosForm",
  emits: ["ordered"],
  data() {
    return {
      firstName: null,
      lastName: null,
      address: null,
      city: null,
      email: null,
      emailConfirm: null,
      errors: [],
      processing: false,
    };
  },
  methods: {
    validateForm() {
      this.errors = [];
      if (this.email !== this.emailConfirm) {
        this.errors.push("Les adresse email ne correspondent pas");
      }
    },
    processCheckout() {
      this.validateForm();

      if (this.errors.length === 0) {
        const productIds = this.$store.state.cart.map((item) => item.id);
        const contact = {
          firstName: this.firstName,
          lastName: this.lastName,
          address: this.address,
          city: this.city,
          email: this.email,
        };

        this.processing = true;

        setTimeout(() => {
          this.$http
            .post("http://localhost:3000/api/teddies/order", {
              contact: contact,
              products: productIds,
            })
            .then((response) => {
              this.$emit("ordered", response.data.orderId);
            })
            .catch((error) => console.error(error));
          this.processing = false;
        }, 2000);
      }
    },
  },
};
</script>

<style>
</style>