const axios = require("axios");
const { getBookData } = require("../../helper/util");
const { User } = require("../../models");

const searchForABook = async (req, res) => {
  try {
    const { searchTerm } = req.body;

    const books = await getBookData(searchTerm);

    return res.json({
      success: true,
      books,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to search for books | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to search for books" });
  }
};

const saveBookToFavourites = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await getBookData(bookId);
    const addBookToCollection = await User.findOneAndUpdate(
      { name: "tester" },
      {
        $push: { savedBooks: book },
      },
      { new: true }
    );
    if (!addBookToCollection) {
      console.log("[ERROR]: No User with that id exists");
      return res.status(400).json({
        success: false,
        message: "Failed to add Book to user collection",
      });
    }
    return res.json({ success: true, addBookToCollection });
  } catch (error) {
    console.log(
      `[ERROR]: Failed to add book to user collection | ${error.message}`
    );
    return res
      .status(500)
      .json({ success: false, error: "Failed to add book to collection" });
  }
};

const deleteBookFromFavourites = (req, res) => {};

module.exports = {
  searchForABook,
  saveBookToFavourites,
  deleteBookFromFavourites,
};
