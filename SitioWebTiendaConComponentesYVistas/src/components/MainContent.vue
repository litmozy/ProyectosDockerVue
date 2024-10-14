<template>
  <main>
    <h2>Nuestros Productos</h2>
    <p>Aquí puedes explorar nuestra variedad de productos.</p>
    
    <div class="filter">
      <label for="category">Filtrar por categoría:</label>
      <select v-model="selectedCategory" @change="filterProducts">
        <option value="">Todas</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
    </div>

    <div class="product-gallery">
      <div class="product-card" v-for="product in filteredProducts" :key="product.id">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3 class="product-title">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: '',
      categories: ['Electrónica', 'Ropa', 'Comida'],
      products: [
        { id: 1, name: 'Teléfono', description: 'Teléfono inteligente', category: 'Electrónica', image: 'https://picsum.photos/300/200?random=1' },
        { id: 2, name: 'Cámara', description: 'Cámara digital', category: 'Electrónica', image: 'https://picsum.photos/300/200?random=2' },
        { id: 3, name: 'Camiseta', description: 'Camiseta de algodón', category: 'Ropa', image: 'https://picsum.photos/300/200?random=3' },
        { id: 4, name: 'Galletas', description: 'Galletas de chocolate', category: 'Comida', image: 'https://picsum.photos/300/200?random=4' },
        { id: 5, name: 'Laptop', description: 'Laptop portátil', category: 'Electrónica', image: 'https://picsum.photos/300/200?random=5' },
        { id: 6, name: 'Sudadera', description: 'Sudadera cómoda', category: 'Ropa', image: 'https://picsum.photos/300/200?random=6' },
      ],
      filteredProducts: []
    }
  },
  created() {
    this.filteredProducts = this.products;
  },
  methods: {
    filterProducts() {
      if (this.selectedCategory) {
        this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
      } else {
        this.filteredProducts = this.products;
      }
    }
  }
}
</script>

<style scoped>
main {
  padding: 20px;
  background-color: #f4f7fa; /* Fondo suave */
  border-radius: 10px; /* Esquinas redondeadas */
}

h2 {
  color: #34495e; /* Color de texto para encabezado */
  font-family: 'Arial', sans-serif; /* Fuente clara */
}

.filter {
  margin-bottom: 20px;
}

.filter label {
  margin-right: 10px;
  color: #2c3e50; /* Color de texto del filtro */
}

.filter select {
  padding: 5px;
  border: 1px solid #ccc; /* Borde sutil */
  border-radius: 5px; /* Esquinas redondeadas */
  background-color: #ffffff; /* Fondo blanco */
  font-size: 16px; /* Tamaño de fuente */
}

.product-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Diseño de cuadrícula responsivo */
  gap: 20px; /* Espaciado entre tarjetas */
}

.product-card {
  background: #ffffff; /* Fondo blanco */
  border-radius: 10px; /* Esquinas redondeadas */
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra más prominente */
  transition: transform 0.3s, box-shadow 0.3s; /* Transición al pasar el ratón */
}

.product-card:hover {
  transform: translateY(-5px); /* Elevación al pasar el ratón */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Sombra más intensa al pasar el ratón */
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 10px; /* Esquinas redondeadas */
}

.product-title {
  color: #2c3e50; /* Color para el título */
  font-weight: bold; /* Negrita para el título */
  margin: 10px 0 5px; /* Margen para separar el título */
}

.product-description {
  color: #7f8c8d; /* Color más suave para la descripción */
}
</style>
