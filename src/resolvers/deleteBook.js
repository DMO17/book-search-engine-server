const { AuthenticationError } = require("apollo-server");
const { getBookData } = require("../helper/util");
const { User } = require("../models");

const deleteBook = async (_, { input: { username, bookId } }, context) => {
  try {
    if (!context.user) {
      throw new AuthenticationError(
        "You are not Authorized to perform this operation"
      );
    }

    const book = await getBookData(bookId);

    const addBookToUserCollection = await User.findOneAndUpdate(
      { username: username },
      {
        $pull: { books: { id: bookId } },
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

module.exports = deleteBook;
