const User = require("../model/User");
const catchAsync = require("../util/catchAsync");

exports.createUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});
