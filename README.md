# Repositorio de Proyectos Vue.js y Docker

Este repositorio contiene cinco proyectos diferentes que muestran ejemplos y aplicaciones desarrolladas con Vue.js, React, Node.js y Docker. A continuación se describen los detalles de cada uno de los proyectos.

## Proyecto 1: Sitio Web Informativo (Vue.js)

### Descripción
Este proyecto es un sitio web informativo creado con Vue.js, que incluye varias vistas y componentes reutilizables.

### Requisitos
- Node.js (versión 12 o superior)
- Vue CLI

### Instalación
```
# Luego de descargar fólder de repositorio:
cd SitioWebTiendaConComponentesYVistas
npm install
npm run serve
```

## Proyecto 2: Rick and Morty App (Vue.js + Docker)

### Descripción
Una aplicación Vue.js que muestra personajes de "Rick and Morty" obtenidos desde una API pública. Incluye paginación, búsqueda y filtrado.

### Requisitos
- Docker
- Node.js

### Instalación
```
# Luego de descargar fólder de repositorio:
cd PersonajesRickAndMorty
docker build -t rick-morty-app .
docker run -d -p 8080:8080 rick-morty-app

```

## Proyecto 3: Hola Mundo en Vue.js

### Descripción
Un proyecto básico que muestra un "Hola Mundo" en Vue.js, utilizando componentes simples y una estructura mínima.

### Requisitos
- Node.js
- Vue CLI

### Instalación
```
# Luego de descargar fólder de repositorio:
cd HolaMundoEnVue
npm install
npm run serve

```

## Proyecto 4: Lista de Profesores (Node.js + React + Docker)

### Descripción
Aplicación full-stack con Node.js, React y MySQL para gestionar una lista de profesores. Utiliza Docker Compose para levantar los servicios de backend, frontend y la base de datos.

### Requisitos
- Docker
- Docker Compose

### Instalación
```
# Luego de descargar fólder de repositorio:
cd CarritoReactDocker
docker-compose up --build
```

## Proyecto 5: Carrito de Compras React (React + Docker)

### Descripción
Aplicación de carrito de compras construida con React y desplegada con Docker y Nginx. Permite agregar y eliminar productos del carrito.

### Requisitos
- Docker
- Node.js

### Instalación
```
# Luego de descargar fólder de repositorio:
cd CarritoReactDocker
docker build -t carrito-compras-react .
docker run -d -p 8080:80 carrito-compras-react
```

## Estructura del Repositorio
Cada proyecto está contenido en su propia carpeta, organizada de la siguiente manera:
- *SitioWebTiendaConComponentesYVistas/:* Proyecto Vue.js para un sitio web informativo.
- *PersonajesRickAndMorty/:* Proyecto Vue.js de Rick and Morty con Docker.
- *HolaMundoEnVue/:* Proyecto básico de "Hola Mundo" en Vue.js.
- *CarritoReactDocker/:* Proyecto full-stack con React y Docker.
- *CarritoReactDocker/:* Proyecto de carrito de compras con React y Docker.
Cada carpeta contiene un README.md con instrucciones detalladas de instalación y ejecución para cada proyecto específico.
