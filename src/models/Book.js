const { Schema } = require("mongoose");

const bookSchema = new Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  authors: [
    {
      type: String,
    },
  ],
  pageCount: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  publishDate: {
    type: String,
  },
  categories: [
    {
      type: String,
    },
  ],
  rating: {
    type: Number,
  },
  previewUrl: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = bookSchema;
