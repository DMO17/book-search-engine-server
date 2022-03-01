const { getBookData } = require("../helper/util");
const { User } = require("../models");

const deleteBook = async (_, { input: { username, bookId } }) => {
  try {
    const book = await getBookData(bookId);

    const addBookToUserCollection = await User.findOneAndUpdate(
      { name: username },
      {
        $pull: { books: { id: bookId } },
      },
      { new: true }
    );

    console.log(username, bookId);

    return addBookToUserCollection;
  } catch (error) {
    console.log(
      `[ERROR]: Failed to add book to user collection | ${error.message}`
    );
  }
};

module.exports = deleteBook;
