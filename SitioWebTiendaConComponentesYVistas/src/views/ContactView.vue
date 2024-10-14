<template>
  <main class="contact-container">
    <h2 class="contact-title">Contacto</h2>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="form.name" required class="form-input" />
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="form.email" required class="form-input" />
      </div>
      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="form.message" required class="form-textarea"></textarea>
      </div>
      <button type="submit" class="submit-button">Enviar</button>
    </form>
    <p v-if="submitted" class="thank-you-message">¡Gracias por tu mensaje!</p>
  </main>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    }
  },
  methods: {
    submitForm() {
      console.log('Formulario enviado:', this.form);
      this.submitted = true;
    }
  }
}
</script>

<style scoped>
.contact-container {
  padding: 20px;
  background-color: #f9f9f9; /* Fondo claro para el contenedor */
  border-radius: 10px; /* Esquinas redondeadas */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.contact-title {
  color: #2c3e50; /* Color de texto para el encabezado */
  margin-bottom: 20px; /* Espacio inferior */
  font-family: 'Arial', sans-serif; /* Fuente clara */
}

.contact-form {
  display: flex;
  flex-direction: column; /* Alinear elementos en columna */
}

.form-group {
  margin-bottom: 15px; /* Espacio entre grupos de formulario */
}

.label {
  font-weight: bold; /* Negrita para las etiquetas */
  margin-bottom: 5px; /* Espacio inferior para etiquetas */
}

.form-input, .form-textarea {
  padding: 10px;
  border: 1px solid #ddd; /* Borde sutil */
  border-radius: 5px; /* Esquinas redondeadas */
  transition: border-color 0.3s; /* Transición suave */
  width: 100%; /* Ancho completo */
  box-sizing: border-box; /* Asegura que el padding no aumente el ancho */
}

.form-input:focus, .form-textarea:focus {
  border-color: #22c1c3; /* Color de borde al enfocar */
  outline: none; /* Sin borde de enfoque predeterminado */
}

.form-textarea {
  resize: none; /* Sin opción de redimensionar el textarea */
  height: 100px; /* Altura fija */
}

.submit-button {
  padding: 10px;
  background-color: #22c1c3; /* Color de fondo del botón */
  color: white; /* Color de texto */
  border: none; /* Sin borde */
  border-radius: 5px; /* Esquinas redondeadas */
  cursor: pointer; /* Cursor de puntero */
  transition: background-color 0.3s; /* Transición suave */
}

.submit-button:hover {
  background-color: #1a999a; /* Color de fondo al pasar el ratón */
}

.thank-you-message {
  margin-top: 20px; /* Espacio superior */
  color: #2c3e50; /* Color para el mensaje de agradecimiento */
  font-weight: bold; /* Negrita */
}
</style>
