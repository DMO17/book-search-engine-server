const deleteBook = require("./deleteBook");
const savedBooks = require("./savedBooks");
const searchBooks = require("./searchBooks");
const getUsersSavedBooks = require("./getUsersSavedBooks");

const resolvers = {
  Query: {
    searchBooks,
    getUsersSavedBooks,
  },
  Mutation: {
    savedBooks,
    deleteBook,
  },
};

module.exports = resolvers;
