const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const compression = require("compression");
const roomRoute = require("./route/roomRoute");
const userRoute = require("./route/userRoute");
const categoryRoute = require("./route/categoryRoute");
const videoRoute = require("./route/videoRoute");
const checkoutRoute = require("./route/checkoutRoute");
const transactionRoute = require("./route/transactionRoute");
const AppError = require("./util/appError");
const GlobalErrorController = require("./controller/errorController");
const { handleWebHook } = require("./controller/checkoutController");

const app = express();

app.use(cors());
app.post("/webhook", express.raw({ type: "application/json" }), handleWebHook);
app.use(express.json());

// Prevent DDOS
app.use(
  "/api",
  rateLimit({
    max: 500,
    windowMs: 1000 * 60 * 60,
    message: "Too many requests. Please try again after an hour",
  })
);

app.use(helmet());
// Prevent query selector injection attacks
app.use(mongoSanitize());
// Prevent XSS attacks
app.use(xss());
// Prevent HTTP Parameter Pollution attacks
app.use(hpp());
// Compress response before sending co client
app.use(compression());

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
