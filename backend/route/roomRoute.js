const express = require("express");
const router = express.Router();
const {
  getAllRooms,
  getRoom,
  createRoom,
  joinRoom
} = require("../controller/roomController");

router.get("/", getAllRooms);
router.get("/:id", getRoom);
router.post("/", createRoom);
router.post("/join", joinRoom);

module.exports = router;
