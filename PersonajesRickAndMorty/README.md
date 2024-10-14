# Rick and Morty Vue.js App

## Descripción
Este proyecto es una aplicación de Vue.js que muestra una lista de personajes de "Rick and Morty", obtenida desde la API pública de Rick and Morty. La aplicación permite buscar personajes por nombre y filtrar por estado (vivo, muerto o desconocido). También incluye una funcionalidad de paginación para navegar entre los diferentes personajes. Está configurado para funcionar con un backend utilizando Nginx como servidor web y proxy.

## Requisitos
Antes de comenzar, asegúrate de tener lo siguiente instalado en tu máquina:

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (versión 12 o superior)

## Estructura del Proyecto

- **nginx.conf**: Archivo de configuración de Nginx que define el proxy para redirigir las solicitudes a `/api` hacia el backend.
- **Dockerfile**: Define el contenedor Docker para la aplicación Vue.js.
- **App.vue**: Archivo principal del proyecto, donde se muestra la lista de personajes.
- **CharacterList.vue**: Componente de Vue que maneja la lógica para mostrar y filtrar los personajes.

## Instalación y Configuración

### 1. Clonar el Repositorio
Clona este repositorio en tu máquina local usando el siguiente comando:

```
git clone https://github.com/tu-usuario/rick-and-morty-app.git
cd rick-and-morty-app
```

### 2. Construir y Ejecutar con Docker
Si tienes Docker instalado, puedes construir y ejecutar la aplicación con los siguientes pasos:
1. Construir la imagen Docker:
   ```
   docker build -t rick-morty-app .

   ```
2. Ejecutar el contenedor:
   ```
   docker run -d -p 8080:8080 rick-morty-app

   ```
   La aplicación estará disponible en http://localhost:8080.

   ### 3. Configuración de Nginx
   El archivo nginx.conf se utiliza para configurar Nginx como servidor de la aplicación. A continuación se describe la configuración:

- *events:* Define el número máximo de conexiones simultáneas permitidas.
- *http:* Configura el servidor para que escuche en el puerto 80 y sirva los archivos HTML desde el directorio /usr/share/nginx/html.
- *location /api:* Redirige las solicitudes a /api hacia el backend en el puerto 3000.

##### nginx.conf:
```
events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name localhost;

        location / {
            root /usr/share/nginx/html;
            index index.html index.htm;
        }

        location /api {
            proxy_pass http://backend:3000;
        }
    }
}

```
### 4. Estructura de Archivos
- *App.vue:* El archivo principal de Vue que contiene el componente CharacterList.
- *CharacterList.vue:* Componente responsable de la lógica para obtener y mostrar los personajes de la API.
- *main.js:* Archivo principal para inicializar la aplicación Vue.
- *nginx.conf:* Archivo de configuración de Nginx.

## Código Destacado
##### App.vue:
```
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
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
</style>

```
##### CharacterList.vue:
```
<template>
  <div class="app-container">
    <h1 class="animated-title">Rick and Morty Characters</h1>
    <!-- Rest of the template -->
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

```
