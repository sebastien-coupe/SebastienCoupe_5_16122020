<template>
  <div v-if="item" class="item-detail">
    <h1>Détail de l'article "<strong>{{item.name}}</strong>":</h1>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
export default {
  name: 'Product',
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