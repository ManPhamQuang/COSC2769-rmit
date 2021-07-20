const Review = require("../model/Review");
const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError");

exports.createReview = catchAsync(async (req, res, next) => {
  // Test
  const from = req.body.from;
  const review = await Review.create({
    ...req.body,
    from,
    to: req.params.teacherId,
  });

  res.status(201).json({
    status: "success",
    data: {
      review,
    },
  });
});

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find({ to: req.params.teacherId });

  res.status(200).json({
    status: "success",
    length: reviews.length,
    data: {
      reviews,
    },
  });
});

exports.updateReview = catchAsync(async (req, res, next) => {
  const review = await Review.findByIdAndUpdate(
    req.params.reviewId,
    {
      review: req.body.review,
      rating: req.body.rating,
    },
    {
      runValidators: true,
      new: true,
    }
  );
  if (!review)
    return next(new AppError("No review was found with a given ID", 404));
  res.status(200).json({
    status: "success",
    data: {
      review,
    },
  });
});

exports.deleteReview = catchAsync(async (req, res, next) => {
  const review = await Review.findByIdAndDelete(req.params.reviewId);
  if (!review)
    return next(new AppError("No review was found with a given ID", 404));
  res.status(204).end();
});
