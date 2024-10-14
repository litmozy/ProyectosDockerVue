<template>
  <main class="about-container">
    <h2 class="about-title">Acerca de nosotros</h2>
    <p class="about-description">Nosotros somos una empresa dedicada a ofrecer lo mejor en educación y formación.</p>
    <p class="about-description">Contamos con un equipo de profesionales altamente calificados.</p>
    
    <div class="team-section">
      <h3>Nuestro Equipo</h3>
      <div class="team-member">
        <img src="https://picsum.photos/150/150?random=1" alt="Miembro del equipo" class="team-member-image"/>
        <div class="team-member-info">
          <h4 class="member-name">Lupita Ramírez</h4>
          <p class="member-role">C.E.O.</p>
        </div>
      </div>
      <div class="team-member">
        <img src="https://picsum.photos/150/150?random=2" alt="Miembro del equipo" class="team-member-image"/>
        <div class="team-member-info">
          <h4 class="member-name">El Diego Gutierrez</h4>
          <p class="member-role">Momazos Diego</p>
        </div>
      </div>
      <div class="team-member">
        <img src="https://picsum.photos/150/150?random=3" alt="Miembro del equipo" class="team-member-image"/>
        <div class="team-member-info">
          <h4 class="member-name">Skibidi Pérez</h4>
          <p class="member-role">Skibidi Toilet</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AboutView' // Cambiado de 'About' a 'AboutView'
}
</script>

<style scoped>
.about-container {
  padding: 20px;
  background-color: #f9f9f9; /* Fondo suave */
  border-radius: 10px; /* Esquinas redondeadas */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.about-title {
  color: #34495e; /* Color de texto para el encabezado */
  font-family: 'Arial', sans-serif; /* Fuente clara */
  margin-bottom: 10px; /* Espacio inferior */
}

.about-description {
  color: #7f8c8d; /* Color más suave para la descripción */
  margin: 10px 0; /* Margen superior e inferior */
  line-height: 1.6; /* Altura de línea mejorada para legibilidad */
}

.team-section {
  margin-top: 20px; /* Margen superior */
}

.team-member {
  display: flex;
  align-items: center;
  margin-bottom: 15px; /* Espacio entre miembros */
  background-color: #ffffff; /* Fondo blanco */
  border-radius: 5px; /* Esquinas redondeadas */
  padding: 10px; /* Espaciado interno */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.team-member-image {
  width: 50px; /* Ancho de la imagen */
  height: 50px; /* Alto de la imagen */
  border-radius: 50%; /* Imagen circular */
  margin-right: 15px; /* Espacio entre imagen y texto */
}

.team-member-info {
  display: flex;
  flex-direction: column; /* Apilar información verticalmente */
}

.member-name {
  color: #34495e; /* Color para el nombre */
  font-weight: bold; /* Negrita para el nombre */
  margin: 0; /* Sin margen */
}

.member-role {
  color: #7f8c8d; /* Color más suave para el rol */
  margin: 0; /* Sin margen */
}
</style>
