const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema([
  {
    first_name: {
      type: String,
      required: false,
    },
    last_name: {
      type: String,
      required: false,
    },
    second_name: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
  },
]);

UserModel = mongoose.model("UsersDataBase", userSchema);

module.exports = UserModel;
