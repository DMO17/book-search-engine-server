const { model, Schema } = require("mongoose");
const bookSchema = require("./Book");

const bookCollectionSchema = {
  savedBooks: [bookSchema],
};

const schema = new Schema(bookCollectionSchema);

const BookCollection = model("bookCollection", schema);

module.exports = BookCollection;
