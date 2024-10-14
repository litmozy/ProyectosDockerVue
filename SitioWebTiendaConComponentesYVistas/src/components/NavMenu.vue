<template>
  <nav>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/acerca">Acerca</router-link></li>
      <li><router-link to="/servicios">Servicios</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #2f4f4f ; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil para profundidad */
  position: sticky; /* Mantiene el menú en la parte superior al hacer scroll */
  top: 0;
  padding: 30px;
  z-index: 1000; /* Asegura que el menú esté siempre en la parte superior */
}

nav ul {
  list-style: none; /* Elimina el estilo de lista predeterminado */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center; /* Centra los elementos horizontalmente */
}

nav ul li {
  margin: 0 20px; /* Espaciado entre elementos */
}

nav ul li a {
  color: #ffffff;
  text-align: center;
  padding: 15px 20px;
  text-decoration: none;
  font-family: 'Helvetica Neue', sans-serif; /* Fuente moderna */
  font-size: 16px; /* Tamaño de fuente legible */
  border-bottom: 2px solid transparent; /* Efecto de subrayado en hover */
  transition: color 0.3s, border-color 0.3s; /* Transiciones suaves */
}

nav ul li a:hover {
  color: #1abc9c; /* Color al pasar el ratón */
  border-color: #1abc9c; /* Subrayado que aparece al pasar el ratón */
}

nav ul li a:active {
  color: #e74c3c; /* Color de texto al hacer clic */
}
</style>
