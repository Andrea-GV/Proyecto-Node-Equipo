const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: false,
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album",
  },
});

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;
