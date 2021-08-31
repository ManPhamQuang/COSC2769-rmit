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

exports.updateMe = catchAsync(async (req, res, next) => {
  const data = {};
  if (req.body.name) {
    data.name = req.body.name;
  }
  if (req.body.avatar) {
    data.avatar = req.body.avatar;
  }
  if (req.body.description && req.user.role === "expert") {
    data.description = req.body.description;
  }
  const user = await User.findByIdAndUpdate(req.user.id, data, {
    runValidators: true,
    new: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.getExpertInfo = catchAsync(async (req, res, next) => {
  const expert = await User.findById(req.params.expertId).populate({
    path: "rooms",
    populate: "category",
  });
  if (!expert)
    return next(new AppError("No expert found with a given id", 404));
  res.status(200).json({
    status: "success",
    data: {
      expert,
    },
  });
});
