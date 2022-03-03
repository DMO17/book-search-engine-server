const jwt = require("jsonwebtoken");

const signToken = ({ email, username, id }) => {
  const secret = "mysecreeeeeet555";
  const expiration = "2h";
  const payload = { email, username, id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = { signToken };
