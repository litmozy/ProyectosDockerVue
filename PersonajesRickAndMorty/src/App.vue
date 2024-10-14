<template> 
  <div id="app">
    <CharacterList />
  </div>
</template>

<script>
import CharacterList from './components/CharacterList.vue';

export default {
  name: 'App',
  components: {
    CharacterList
  }
};
</script>

<style>
/* Estilos globales opcionales */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
</style>
