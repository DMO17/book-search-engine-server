const { AuthenticationError } = require("apollo-server");
const { User } = require("../models");

const getUsersSavedBooks = async (_, { username }, context) => {
  try {
    if (!context.user) {
      throw new AuthenticationError(
        "You are not Authorized to perform this operation"
      );
    }

    const usersBooks = await User.findOne({ username });

    return usersBooks;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getUsersSavedBooks;
