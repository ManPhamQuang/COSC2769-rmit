const express = require("express");
const app = express();
const roomRoute = require("./route/roomRoute");
const userRoute = require("./route/userRoute");
const AppError = require("./util/appError");
const GlobalErrorController = require("./controller/errorController");
app.use(express.json());

app.use("/helloworld", (req, res) => {
  res.status(200).json({
    message: "Test successfully",
  });
});

app.use("/api/v1/rooms", roomRoute);
app.use("/api/v1/users", userRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Given url ${req.originalUrl} does not exist`, 404));
});

app.use(GlobalErrorController);

module.exports = app;
