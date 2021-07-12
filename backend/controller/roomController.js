const Room = require("../model/Room");
const catchAsync = require("../util/catchAsync");

exports.getAllRooms = catchAsync(async (req, res, next) => {
  const rooms = await Room.find();

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
