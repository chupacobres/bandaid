const mongoose = require("mongoose");

const BandSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  }
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  // password: {
  //   type: String,
  //   required: true
  // },
  // genre: {
  //   type: String,
  //   required: true
  // },
  // setup: {
  //   type: String,
  //   required: true
  // },
  // description: {
  //   type: String,
  //   required: true
  // },
  // youtubeVideoId: {
  //   type: String,
  //   required: true
  // },
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
});

module.exports = mongoose.model("Band", BandSchema);
