# Carrito de Compras React con Docker y Nginx

## Descripción
Este proyecto es una aplicación web sencilla de un carrito de compras, construida con React, donde los usuarios pueden agregar y eliminar productos. El proyecto utiliza Docker para contener la aplicación y Nginx para servirla en un entorno de producción.

## Requisitos
Antes de empezar, asegúrate de tener las siguientes herramientas instaladas:
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/en/) (opcional si deseas ejecutar localmente sin Docker)

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

```bash
git clone https://github.com/litmozy/ProyectosDockerVue.git
cd CarritoReactDocker
