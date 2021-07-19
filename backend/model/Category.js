const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: [true, "name is required"], }
});

module.exports = mongoose.model("Category", categorySchema);
