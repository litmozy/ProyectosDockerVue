<template>
  <div class="app-container">
    <h1 class="animated-title">Rick and Morty Characters</h1>

    <!-- Search and Filter Section -->
    <div class="filters">
      <input v-model="searchQuery" placeholder="Search by name" @input="searchCharacters" />
      <select v-model="statusFilter" @change="searchCharacters">
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>

    <!-- Loading Message -->
    <div v-if="characters.length === 0" class="loading">
      <p>Loading characters...</p>
    </div>

    <!-- Character Cards in grid -->
    <div class="character-grid">
      <div v-for="character in characters" :key="character.id" class="character-card">
        <div class="character-img-container">
          <img :src="character.image" :alt="character.name" class="character-img" />
        </div>
        <p>{{ character.name }}</p>
      </div>
    </div>

    <!-- Pagination Buttons -->
    <div class="pagination">
      <button @click="prevPageHandler" :disabled="!prevPage" class="pagination-button prev">🌀 Previous Dimension</button>
      <button @click="nextPageHandler" :disabled="!nextPage" class="pagination-button next">Next Dimension 🌀</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      characters: [],
      currentPage: 1,
      nextPage: null,
      prevPage: null,
      searchQuery: '',
      statusFilter: '',
    };
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
    async fetchCharacters(url = `https://rickandmortyapi.com/api/character?page=${this.currentPage}`) {
      try {
        const response = await axios.get(url);
        this.characters = response.data.results;
        this.nextPage = response.data.info.next;
        this.prevPage = response.data.info.prev;
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    },
    nextPageHandler() {
      if (this.nextPage) {
        this.currentPage++;
        this.fetchCharacters(this.nextPage);
      }
    },
    prevPageHandler() {
      if (this.prevPage) {
        this.currentPage--;
        this.fetchCharacters(this.prevPage);
      }
    },
    async searchCharacters() {
      const url = `https://rickandmortyapi.com/api/character?name=${this.searchQuery}&status=${this.statusFilter}`;
      this.fetchCharacters(url);
    },
  },
};
</script>

<style scoped>
/* Fondo galáctico animado */
.app-container {
  background: url('https://preview.redd.it/some-of-my-favorite-backgrounds-without-rick-morty-v0-qjdeyp8xd9a81.png?width=1080&crop=smart&auto=webp&s=009f8443230daa08109b4395d0f1b59432590693') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  color: #fff;
  padding: 20px;
  font-family: 'Press Start 2P', cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Efecto de título */
.animated-title {
  font-size: 3rem;
  color: #00ff9c;
  text-shadow: 0 0 15px rgba(0, 255, 156, 0.8), 0 0 25px rgba(0, 255, 156, 1);
  animation: glow 1.5s infinite alternate;
  letter-spacing: 2px;
  margin-bottom: 40px;
  text-align: center;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(0, 255, 156, 0.5), 0 0 20px rgba(0, 255, 156, 0.7);
  }
  to {
    text-shadow: 0 0 25px rgba(0, 255, 156, 1), 0 0 35px rgba(0, 255, 156, 1);
  }
}

/* Filtros */
.filters {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 15px;
}

.filters input, .filters select {
  padding: 15px;
  font-size: 1rem;
  border: 3px solid #00ff9c;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 255, 156, 0.5);
}

.filters input::placeholder {
  color: #aaa;
}

/* Grid de personajes */
.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  width: 100%;
}

/* Tarjetas de personajes con temática interdimensional */
.character-card {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 15px;
  width: 180px;
  border: 3px solid #00ff9c;
  box-shadow: 0 0 20px rgba(0, 255, 156, 0.4);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
}

.character-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 0 40px rgba(0, 255, 156, 0.8);
}

/* Imágenes con animación */
.character-img-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.character-img {
  border-radius: 50%;
  width: 160px;
  height: 160px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.character-card:hover .character-img {
  transform: rotate(360deg) scale(1.2);
}

p {
  font-size: 1.2rem;
  color: #00ff9c;
  margin-top: 15px;
  text-shadow: 0 0 10px rgba(0, 255, 156, 0.7);
}

/* Botones de paginación */
.pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.pagination-button {
  padding: 12px 20px;
  margin: 0 15px;
  font-size: 1rem;
  color: white;
  background-color: #ff4f4f;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 79, 79, 0.7);
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-button:hover {
  background-color: #ff1a1a;
  box-shadow: 0 0 25px rgba(255, 79, 79, 1);
}

/* Botones personalizados */
.prev {
  background-color: #00ccff;
  color: #000;
}

.prev:hover {
  background-color: #0099cc;
  box-shadow: 0 0 25px rgba(0, 153, 204, 1);
}

.next {
  background-color: #cc00ff;
  color: #fff;
}

.next:hover {
  background-color: #9900cc;
  box-shadow: 0 0 25px rgba(204, 0, 255, 1);
}

button:disabled {
  background-color: #555;
  box-shadow: none;
  cursor: not-allowed;
}
</style>