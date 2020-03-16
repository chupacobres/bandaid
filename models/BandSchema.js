const mongoose = require("mongoose");

const bandSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique: false
  },
  password: {
    type: String,
    required: false
  },
  genre: {
    type: String,
    required: false
  },
  setup: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  youtubeVideoId: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("BandSchema", bandSchema);
