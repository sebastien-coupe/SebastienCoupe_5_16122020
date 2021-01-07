<template>
  <ConfirmationModal v-if="modal" @closeModal="closeModal" />
  <div v-if="item">
    <h1 class="text-xl sm:text-2xl font-semibold text-center uppercase">
      Détail de l'article "<strong>{{ item.name }}</strong
      >"
    </h1>
    <ItemDetails class="mt-10 md:mt-20" :item="item" @itemAdded="openModal" />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import ConfirmationModal from "@/components/ConfirmationModal.vue";
import ItemDetails from "@/components/ItemDetails.vue";

export default {
  name: "Product",
  inheritAttrs: false,
  components: {
    ConfirmationModal,
    ItemDetails,
  },
  data() {
    return {
      itemId: this.$route.params.id,
      item: null,
      modal: false,
    };
  },
  methods: {
    fetchItem(id) {
      this.$http
        .get(`http://localhost:3000/api/teddies/${id}`)
        .then((response) => (this.item = response.data))
        .catch((error) => console.log(error));
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
  mounted() {
    this.fetchItem(this.itemId);
  },
};
</script>

<style>
</style>