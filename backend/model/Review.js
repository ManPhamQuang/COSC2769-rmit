const mongoose = require("mongoose");
const User = require("./User");
const reviewSchema = new mongoose.Schema({
  from: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  to: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  review: {
    type: String,
    required: [true, "Review must not be empty"],
  },
  rating: {
    type: Number,
    required: [true, "Review must have a rating"],
    min: [1, "Review must be above 1.0"],
    max: [5, "Review must be above 5.0"],
  },
});

reviewSchema.statics.calculateAverageAndNumberOfReviews = async (
  Model,
  teacherId
) => {
  // Group reviews doc to together to calculate average and number of reviews
  const data = await Model.aggregate([
    {
      $match: {
        to: teacherId,
      },
    },
    {
      $group: {
        _id: "$to",
        numberOfReviews: {
          $sum: 1,
        },
        averageRatings: {
          $avg: "$rating",
        },
      },
    },
  ]);
  await User.findByIdAndUpdate(teacherId, {
    ratingsQuantity: data ? data[0].numberOfReviews : 0,
    ratingsAverage: data ? data[0].averageRatings : null,
  });
};

reviewSchema.post("save", async function (doc, next) {
  // When review first created
  await this.constructor.calculateAverageAndNumberOfReviews(
    this.constructor,
    this.to
  );
  next();
});

reviewSchema.post(/^findOneAnd/, async function (doc, next) {
  // When review update, or delete
  await doc.constructor.calculateAverageAndNumberOfReviews(
    doc.constructor,
    doc.to
  );
  next();
});

module.exports = mongoose.model("Review", reviewSchema);
