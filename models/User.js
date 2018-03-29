const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  name: { familyName: String, givenName: String },
  email: String,
  image: String,
  isAdmin: Boolean
});

mongoose.model("users", userSchema);
