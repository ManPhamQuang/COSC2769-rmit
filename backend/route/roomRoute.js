const express = require("express");
const router = express.Router();
const {
  getAllRooms,
  getRoom,
  createRoom,
  fetchRoomByCategory
} = require("../controller/roomController");

router.get("/category", fetchRoomByCategory)
router.get("/", getAllRooms);
router.get("/:id", getRoom);
router.post("/", createRoom);

module.exports = router;
