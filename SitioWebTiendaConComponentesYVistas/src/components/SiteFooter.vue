<template>
  <footer>
    <div class="footer-container">
      <div class="footer-content">
        <p>&copy; 2024 Litzy. Colegio Español Padre Arrupe.</p>
        <div class="social-links">
          <a href="#" class="social-icon">Facebook</a>
          <a href="#" class="social-icon">Twitter</a>
          <a href="#" class="social-icon">Instagram</a>
        </div>
      </div>
      <div class="footer-divider"></div>
      <div class="footer-bottom">
        <p>Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
footer {
  background-color: #1a1a1a; /* Fondo oscuro moderno */
  color: #f1f1f1; /* Color de texto suave */
  padding: 20px 0; /* Espaciado superior e inferior */
  text-align: center; /* Centra el texto */
}

.footer-container {
  max-width: 1200px; /* Ancho máximo para el contenido */
  margin: 0 auto; /* Centra el contenido en la página */
  padding: 0 20px; /* Espaciado horizontal */
}

.footer-content {
  margin-bottom: 10px; /* Espaciado inferior para separar del divisor */
}

.footer-divider {
  border-top: 1px solid #444; /* Línea divisoria suave */
  margin: 10px 0; /* Espaciado vertical */
}

.social-links {
  margin: 10px 0; /* Espaciado vertical entre párrafo y enlaces */
}

.social-icon {
  color: #61dafb; /* Color azul brillante */
  text-decoration: none; /* Sin subrayado */
  margin: 0 15px; /* Espaciado horizontal */
  font-weight: bold; /* Texto en negrita */
  transition: color 0.3s; /* Transición suave */
}

.social-icon:hover {
  color: #21a1f1; /* Color más intenso al pasar el ratón */
}

.footer-bottom {
  font-size: 0.9em; /* Tamaño de fuente más pequeño */
  color: #bbb; /* Color de texto más claro */
}
</style>
