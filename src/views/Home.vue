<template>
  <div class="home">
    <h1>Nos articles:</h1>
    <div v-if="items.length">
      <h2 v-for="item in items" :key="item">{{ item.name }}</h2>
    </div>
    <div v-else>
      No data
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      items: []
    }
  },
  methods: {
    fetchItems() {
      this.$http
        .get('http://localhost:3000/api/teddies')
        .then(response => this.items = response.data)
        .catch(error => console.error(error))
    }
  },
  mounted() {
    this.fetchItems()
  }
}

</script>
