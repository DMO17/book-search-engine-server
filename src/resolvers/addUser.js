const { signToken } = require("../helper/authUtil");
const { User } = require("../models");

const addUser = async (_, { input: { username, email, password } }) => {
  try {
    const newUser = await User.create({ username, email, password, books: [] });
    return {
      token: signToken(newUser),
      user: newUser,
    };
  } catch (error) {
    console.log(`ERROR: Unable to create new user |${error.message}`);
  }
};

module.exports = addUser;
