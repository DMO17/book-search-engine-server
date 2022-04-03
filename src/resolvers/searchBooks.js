const axios = require("axios");
const { getBookData } = require("../helper/util");

const searchBooks = async (_, { searchTerm }) => {
  try {
    const books = await getBookData(searchTerm);
    return books;
  } catch (error) {
    console.log(`[ERROR]: Failed to search for books | ${error.message}`);
  }
};

module.exports = searchBooks;
