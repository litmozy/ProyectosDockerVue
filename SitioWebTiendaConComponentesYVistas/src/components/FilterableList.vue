<template>
  <div>
    <h3>Filtrar Elementos</h3>
    <input type="text" v-model="filter" placeholder="Filtrar por nombre..." />
    <ul>
      <li v-for="item in filteredItems" :key="item.name">
        {{ item.name }} - {{ item.category }} - Popularidad: {{ item.popularity }} - Fecha: {{ item.date }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filter: ''
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => 
        item.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }
}
</script>

<style scoped>
input {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
