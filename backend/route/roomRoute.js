const express = require("express");
const router = express.Router();
const {
  getAllRooms,
  getRoom,
  createRoom,
  joinRoom,
  expertRoom
} = require("../controller/roomController");
const { isAuthenticated } = require("../controller/authController");

router.get("/join", isAuthenticated, joinRoom);
router.get("/expert", isAuthenticated, expertRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoom);
router.post("/", isAuthenticated, createRoom);

module.exports = router;
