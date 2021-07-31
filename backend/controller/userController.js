const User = require("../model/User");
const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError");

exports.getMe = catchAsync(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    status: "success",
    data: user,
  });
});
