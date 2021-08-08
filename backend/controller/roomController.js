const Room = require("../model/Room");
const Category = require("../model/Category");
const Transaction = require("../model/Transaction");
const catchAsync = require("../util/catchAsync");
const ApiFeature = require("../util/apiFeature");
const { v4: uuidv4 } = require("uuid");
const AppError = require("../util/appError");

exports.getAllRooms = catchAsync(async (req, res, next) => {
  const { mongooseQuery: query } = new ApiFeature(req.query, Room.find())
    .filter()
    .sort()
    .pagination();
  // Execute the final query
  const rooms = await query.populate("category").populate("createdBy");
  res.status(200).json({
    status: "success",
    length: rooms.length,
    data: {
      rooms,
    },
  });
});

exports.getRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.params.id)
    .populate("category")
    .populate("createdBy");

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
  // e.g.: domain.com/api/v1/rooms/join?uuid=xxx-xxx-xxx-xxx
  const data = { ...req.body };
  data.uuid = uuidv4();
  data.createdBy = req.user.id;
  // Create new room
  const room = await Room.create(data);
  res.status(201).json({
    status: "success",
    data: {
      room,
    },
  });
});

exports.joinRoom = catchAsync(async (req, res, next) => {
  console.log("----------------")
  // Find the room
  const room = await Room.findById(req.query.id)
    .populate("category")
    .populate("createdBy");
  if (!room) {
    return res.status(404).json({
      status: "error",
      message: "Room not found",
    });
  }

  var isAbleToJoin = false;
  const createdByUser = room.createdBy;

  // check if this room is created by expert

  // Comment this function because we haven't implemented the Transaction yet
  // Enable all for testing
  isAbleToJoin = true;

  // const user = req.user;
  // if (user.role == "expert") {
  //   isAbleToJoin = createdByUser.id == user.id;
  // }
  // // check if this room is paied by normal use
  // else if (user.role == "user") {
  //   const transaction = await Transaction.findOne({
  //     from: user,
  //     to: createdByUser,
  //     room: room,
  //   });
  //   isAbleToJoin = transaction != null;
  // }

  if (isAbleToJoin) {
    return res.status(200).json({
      status: "success",
      data: {
        room,
      },
    });
  } else {
    return res.status(404).json({
      status: "error",
      message: "Do not allow to join this room.",
    });
  }
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
  const rooms = await Room.find({ category })
    .populate("category")
    .populate("createdBy");
  res.status(200).json({
    status: "success",
    data: {
      rooms,
    },
  });
});

exports.updateRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.params.id);
  if (!room) return next(new AppError("No room found with a given id", 404));
  if (room.createdBy.toString() !== req.user.id)
    return next(new AppError("You are not the author of this room", 403));
  const updatedValue = { ...req.body };
  ["uuid", "url", "videoUrl"].forEach(field => delete updatedValue[field]);
  const updatedRoom = await Room.findByIdAndUpdate(
    req.params.id,
    updatedValue,
    { new: true, runValidators: true }
  );
  res.status(200).json({ status: "success", data: { room: updatedRoom } });
});

exports.deleteRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.params.id);
  if (!room) return next(new AppError("No room found with a given id", 404));
  if (room.createdBy.toString() !== req.user.id)
    return next(new AppError("You are not the author of this room", 403));
  await Room.findByIdAndDelete(req.params.id);
  res.status(204).end();
});
