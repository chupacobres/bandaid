const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const router = express.Router();
//models
const banddb = require("./models/BandSchema");
// const userdb = require("./models/User");

const bodyParser = require('body-parser');
const cors = require('cors');

// const {check, validationResult} = require('express-validator/check')

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.json({ extended: false}));
app.use(cors());


// //GET login auth email and password mongoose validator
// app
// banddb.find({email: })



// // POST login public express-validator
// app.get('/bands/login', [
//   check('email', 'email is required')
//   .isEmail(),
//   check('password', 'Please enter a password with 6 or more characters')
//   .isLength({ min:6})
// ],
// (req, res) => {
//   // res.send(req.body)
//   const errors = validationResult(req);
//   if(!errors.isEmpty()) {
//     return res.status(400).json({errors: errors.array()})
//   }
//   res.send('passed')
// }
// );

// GET bands
app.get('/bands', function (req, res) {
  banddb.find(
    {},
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

app.post('/bands/add', function (req, res) {
  // console.log("POST req for SignUpForm", req.body)
banddb.create(req.body,
(err, found) => err ? console.log(err) : res.json(found)
);
});

app.get('/bands/:genre', function (req, res) {
  banddb.find(
    {genre: req.params.genre},
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandaid");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});