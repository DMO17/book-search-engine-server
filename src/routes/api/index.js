const { Router } = require("express");

const {
  searchForABook,
  saveBookToFavourites,
  deleteBookFromFavourites,
} = require("../../controller/api");

const router = Router();

router.post("/books", searchForABook);
router.put("/books/:bookId", saveBookToFavourites);
router.delete("/books/:bookId", deleteBookFromFavourites);

module.exports = router;
