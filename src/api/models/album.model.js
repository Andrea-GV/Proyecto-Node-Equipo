const mongoose = require("mongoose");

// Definición del esquema del álbum
const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: false,
  },
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
