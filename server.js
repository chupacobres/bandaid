const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const router = express.Router();
const banddb = require("./models/bands");
const userdb = require("./models/user");

const cors = require('cors');

const { check, validationResult } = require('express-validator')

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use(cors());


// //GET login auth email and password mongoose validator
// app
// banddb.find({email: })

// // POST login public express-validator
app.post('/login', [
  check('email', 'email is required').isEmail(),
  check('password', 'Please enter a password with 6 or more characters')
    .isLength({ min: 6 })
],
  async (req, res) => {
    // res.send(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body;

    try {
      let user = await userdb.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' })
      }
      user = new User({
        email,
        password
      });
    } catch (error) {
    }
  }
);

// GET bands
app.get('/bands', function (req, res) {
  banddb.find(
    {},
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

app.post('/bands/add', function (req, res) {
  console.log("POST req for SignUpForm", req.body)
  banddb.create(req.body,
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

app.get('/bands/:genre', function (req, res) {
  banddb.find(
    { genre: req.params.genre },
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