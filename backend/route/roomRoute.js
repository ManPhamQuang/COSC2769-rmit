const express = require("express");
const router = express.Router();
const {
  getAllRooms,
  getRoom,
  createRoom,
} = require("../controller/roomController");

router.get("/", getAllRooms);
router.get("/:id", getRoom);
router.post("/", createRoom);

module.exports = router;
