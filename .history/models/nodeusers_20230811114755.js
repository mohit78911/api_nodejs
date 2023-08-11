const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: String,
  email: String,
  address: String,
});
module.exports = mongoose.model("nodeuser", userSchema);
