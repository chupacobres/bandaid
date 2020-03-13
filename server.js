const express = require("express");
const path = require('path');
const fs = require('fs');

const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser")

const db = require("./models");

const app = express();

// Define middleware here

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Add routes, both API and view
// app.use(routes);

//search by genre
app.get("/all/:search", function (req, res) {
  db.Band.find(
    { genre: req.params.search },
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

//all bands
app.get("/all", function (req, res) {
  db.Band.find(
    { },
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

//post to db from 
// app.post("/account", function (req, res){
//   db.bandaid.insertOne ({name: "Eti&Juan"},
//   (err, found) => err ? console.log(err) : res.json(found)
//   );
// });

// app.post('/api/account', (req, res) => {
//   const doc = new Message({ message: req.body.message })
//   doc.save();
// });


// import band from './models/band';



// app.post('/api/', (req, res) => {
//   const newBand = new Band({ band: req.body.message })
//   newBand.save();
// });


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandaid");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
