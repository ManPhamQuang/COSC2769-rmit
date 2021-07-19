const express = require("express");
const {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
} = require("../controller/reviewController");
const router = express.Router();
const router = express.Router({ mergeParams: true });

router.get("/", getAllReviews);
router.post("/", createReview);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;
