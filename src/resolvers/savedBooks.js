const { getBookData } = require("../helper/util");
const { User } = require("../models");

const savedBooks = async (_, { username, bookId }) => {
  try {
    const book = await getBookData(bookId);

    const addBookToUserCollection = await User.findOneAndUpdate(
      { name: username },
      {
        $push: { books: book[0] },
      },
      { new: true }
    );

    return addBookToUserCollection;
  } catch (error) {
    console.log(
      `[ERROR]: Failed to add book to user collection | ${error.message}`
    );
  }
};

module.exports = savedBooks;
