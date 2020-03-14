const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const banddb = require("./models/band");
const userdb = require("./models/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/api/bands/all/', function (req, res) {
  banddb.find(
    {},
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

app.get('/api/users/all/', function (req, res) {
  userdb.find(
    {},
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