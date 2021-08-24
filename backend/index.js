const express = require("express");
const cors = require("cors");
const roomRoute = require("./route/roomRoute");
const userRoute = require("./route/userRoute");
const categoryRoute = require("./route/categoryRoute");
const videoRoute = require("./route/videoRoute");
const checkoutRoute = require("./route/checkoutRoute");
const transactionRoute = require("./route/transactionRoute");
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
app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/videos", videoRoute);
app.use("/api/v1/checkouts", checkoutRoute);
app.use("/api/v1/transactions", transactionRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Given url ${req.originalUrl} does not exist`, 404));
});

app.use(GlobalErrorController);

module.exports = app;
