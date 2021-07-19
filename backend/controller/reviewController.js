const Review = require("../model/Review");
const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError");

exports.createReview = catchAsync((req, res, next) => {
  const review = await Review.create({
    ...req.body,
    from: req.params.teacherId,
    to: req.user.id,
  });

  res.status(201).json({
    status: "success",
    data: {
      review,
    },
  });
});

exports.getAllReviews = catchAsync((req, res, next) => {
  const review = await Review.find();

  res.status(200).json({
    status: "success",
    data: {
      review,
    },
  });
});

exports.updateReview = catchAsync((req, res, next) => {
  const review = await Review.findByIdAndUpdate(req.params.id, {
    ...req.body,
    from: req.params.teacherId,
    to: req.user.id,
  });
  if (!review)
    return next(new AppError("No review was found with a given ID", 404));
  res.status(200).json({
    status: "success",
    data: {
      review,
    },
  });
});

exports.deleteReview = catchAsync((req, res, next) => {
  const review = await Review.findByIdAndDelete(req.params.id);
  if (!review)
    return next(new AppError("No review was found with a given ID", 404));
  res.status(204).end();
});
