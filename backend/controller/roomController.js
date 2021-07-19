const Room = require("../model/Room");
const catchAsync = require("../util/catchAsync");
const { v4: uuidv4 } = require('uuid');

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
  // As soon as we create a new room, we assign a UUID to it
  // It's where the student can join a room later
  // e.g.: domain.com/room/join?uuid=xxx-xxx-xxx-xxx
  req.body.uuid = uuidv4();

  // Create new room
  const room = await Room.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      room,
    },
  });
});
