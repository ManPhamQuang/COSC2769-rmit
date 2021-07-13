const express = require("express");
const cors = require("cors");
const roomRoute = require("./route/roomRoute");
const userRoute = require("./route/userRoute");
const AppError = require("./util/appError");
const GlobalErrorController = require("./controller/errorController");
const app = express();
app.use(express.json());
app.use(cors());

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
