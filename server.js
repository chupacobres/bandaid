const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const banddb = require("./models/band");
const userdb = require("./models/user");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(cors());



app.get('/users', function (req, res) {
  userdb.find(
    {},
    (err, found) => err ? console.log(err) : res.json(found)
  );
});


//GET all bands
app.get('/bands', function (req, res) {
  banddb.find(
    {},
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

//POST add a band
app.post('/bands/add', function (req, res) {
  // console.log("POST req for SignUpForm", req.body)
  banddb.create(req.body,
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

//GET band by genre
app.get('/bands/genre/:genre', function (req, res) {
  banddb.find(
    { genre: req.params.genre },
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

//GET one band by id to...
app.get('/bands/:id', function (req, res) {
  banddb.findOne(
    { id: req.params._id },
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

//...edit info of existing band
app.post('/bands/login', function (req, res) {
  banddb.findOne(req.body,
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

app.put('/bands/:id', function (req, res) {
  banddb.findOneAndUpdate({ _id: req.params.id }, { $set: { email: req.body.email } },
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

// Cat.findOneAndUpdate({age: 17}, {$set:{name:"Naomi"}},function(err, doc){
//   if(err){
//       console.log("Something wrong when updating data!");
//   }
//   console.log(doc);
// });


//Server port, back end 
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandaid");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});