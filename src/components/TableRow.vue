<template>
  <tr :item="item" :key="item" class="border-b">
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
      <input
        @change="updateQuantity"
        type="number"
        min="1"
        v-model.number:value="quantity"
        class="inline-block w-16 py-2 px-1 rounded-md border text-center"
      />
    </td>
    <td class="text-center py-2">
      {{ formatPrice(total) }}
    </td>
  </tr>
</template>

<script>
import formatPrice from "@/mixins/formatPrice.js";
import updateCart from "@/mixins/updateCart.js";

export default {
  name: "TableRow",
  emits: ["updatePrice"],
  props: ["item"],
  data() {
    return {
      quantity: this.item.quantity,
      total: 0,
    };
  },
  methods: {
    setTotal() {
      this.total = this.item.price * this.quantity;
    },
    updateQuantity() {
      this.updateCart(this.item, this.quantity);
      this.setTotal();
      this.$emit("updatePrice");
    },
  },
  mounted() {
    this.setTotal();
  },
  mixins: [formatPrice, updateCart],
};
</script>

<style>
</style>