const express = require("express");
const app = express();
const mongoose = require("mongoose");
let User = require("./models/nodeusers");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
mongoose.connect(
  "mongodb+srv://root:root@cluster0.au0wghs.mongodb.net/demo?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// khali id and name field nodata joto hoy tyare
app.get("/users", function (req, res) {
  User.find()
    .select("name")
    .then((data) => {
      res.json(data);
    });
});
// do this code and check with postman
app.post("/users", jsonParser, function (req, res) {
  const data = new User({
    _id: Number,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
  });
  data
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => console.log("Error..."));
});
app.listen(4000, () => {
  console.log("Successfully");
});
