const axios = require("axios");

const getBookData = async (searchBook) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
    searchBook
  )}`;

  const { data } = await axios.get(url);

  if (!data) {
    console.log("[ERROR]: Search Term resulted in no data from api");
    return res
      .status(400)
      .json({ success: false, message: "Failed to search for books " });
  }

  const bookData = data.items.map(({ id, volumeInfo, searchInfo }) => ({
    id,
    title: volumeInfo?.title,
    authors: volumeInfo?.authors,
    pageCount: volumeInfo?.pageCount,
    imageUrl: volumeInfo?.imageLinks?.thumbnail,
    publishDate: volumeInfo?.publishedDate,
    categories: volumeInfo?.categories,
    rating: volumeInfo?.averageRating,
    previewUrl: volumeInfo?.previewLink,
    description: searchInfo?.textSnippet,
  }));

  return bookData;
};

module.exports = { getBookData };
