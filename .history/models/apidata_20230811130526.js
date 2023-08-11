const mongoose = require("mongoose");
let data = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  question: String,
  options: String,
  answer: Number,
});
module.exports = mongoose.model("apidata", userSchema);
