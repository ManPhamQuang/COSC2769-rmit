const express = require("express");
const router = express.Router();
const {
  getAllRooms,
  getRoom,
  createRoom,
  joinRoom,
  updateRoom,
  deleteRoom,
  searchRoomsByName
} = require("../controller/roomController");
const {
  isAuthenticated,
  limitToOnly,
} = require("../controller/authController");

router.get("/", getAllRooms);
router.get("/search", searchRoomsByName)
router.get("/join", isAuthenticated, joinRoom);
router.get("/:id", getRoom);

// Route only for experts
router.use(isAuthenticated);
router.use(limitToOnly("expert"));
router.post("/", createRoom);
router.patch("/:id", updateRoom);
router.delete("/:id", deleteRoom);

module.exports = router;
