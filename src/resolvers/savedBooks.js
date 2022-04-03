const { AuthenticationError } = require("apollo-server");
const { getBookData } = require("../helper/util");
const { User } = require("../models");

const savedBooks = async (_, { input: { username, bookId } }, context) => {
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
