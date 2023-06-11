# API NOTICIAS
Este proyecto es una api para crear, guardar, listar y eliminar noticias con titulo y descripcion, con persistencia en bases de datos Mongodb.

## Instalación

1. Clona este repositorio en tu máquina local o sube a tu servidor.
2. Instala las dependencias ejecutando el comando `npm install`.
3. Asegurate de configurar las variables de entorno con los datos de conexion de la base de datos Mongodb y el puerto.
4. Ejecuta el servidor en modo produccion con `npm start`.
5. Para iniciar el servidor en modo desarrollo con reinicio automatico (usando nodemon) usa `npm run dev`.


##### Variables de entorno 
MONGODB_URI=mongodb://localhost:27017/DB_name //ejemplo   
PORT=3000 //ejemplo   