const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandSchema = new Schema({
  name: {
    type: String, required: true
  },
  email: {
    type: String, required: true
  },
  password: {
    type: String, required: true
  },
  genre: {
    type: String, required: true
  },
  setup: {
    type: String, required: true
  },
  description: {
    type: String, required: true
  },
  youtubeVideoId: {
    type: String, required: true
  },
  date: {
    type: Date, default: Date.now
  }
});

module.exports = mongoose.model("Band", bandSchema);
