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
  User.find()
    .then((data) => {
      res.json(data);
    });
});

// for posting new api in existing file
app.post("/users", jsonParser, function (req, res) {
  const data = new User({
    _id: new mongoose.Types.ObjectId(),
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

app.delete("/users/:id",(req,res)=>{
    user.deleteOne({_id:req.params.id}).then((result)=>{
        res.result(201).json(result)
    })
})


app.listen(4000, () => {
  console.log("Successfully");
});
