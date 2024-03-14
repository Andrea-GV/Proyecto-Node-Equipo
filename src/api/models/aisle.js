const mongoose = require("mongoose");

// Definición del esquema del álbum
const albumSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  }
});

const Aisle = mongoose.model("Aisle", aisleSchema);

module.exports = Aisle;
