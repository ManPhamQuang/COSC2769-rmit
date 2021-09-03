const User = require("../model/User");
const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError");
const crypto = require("crypto");
const { sendEmail } = require("../util/utils");
const bcrypt = require("bcrypt");

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
  if (expert.role !== "expert")
    return next(new AppError("Only expert info is public", 404));
  res.status(200).json({
    status: "success",
    data: {
      expert,
    },
  });
});

exports.sendResetPasswordEmail = catchAsync(async (req, res, next) => {
  if (!req.body.email) {
    return next(
      new AppError("Please provide email to reset your password", 400)
    );
  }

  // Find user by email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("Could not found any user, which is associated with this email.", 400));
  }

  // Create token
  const token = crypto.randomBytes(32).toString("hex");

  // Sent a reset password to user email
  const link = `${process.env.BASE_URL}/user/reset-password?id=${user._id}&token=${token}`;
  await sendEmail(user.email, link);

  // After sending email success, we save the token
  await User.findByIdAndUpdate(user.id, {
    resetPasswordToken: token,
    expiredTokenAt: Date.now() + 1000 * 60 * 15 // 15 min expiry
  });

  // Done
  res.status(200).json({
    status: "success",
    data: {
      message: "Reset password is sent."
    },
  });
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // Find a user by given id and reset-password token
  const user = await User.findOne({ _id: req.body.userId, resetPasswordToken: req.body.token});
  if (!user) {
    return next(new AppError("Invalid reset password link", 400));
  }

  // Verify token expiry
  const now = new Date();
  if (now.getTime() >= user.expiredTokenAt.getTime()) {
    return next(new AppError("Your reset password token is expired", 400));
  }

  // Verify password is exist
  if (!req.body.password) {
    return next(
      new AppError("Please provide new password", 400)
    );
  }

  // Update new password
  await User.findByIdAndUpdate(user.id, {
    password: await bcrypt.hash(req.body.password, 12),
    resetPasswordToken: undefined,
    expiredTokenAt: undefined
  });

  // Done
  res.status(200).json({
    status: "success",
    data: {
      message: "Reset Done."
    },
  });
});