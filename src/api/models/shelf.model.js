const mongoose = require("mongoose");

const shelfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
  shelf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shelf",
  },
});

const Shelf = mongoose.model("Shelf", shelfSchema);

module.exports = Shelf;
