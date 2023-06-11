const express = require("express");
const app = express();
const router = require("./routes/index.routes.js");

//middlewares
app.use(express.urlencoded({ extended: false }));
//routes
app.use(router);

module.exports = app;
