const jwt = require("jsonwebtoken");

const { AuthenticationError } = require("apollo-server");

const secret = "mysecreeeeeet555";
const expiration = "2h";

const signToken = ({ email, username, id }) => {
  const payload = { email, username, id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

const authMiddleware = ({ req }) => {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    throw new AuthenticationError("Invalid token");
  }

  return req;
};

module.exports = { signToken, authMiddleware };
