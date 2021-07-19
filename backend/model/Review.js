const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  from: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  to: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  review: {
    type: String,
    required: [true, "Review must not be empty"],
  },
  rating: {
    type: Number,
    required: [true, "Review must have a rating"],
    min: [1, "Review must be above 1.0"],
    max: [5, "Review must be above 5.0"],
  },
});

module.exports = mongoose.model("Rating", reviewSchema);
