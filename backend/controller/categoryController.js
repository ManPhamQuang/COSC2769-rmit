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

exports.createCategory = catchAsync(async (req, res, next) => {
  // Get name in the body
  const name = req.body.name;
  if (!name) {
    return res.status(400).json({
      status: "error",
      message: "Missing Name in body",
    });
  }

  // Find if it exist
  var category = await Category.Adventure.findOne({name});
  if (category) {
    return res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  }

  // Create new one
  category = await Category.create({name})
  res.status(201).json({
    status: "success",
    data: {
      category,
    },
  });
});
