<template>
  <div class="home">
    <h1 class="text-xl font-semibold">Nos articles:</h1>
    <div class="grid md:grid-cols-2 gap-y-24 md:gap-x-12 mt-10" v-if="items.length">
      <ItemPreview
        v-for="item in items"
        :key="item._id"
        :img="item.imageUrl"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :itemId="item._id"
      />
    </div>
    <div v-else>No data</div>
  </div>
</template>

<script>
import ItemPreview from "@/components/ItemPreview.vue";

export default {
  name: 'Home',
  components: {
    ItemPreview,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    fetchAllItems() {
      this.$http
        .get("http://localhost:3000/api/teddies")
        .then((response) => (this.items = response.data))
        .catch((error) => console.error(error));
    },
  },
  mounted() {
    this.fetchAllItems();
  },
};
</script>
