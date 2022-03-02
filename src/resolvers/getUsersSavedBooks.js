const { User } = require("../models");

const getUsersSavedBooks = async (_, { username }) => {
  try {
    console.log(username);
    const usersBooks = await User.findOne({ username });

    return usersBooks;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getUsersSavedBooks;
