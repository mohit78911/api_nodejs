const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name : req.body.name,
  question: String,
  options: String,
  answer: Number,
});
module.exports = mongoose.model("nodeuser", userSchema);
