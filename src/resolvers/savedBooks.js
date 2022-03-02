const { getBookData } = require("../helper/util");
const { User } = require("../models");

const savedBooks = async (_, { input: { username, bookId } }) => {
  try {
    const book = await getBookData(bookId);
    console.log(book[0]);
    const addBookToUserCollection = await User.findOneAndUpdate(
      { username: username },
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
