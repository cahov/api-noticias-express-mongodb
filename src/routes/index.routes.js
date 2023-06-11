const express = require("express");
const router = express.Router();
const News = require("../models/news.model.js");

router.get("/", (req, res) => {
  res.send("API SIMPLE NOTICIAS");
});

router.get("/news", async (req, res) => {
  try {
    const news = await News.find({}).lean();
    res.json(news);
  } catch (error) {
    console.log("Error al listar las noticias:", error);
    res.status(500).send("Error al mostrar las noticias");
  }
});

router.get("/news/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id).lean();
    res.json(news);
  } catch (error) {
    console.log("Error al listar las noticias:", error);
    res.status(500).send("Error al mostrar las noticias");
  }
});

router.post("/news/add", async (req, res) => {
  try {
    const news = News(req.body);
    await news.save();
    res.redirect("/");
  } catch (error) {
    if (error.code === 11000) {
      const errorMessage = "El título de la noticia ya existe";
      res.status(500).send(errorMessage);
    } else {
      console.log("Error al guardar la noticia:", error);
      res.status(500).send("Error al guardar la noticia");
    }
  }
});

router.get("/news/delete/:id", async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.log("Error al eliminar la noticia:", error);
    res.status(500).send("Error al eliminar la noticia");
  }
});

router.get("/delete/all", async (req, res) => {
  try {
    await News.deleteMany({});
    res.redirect("/");
  } catch (error) {
    console.log("Error al eliminar todas las noticias:", error);
    res.status(500).send("Error al eliminar todas las noticias");
  }
});

module.exports = router;
