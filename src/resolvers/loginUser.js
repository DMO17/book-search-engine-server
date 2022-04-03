const { User } = require("../models");
const { AuthenticationError } = require("apollo-server");
const { signToken } = require("../helper/authUtil");
const loginUser = async (_, { input: { email, password } }) => {
  try {
    const isEmailValid = await User.findOne({ email });
    if (!isEmailValid) {
      console.log("[Error]: Failed to login | Email doesnt exist");
      throw new AuthenticationError("Failed to login ");
    }

    const isPasswordValid = await isEmailValid.checkPassword(password);

    if (!isPasswordValid) {
      console.log("[Error]: Failed to login | Password doesnt match");
      throw new AuthenticationError("Failed to login ");
    }

    return { token: signToken(isEmailValid), user: isEmailValid };
  } catch (error) {}
};

module.exports = loginUser;
