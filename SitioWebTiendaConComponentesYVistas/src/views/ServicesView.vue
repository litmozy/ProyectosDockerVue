<template>
  <main class="services-container">
    <h2 class="services-title">Nuestros Servicios</h2>
    <p class="services-description">Ofrecemos una variedad de servicios para satisfacer tus necesidades.</p>
    <ul class="services-list">
      <li class="service-item">
        <h3 class="service-name">Servicio 1</h3>
        <p class="service-description">Descripción del servicio 1.</p>
      </li>
      <li class="service-item">
        <h3 class="service-name">Servicio 2</h3>
        <p class="service-description">Descripción del servicio 2.</p>
      </li>
      <li class="service-item">
        <h3 class="service-name">Servicio 3</h3>
        <p class="service-description">Descripción del servicio 3.</p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'ServicesView' // Nombre del componente
}
</script>

<style scoped>
.services-container {
  padding: 20px;
  background-color: #f0f4f8; /* Fondo claro y suave */
  border-radius: 10px; /* Esquinas redondeadas */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.services-title {
  color: #2c3e50; /* Color de texto para el encabezado */
  font-family: 'Arial', sans-serif; /* Fuente clara */
  margin-bottom: 10px; /* Espacio inferior */
}

.services-description {
  color: #7f8c8d; /* Color más suave para la descripción */
  margin-bottom: 20px; /* Espacio inferior */
  line-height: 1.6; /* Altura de línea mejorada para legibilidad */
}

.services-list {
  list-style: none; /* Sin viñetas */
  padding: 0; /* Sin padding */
}

.service-item {
  background: #ffffff; /* Fondo blanco para los servicios */
  border-radius: 5px; /* Esquinas redondeadas */
  padding: 15px; /* Espaciado interno */
  margin-bottom: 15px; /* Espacio entre servicios */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* Sombra suave */
  transition: transform 0.3s, box-shadow 0.3s; /* Transición para efectos al pasar el ratón */
}

.service-item:hover {
  transform: translateY(-5px); /* Efecto de elevación al pasar el ratón */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada al pasar el ratón */
}

.service-name {
  color: #34495e; /* Color para el nombre del servicio */
  margin: 0; /* Sin margen */
}

.service-description {
  color: #7f8c8d; /* Color más suave para la descripción */
  margin: 5px 0 0; /* Margen superior e inferior */
}
</style>
