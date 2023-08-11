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

// for find all data in the api
app.get("/users", function (req, res) {
  User.find().then((data) => {
    res.json(data);
  });
});

// for posting new api in existing file
app.post("/users", jsonParser, function (req, res) {
  const data = new User({
    _id: new mongoose.Types.ObjectId(),
    question: req.body.question,
    options: req.body.options,
    answer: req.body.answer,
  });
  data
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => console.log("Error..."));
  console.log(data);
  // res.send(data)
});

// 
app.delete("/users/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      console.log("Error with Deleting...");
    });
});

app.put("/users/:id", jsonParser, function (req, res) {
  User.updateOne(
    { _id: req.params.id },
    {
      $set: {
        question: req.body.question,
        options: req.body.options,
        answer: req.body.answer,
      },
    }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(4000, () => {
  console.log("Successfully");
});
