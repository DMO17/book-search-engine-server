const { model, Schema } = require("mongoose");
const bookSchema = require("./Book");

const userSchema = {
  name: {
    type: String,
    required: true,
    maxLength: 200,
  },
  savedBooks: [bookSchema],
};

const schema = new Schema(userSchema);

const User = model("users", schema);

module.exports = User;
