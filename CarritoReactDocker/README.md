# Carrito de Compras React con Docker y Nginx

## Descripción
Este proyecto es una aplicación web sencilla de un carrito de compras, construida con React, donde los usuarios pueden agregar y eliminar productos. El proyecto utiliza Docker para contener la aplicación y Nginx para servirla en un entorno de producción.

## Requisitos
Antes de empezar, asegúrate de tener las siguientes herramientas instaladas:
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/en/)

## Estructura del Proyecto

- `Dockerfile`: Define las etapas de construcción de la aplicación y el contenedor de Nginx.
- `nginx.conf`: Configuración de Nginx para servir la aplicación como una SPA (Single Page Application).
- `src/`: Contiene el código fuente de la aplicación React.
  - `App.tsx`: Componente principal de la aplicación.
  - `Cart.jsx`: Muestra los productos agregados al carrito.
  - `CartItem.jsx`: Componente para renderizar cada producto en el carrito.
  - `ProductItem.jsx`: Componente que muestra cada producto disponible.
  - `ProductList.jsx`: Componente que muestra la lista de productos.
  - `main.jsx`: Archivo principal que renderiza la aplicación React.

## Instalación y Configuración

### 1. Clonar el Repositorio
Clona el repositorio a tu máquina local.

```
# Luego de descargar fólder de repositorio:
cd CarritoReactDocker
```
### 2. Construir y Ejecutar con Docker

A continuación, se detallan los pasos para construir y ejecutar la aplicación usando Docker.

#### Paso 1: Construir la Imagen Docker
```
docker build -t carrito-compras-react .
```
#### Paso 2: Ejecutar el Contenedor Docker
```
docker run -d -p 8080:80 carrito-compras-react
```
Este comando ejecutará el contenedor en segundo plano (-d) y expondrá el puerto 8080 de tu máquina local al puerto 80 dentro del contenedor donde Nginx está sirviendo la aplicación.
#### Paso 3: Abrir aplicación
Después de ejecutar el contenedor, abre tu navegador web y navega a:
```
http://localhost:8080
```

## Archivos importantes:
### Dockerfile:
Este archivo contiene las instrucciones para construir la imagen Docker. Usa la imagen base de Node.js para compilar la aplicación y luego Nginx para servirla en producción.
```
# Especifica la imagen base.
FROM node:20-alpine AS build
WORKDIR /app

# Copia los archivos de dependencias e instala las dependencias
COPY package*.json ./
RUN npm ci

# Copia el resto de los archivos y construye la aplicación
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Configuración de nginx para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

```
### nginx.conf:
Este archivo configura Nginx para servir la aplicación como una SPA. Si el servidor no encuentra un archivo para la ruta solicitada, redirige la solicitud a index.html, lo que es útil para las rutas gestionadas por React.
```
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
