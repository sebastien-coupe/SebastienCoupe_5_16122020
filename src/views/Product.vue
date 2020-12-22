<template>
  <div v-if="item">
    <h1>Détail de l'article "<strong>{{item.name}}</strong>":</h1>
    <ItemDetails :name="item.name" :image="item.imageUrl" :description="item.description" :price="item.price" />
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import ItemDetails from '@/components/ItemDetails.vue'

export default {
  name: 'Product',
  components: {
    ItemDetails
  },
  data() {
    return {
      itemId: this.$route.params.id,
      item: null
    }
  },
  methods: {
    fetchItem(id) {
      this.$http
        .get(`http://localhost:3000/api/teddies/${id}`)
        .then(response => this.item = response.data)
        .catch(error => console.log(error))
    }
  },
  mounted() {
    this.fetchItem(this.itemId)
  }
  

}
</script>

<style>

</style>