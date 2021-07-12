const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  endedAt: Date,
  status: {
    type: String,
    enum: {
      values: ["pending", "active", "over"],
      message: "Status must be pending, active, or over",
    },
    default: "pending",
  },
  thumbnail: {
    type: String,
    default: "room.png",
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  url: String,
  videoUrl: String,
});

module.exports = mongoose.model("Room", roomSchema);
