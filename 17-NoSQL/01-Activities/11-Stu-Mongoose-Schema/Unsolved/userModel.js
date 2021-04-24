const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  // * username: A string that will be be required, and also trimmed.
  username: {
    type: String,
    trim: true,
    required: true,
  },
  // * password: A string that will be required, trimmed, and at least 6 characters.
  password: {
    type: String,
    required: true,
    validate: [({ length }) => length >= 6, "Password should be longer."],
    trim: true,
  },
  // * email: A string that must be a valid email address and unique in our collection.
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  // * userCreated: A date that will default to the current date.
  date: {
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
