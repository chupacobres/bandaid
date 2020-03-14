const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandSchema = new Schema({
  name: {
    type: String, required: true
  },
  email: {
    type: String, required: false
  },
  password: {
    type: String, required: false
  },
  genre: {
    type: String, required: false
  },
  setup: {
    type: String, required: false
  },
  description: {
    type: String, required: false
  },
  youtubeVideoId: {
    type: String, required: false
  },
  date: {
    type: Date, default: Date.now
  }
});

module.exports = mongoose.model("Band", bandSchema);
