const { Schema, model } = require("mongoose");

const newsSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
});

const newsModel = model("news", newsSchema);

module.exports = newsModel;
