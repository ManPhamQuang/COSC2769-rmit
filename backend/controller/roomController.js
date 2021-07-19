const Room = require("../model/Room");
const Category = require("../model/Category");
const catchAsync = require("../util/catchAsync");

exports.getAllRooms = catchAsync(async (req, res, next) => {
  const rooms = await Room.find().populate('category');

  res.status(200).json({
    status: "success",
    length: rooms.length,
    data: {
      rooms,
    },
  });
});

exports.getRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      room,
    },
  });
});

exports.createRoom = catchAsync(async (req, res, next) => {
  const room = await Room.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      room,
    },
  });
});

exports.fetchRoomByCategory = catchAsync(async (req, res, next) => {
  // Get category name
  let name = req.query.name;
  if (!name) {
    return res.status(400).json({
      status: "error",
      message: "Missing name param",
    });
  }

  // Find a category with a given name
  const category = await Category.findOne({ name });
  if (!category) {
    return res.status(404).json({
      status: "error",
      message: "Could not find a Category",
    });
  }

  // Fetch all room with given category
  const rooms = await Room.find({ category }).populate("category");
  res.status(200).json({
    status: "success",
    data: {
      rooms,
    },
  });
});
