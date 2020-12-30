<template>
  <div class="mt-10 md:flex md:gap-12">
    <div class="relative rounded-xl overflow-hidden md:w-2/4">
      <img
        class="w-full h-full object-cover"
        :src="item.imageUrl"
        :alt="item.name"
      />
    </div>
    <div class="flex flex-col md:w-2/4">
      <div>
        <p class="mt-4 md:mt-0">
          <strong>Description:</strong><br />{{ item.description }}
        </p>
      </div>
      <ColorSelector class="mt-8" :colors="item.colors" />
      <div class="flex justify-between items-center mt-6">
        <label for="quantity" class="text-sm font-semibold">Quantité:</label>
        <input
          type="number"
          min="1"
          v-model.number:value="quantity"
          id="quantity"
          class="inline-block w-1/4 p-2 bg-transparent border-b text-center"
        />
      </div>
      <div class="flex gap-4 justify-between mt-16 lg:mt-auto">
        <span
          class="inline-flex flex-1 items-center justify-center bg-white rounded-md text-xl text-2xl font-semibold"
          >{{ formatPrice(item.price) }}</span
        >
        <button
          @click="addItem"
          class="inline-block bg-blue-200 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-300"
        >
          Ajouter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ColorSelector from "@/components/ColorSelector.vue";
import formatPrice from "@/mixins/formatPrice.js";
import addToCart from "@/mixins/addToCart.js";

export default {
  name: "ItemDetails",
  mixins: [formatPrice, addToCart],
  props: ["item"],
  data() {
    return {
      quantity: 1,
      added: false,
    };
  },
  methods: {
    addItem() {
      this.added = true;
      this.addToCart(this.quantity);
    },
  },
  components: {
    ColorSelector,
  },
};
</script>

<style>
</style>