const Category = require("../model/Category");
const catchAsync = require("../util/catchAsync");

exports.getAllCategory = catchAsync(async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({
    status: "success",
    data: {
      categories,
    },
  });
});