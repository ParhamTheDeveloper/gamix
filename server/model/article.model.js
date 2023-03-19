const { Schema, model } = require("mongoose");

const ArtilceSchema = new Schema({
  author: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  headerImg: { type: String, required: true, trim: true },
  body: { type: String, required: true, trim: true, minLength: 50 },
});

const ArticleModel = model("article", ArtilceSchema);

module.exports = {
  ArticleModel,
};
