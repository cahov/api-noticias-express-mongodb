const express = require("express");
const app = express();
const router = require("./routes/index.routes.js");

//middlewares
app.use(express.urlencoded({ extended: false }));
// Middleware para habilitar el CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
//routes
app.use(router);

module.exports = app;
