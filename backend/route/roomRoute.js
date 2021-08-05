const express = require("express");
const router = express.Router();
const {
  getAllRooms,
  getRoom,
  createRoom,
  joinRoom,
  updateRoom,
  deleteRoom,
} = require("../controller/roomController");
const {
  isAuthenticated,
  limitToOnly,
} = require("../controller/authController");

router.get("/", getAllRooms);
router.get("/:id", getRoom);
// Route for login users
router.use(isAuthenticated);
router.get("/join", joinRoom);
// Route only for experts
router.use(limitToOnly("expert"));
router.post("/", createRoom);
router.patch("/:id", updateRoom);
router.delete("/:id", deleteRoom);

module.exports = router;
