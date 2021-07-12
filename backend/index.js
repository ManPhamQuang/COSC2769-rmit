const express = require("express");
const app = express();

app.use("/helloworld", (req, res) => {
  res.status(200).json({
    message: "Test successfully",
  });
});

module.exports = app;
