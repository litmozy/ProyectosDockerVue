# Proyecto Vue.js - Sitio Web Informativo

## Descripción
Este es un proyecto desarrollado con Vue.js que incluye varias vistas como "Inicio", "Acerca de Nosotros", "Servicios" y "Contacto", además de componentes reutilizables como un menú de navegación y una lista filtrable.

## Requisitos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [Vue CLI](https://cli.vuejs.org/guide/installation.html)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona este repositorio:

   ```
   git clone https://github.com/litmozy/ProyectosDockerVue/SitioWebTiendaConComponentesYVistas
   ```
2. Navega al directorio del proyecto:
   ```
   cd ProyectosDockerVue

   ```
3. Instala las dependencias del proyecto:
   ```
   npm install
   ```
4. Ejecución en modo de desarrollo
Para ejecutar el proyecto en un entorno de desarrollo con recarga automática de la página al hacer cambios, ejecuta el siguiente comando:
```
npm run serve
```
El proyecto estará disponible en *http://localhost:8080/*. Vue CLI te indicará si es en un puerto diferente.

## Estructura del proyecto
Este proyecto contiene varias vistas y componentes reutilizables organizados de la siguiente manera:
- #### Vistas (src/views):
  - *HomeView.vue:* Página de inicio
  - *AboutView.vue:* Página "Acerca de Nosotros"
  - *ServicesView.vue:* Página "Nuestros Servicios"
  - *ContactView.vue:* Página de contacto
- #### Componentes (src/components):
  - *NavMenu.vue:* Menú de navegación
  - *ImageBanner.vue:* Banner de imágenes
  - *FilterableList.vue:* Lista filtrable
- *Estilos:* Los estilos de cada componente están definidos en bloques <style scoped> dentro de cada archivo .vue, asegurando que los estilos no afecten otros componentes.

  ## Uso de enrutador
  El proyecto utiliza Vue Router para la navegación entre vistas. Las rutas principales están definidas en el archivo src/router/index.js.
