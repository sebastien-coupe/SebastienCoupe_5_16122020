<template>
  <table class="w-full">
    <thead>
      <tr class="border-b text-lg">
        <th class="text-left pb-2">Désignation</th>
        <th>Prix</th>
        <th>Quantité</th>
        <th>Sous-total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in cart" :key="item" class="border-b">
        <td class="py-2">
          <router-link :to="{ name: 'Product', params: { id: item.id } }">
            <div class="uppercase font-semibold">Peluche "{{ item.name }}"</div>
            <div class="text-sm">Ref: {{ item.id }}</div>
          </router-link>
        </td>
        <td class="text-center py-2">
          {{ formatPrice(item.price) }}
        </td>
        <td class="text-center py-2">
          {{ item.quantity }}
        </td>
        <td class="text-center py-2">
          {{ formatPrice(item.price * item.quantity) }}
        </td>
      </tr>
      <tr class="font-bold">
        <td>
          <button
            @click="clearCart"
            class="bg-red-200 text-red-900 py-2 px-4 rounded-md hover:bg-red-300"
          >
            Vider mon panier
          </button>
        </td>
        <td></td>
        <td class="py-4 text-center uppercase">Total T.T.C:</td>
        <td class="py-4 text-center">
          <div class="text-2xl">
            {{ formatPrice(totalPrice) }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import formatPrice from "@/mixins/formatPrice.js";

export default {
  name: "ItemsTable",
  data() {
    return {
      totalPrice: 0,
    };
  },
  emits: ["clearCart"],
  mixins: [formatPrice],
  props: ["cart"],
  methods: {
    clearCart() {
      this.$emit("clearCart");
    },
    generateTotalPrice() {
      this.cart.forEach((item) => {
        this.totalPrice += item.quantity * item.price;
      });
    },
  },
  mounted() {
    this.generateTotalPrice();
  },
};
</script>

<style>
</style>