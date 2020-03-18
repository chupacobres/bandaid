const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const banddb = require("./models/Band");
const userdb = require("./models/User");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(cors());

//Define Routes
app.use('/api/users', require('./routes/user'))
app.use('/api/bands', require('./routes/bands'))
app.use('/api/auth', require('./routes/auth'))


// app.get('/users', function (req, res) {
//   userdb.find(
//     {},
//     (err, found) => err ? console.log(err) : res.json(found)
//   );
// });

// //GET band by genre RESULTS
// app.get('/bands/genre/:genre', function (req, res) {
//   banddb.find(
//     { genre: req.params.genre },
//     (err, found) => err ? console.log(err) : res.json(found)
//   );
// });

// //GET one band by id to... RESULTS
// app.get('/bands/:id', function (req, res) {
//   banddb.findOne(
//     { id: req.params._id },
//     (err, found) => err ? console.log(err) : res.json(found)
//   );
// });

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



//Server port, back end 
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandaid");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});