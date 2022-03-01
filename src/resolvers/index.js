const savedBooks = require("./savedBooks");
const searchBooks = require("./searchBooks");

const resolvers = {
  Query: {
    searchBooks,
  },
  Mutation: {
    savedBooks,
  },
};

module.exports = resolvers;
