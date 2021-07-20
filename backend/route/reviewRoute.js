const express = require("express");
const {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
} = require("../controller/reviewController");
const router = express.Router({ mergeParams: true });

router.get("/", getAllReviews);
router.post("/", createReview);
router.patch("/:reviewId", updateReview);
router.delete("/:reviewId", deleteReview);

module.exports = router;
