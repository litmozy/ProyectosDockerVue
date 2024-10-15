# Proyecto Hola Mundo con Vue.js

## Descripción
Este proyecto es un ejemplo básico de una aplicación de "Hola Mundo" desarrollada con Vue.js. Muestra cómo utilizar componentes en Vue y una estructura mínima de una aplicación.

## Requisitos
Antes de comenzar, asegúrate de tener lo siguiente instalado en tu máquina:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [Vue CLI](https://cli.vuejs.org/) para gestionar tu proyecto Vue

## Instalación y Configuración

### 1. Clonar el Repositorio
Clona este repositorio en tu máquina local usando el siguiente comando:

```
# Luego de descargar fólder de repositorio:
cd HolaMundoEnVue
```

### 2. Instalar Dependencias
Una vez clonado el repositorio, instala las dependencias del proyecto ejecutando:
```
npm install
```

### 3. Ejecutar el Proyecto
Para levantar la aplicación y verla en tu navegador, ejecuta el siguiente comando:
```
npm run serve
```
Esto abrirá la aplicación en el puerto 8080 por defecto. Podrás acceder a ella desde http://localhost:8080.

### 4. Estructura del Proyecto
App.vue: El archivo principal del proyecto que incluye la estructura del componente HelloWorld.
HelloWorld.vue: Un componente que recibe un mensaje como propiedad y lo muestra en pantalla.
### Código del Proyecto
##### App.vue
```
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

##### HelloWorld.vue
```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
```
