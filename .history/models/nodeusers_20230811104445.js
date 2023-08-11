const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  address: String,
});
module.exports = mongoose.model("nodeuser", userSchema);
