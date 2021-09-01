const express = require("express");
const router = express.Router();
const {
  createUser,
  login,
  isAuthenticated,
  loginWithGoogle,
} = require("../controller/authController");
const {
  getMe,
  updateMe,
  getExpertInfo,
  sendResetPasswordEmail,
  resetPassword
} = require("../controller/userController");
const reviewRoute = require("./reviewRoute");
// Create merge params for this resource => Route: /api/v1/users/:teacherId/reviews
router.use("/:teacherId/reviews", reviewRoute);
router.get("/getMe", isAuthenticated, getMe);
router.patch("/updateMe", isAuthenticated, updateMe);
router.get("/:expertId", getExpertInfo);
router.post("/loginWithGoogle", loginWithGoogle);
router.post("/signup", createUser);
router.post("/login", login);
router.post("/reset-password", sendResetPasswordEmail);
router.post("/reset-password/:userId/:token", resetPassword);
module.exports = router;
