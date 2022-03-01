const savedBooks = require("./savedBooks");
const searchBooks = require("./searchBooks");

const resolvers = {
  Query: {
    searchBooks,
    savedBooks,
  },
};

module.exports = resolvers;
