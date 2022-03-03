const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const bookSchema = require("./Book");

const userSchema = {
  username: {
    type: String,
    required: true,
    minLength: 5,
  },
  email: {
    type: String,
    required: true,
    maxLength: 200,
  },
  password: {
    type: String,
    required: true,
    maxLength: 200,
  },
  books: [bookSchema],
};

const schema = new Schema(userSchema);

schema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

const User = model("users", schema);

module.exports = User;
