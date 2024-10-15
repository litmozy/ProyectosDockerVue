# Proyecto de Lista de Profesores con Backend y Frontend en Docker

## Descripción
Este proyecto es una aplicación full-stack que permite gestionar una lista de profesores. El backend está construido con Node.js y MySQL, mientras que el frontend utiliza React. Docker Compose se utiliza para levantar los servicios de backend, frontend y la base de datos MySQL.

## Requisitos
Asegúrate de tener instalado lo siguiente antes de continuar:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Estructura del Proyecto
El proyecto está organizado en dos carpetas principales:
- **backend/**: Contiene el código del servidor Node.js.
- **frontend/**: Contiene el código de la aplicación React.

## Pasos para Configurar y Ejecutar el Proyecto

### 1. Descargar el fólder de repositorio o clonar:
Y luego navega:

```
# Luego de descargar fólder de repositorio:
cd CarritoReactDocker
```
### 2. Ejecutar Docker Compose
Para iniciar todos los servicios (backend, frontend y base de datos MySQL), ejecuta el siguiente comando en la raíz del proyecto:
```
docker-compose up --build
```
Esto descargará las imágenes necesarias, construirá el backend y frontend, y luego iniciará los servicios. El backend estará disponible en http://localhost:3001 y el frontend en http://localhost:3000.
### 3. Verificar los Servicios
Accede al frontend en tu navegador en http://localhost:3000.
Accede a la API del backend en http://localhost:3001/api/profesores.
### Parar los Servicios
Si deseas detener los contenedores, ejecuta:
```
docker-compose down
```
Esto detendrá y eliminará todos los contenedores creados.

## Detalles del Backend
El backend está construido en Node.js y utiliza MySQL para almacenar los datos de los profesores.
### Dockerfile del Backend
```
# backend/Dockerfile
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "src/index.js"]

```

### Rutas y Controladores del Backend
GET /api/profesores: Devuelve una lista de todos los profesores desde la base de datos.
### Inicialización de la Base de Datos
El archivo backend/src/config/database.js se encarga de la configuración de la conexión con MySQL. Al iniciar el backend, se crea la tabla profesores si no existe.
## Detalles del Frontend
El frontend está construido con React y se comunica con el backend para obtener y mostrar la lista de profesores.
### Componentes del Frontend
ProfesoresList: Componente que muestra la lista de profesores obtenidos desde el backend.
profesorService.js: Servicio que se encarga de hacer las peticiones HTTP al backend.

### Dockerfile del Frontend
```
# frontend/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

```

### docker-compose.yml
El archivo docker-compose.yml define los tres servicios principales:
```
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "3001:3001"
    environment:
      - DB_HOST=db
      - DB_USER=root
      - DB_PASSWORD=rootpassword
      - DB_NAME=profesores_db
    depends_on:
      - db

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend

  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: profesores_db
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:

```
