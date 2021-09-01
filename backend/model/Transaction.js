const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  from: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  to: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  amount: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  room: {
    type: mongoose.Types.ObjectId,
    ref: "Room",
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
