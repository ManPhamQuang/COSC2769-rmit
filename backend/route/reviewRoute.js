const express = require("express");
const {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
} = require("../controller/reviewController");
const { isAuthenticated } = require("../controller/authController");
const router = express.Router({ mergeParams: true });
// Only login user can give review
router.use(isAuthenticated);
router.get("/", getAllReviews);
router.post("/", createReview);
router.patch("/:reviewId", updateReview);
router.delete("/:reviewId", deleteReview);

module.exports = router;
