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
      <TableRow
        v-for="item in itemsInCart"
        :key="item"
        :item="item"
        @updatePrice="fetchTotalPrice"
      />
      <tr class="font-bold">
        <td>
          <button
            @click="clearCart"
            class="border border-red-400 text-red-500 py-2 px-4 rounded-md hover:bg-red-400 hover:text-white"
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
    fetchTotalPrice() {
      this.totalPrice = this.$store.state.total;
    },
  },
  mounted() {
    this.fetchCartItems();
    this.fetchTotalPrice();
  },
};
</script>

<style>
</style>