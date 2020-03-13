const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
// require('./routes')(app);
const cors = require('cors');

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// app.get("/", (req, res) =>
//   res.json({ msg: "Welcome" }))

app.use('/', routes);

app.use('/api/users', require('./routes/users'));
app.use('/api/bands', require('./routes/bands'));
app.use('/api/bandInfo', require('./routes/bandsInfo'));

const PORT = process.env.PORT || 3000;


// //all bands
// app.get("/all", function (req, res) {
//   db.Band.find(
//     {},
//     (err, found) => err ? console.log(err) : res.json(found)
//   );
// });

// //search by genre
// app.get("/all/:search", function (req, res) {
//   db.Band.find(
//     { genre: req.params.search },
//     (err, found) => err ? console.log(err) : res.json(found)
//   );
// });



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandaid");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});




//PROD CORS
// // Set up a whitelist and check against it:
// var whitelist = ['http://example1.com', 'http://example2.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// // Then pass them to cors:
// app.use(cors(corsOptions));