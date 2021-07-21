const express = require("express");
const router = express.Router();
const { createUser, login } = require("../controller/authController");
const reviewRoute = require("./reviewRoute");
// Create merge params for this resource => Route: /api/v1/users/:teacherId/reviews
router.use("/:teacherId/reviews", reviewRoute);
router.post("/signup", createUser);
router.post("/login", login);
module.exports = router;
