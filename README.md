
# API noticias

Esta API permite crear, guardar, obtener y eliminar noticias, con persistencia en bases de datos MONGODB.

## Endpoints

### Obtener la página de inicio


GET /

Este endpoint devuelve un mensaje de bienvenida "API SIMPLE NOTICIAS".

### Crear una nueva noticia

```plaintext
POST /news
```

Este endpoint permite crear una nueva noticia. Los datos de la noticia deben enviarse a través de un formulario web.

#### Parámetros de solicitud

- `title` (string): Título de la noticia.
- `description` (string): Descripción de la noticia.
- `author` (string): Autor de la noticia.

#### Respuesta exitosa

Código de estado: 201 (Created)

Ejemplo de respuesta:

```plaintext
Noticia creada exitosamente.
```

### Obtener todas las noticias

```plaintext
GET /news
```

Este endpoint devuelve todas las noticias disponibles.

#### Parámetros de consulta

Ninguno.

#### Respuesta exitosa

Código de estado: 200 (OK)

Ejemplo de respuesta:

```json
[
  {
    "title": "Título de la noticia 1",
    "description": "Descripción de la noticia 1",
    "author": "Autor de la noticia 1"
  },
  {
    "title": "Título de la noticia 2",
    "description": "Descripción de la noticia 2",
    "author": "Autor de la noticia 2"
  }
]
```

### Obtener una noticia por ID

```plaintext
GET /news/:id
```

Este endpoint devuelve una noticia específica basada en su ID.

#### Parámetros de ruta

- `id` (string): ID de la noticia.

#### Respuesta exitosa

Código de estado: 200 (OK)

Ejemplo de respuesta:

```json
{
  "title": "Título de la noticia",
  "description": "Descripción de la noticia",
  "author": "Autor de la noticia"
}
```

### Eliminar una noticia

```plaintext
DELETE /news/:id
```

Este endpoint permite eliminar una noticia basada en su ID.

#### Parámetros de ruta

- `id` (string): ID de la noticia a eliminar.

#### Respuesta exitosa

Código de estado: 200 (OK)

Ejemplo de respuesta:

```plaintext
Noticia eliminada exitosamente.
```

## Variables de entorno

Deben configurarse las siguientes variables de entorno en tu archivo .env:
- `MONGODB_URI`: La URL de conexión a la base de datos MongoDB.
- `PORT`: El puerto en el que se ejecuta el servidor (por defecto es 3000).

## Requisitos
- Node.js
- MongoDB

## Instalación

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Configura las variables de entorno.
4. Ejecuta `npm start` para iniciar el servidor en modo producción.
5. Ejecuta `npm run dev` para iniciar el servidor en modo desarrollo (con nodemon)
