const deleteBook = require("./deleteBook");
const savedBooks = require("./savedBooks");
const searchBooks = require("./searchBooks");

const resolvers = {
  Query: {
    searchBooks,
  },
  Mutation: {
    savedBooks,
    deleteBook,
  },
};

module.exports = resolvers;
