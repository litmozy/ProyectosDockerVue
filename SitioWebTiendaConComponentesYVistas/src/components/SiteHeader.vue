<template>
  <header>
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo del sitio" class="logo" />
      <h1 class="site-title">Mi Sitio Web</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style scoped>
header {
  background: #ffffff; /* Fondo blanco limpio */
  color: #2f4f4f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em; /* Espaciado adecuado */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px; /* Tamaño de logo */
  margin-right: 10px; /* Espacio entre logo y título */
}

.site-title {
  font-size: 1.8em; /* Tamaño de fuente más grande */
  font-weight: bold;
  color: #2f4f4f;
  margin: 0;
  transition: color 0.3s ease; /* Transición de color */
}
</style>
