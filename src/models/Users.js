const { model, Schema } = require("mongoose");
const bookSchema = require("./Book");

const userSchema = {
  username: {
    type: String,
    required: true,
    maxLength: 200,
  },
  books: [bookSchema],
};

const schema = new Schema(userSchema);

const User = model("users", schema);

module.exports = User;
