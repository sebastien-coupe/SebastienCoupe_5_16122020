<template>
  <ConfirmationModal v-if="modal" @closeModal="closeModal" />
  <div class="home">
    <h1 class="text-xl sm:text-2xl font-semibold text-center uppercase">
      Nos articles
    </h1>
    <div class="pt-10 md:pt-20">
      <div v-if="items" class="grid md:grid-cols-2 gap-y-24 md:gap-x-12">
        <ItemPreview
          v-for="item in items"
          :key="item._id"
          :item="item"
          @itemAdded="openModal"
        />
      </div>
      <div v-else class="text-center">Chargement...</div>
    </div>
  </div>
</template>

<script>
import ConfirmationModal from "@/components/ConfirmationModal.vue";
import ItemPreview from "@/components/ItemPreview.vue";

export default {
  name: "Home",
  components: {
    ConfirmationModal,
    ItemPreview,
  },
  data() {
    return {
      items: null,
      modal: false,
    };
  },
  methods: {
    fetchAllItems() {
      this.$http
        .get("http://localhost:3000/api/teddies")
        .then((response) => (this.items = response.data))
        .catch((error) => console.error(error));
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
  mounted() {
    this.fetchAllItems();
  },
};
</script>
