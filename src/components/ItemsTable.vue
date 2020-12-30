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
      <TableRow v-for="item in itemsInCart" :key="item" :item="item" />
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
import TableRow from "@/components/TableRow.vue";
import formatPrice from "@/mixins/formatPrice.js";

export default {
  name: "ItemsTable",
  data() {
    return {
      itemsInCart: null,
      totalPrice: 0,
    };
  },
  components: {
    TableRow,
  },
  emits: ["clearCart"],
  mixins: [formatPrice],
  methods: {
    clearCart() {
      this.$emit("clearCart");
    },
    fetchCartItems() {
      this.itemsInCart = this.$store.state.cart;
    },
    generateTotalPrice() {
      this.itemsInCart.forEach((item) => {
        this.totalPrice += item.quantity * item.price;
      });
    },
  },
  mounted() {
    this.fetchCartItems();
    this.generateTotalPrice();
  },
};
</script>

<style>
</style>