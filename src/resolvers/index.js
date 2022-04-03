const deleteBook = require("./deleteBook");
const savedBooks = require("./savedBooks");
const searchBooks = require("./searchBooks");
const getUsersSavedBooks = require("./getUsersSavedBooks");
const addUser = require("./addUser");
const loginUser = require("./loginUser");

const resolvers = {
  Query: {
    searchBooks,
    getUsersSavedBooks,
  },
  Mutation: {
    savedBooks,
    deleteBook,
    addUser,
    loginUser,
  },
};

module.exports = resolvers;
