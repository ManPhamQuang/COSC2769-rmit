const Transaction = require("../model/Transaction");
const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError");

exports.getAllTransactions = catchAsync(async (req, res, next) => {
  const transactions = await Transaction.find({ from: req.user.id })
    .select("-from -to")
    .populate({
      path: "room",
      populate: "createdBy category",
    });

  res.status(200).json({
    status: "success",
    length: transactions.length,
    data: {
      transactions,
    },
  });
});

exports.createTransaction = catchAsync(async (req, res, next) => {
  // Check if the transaction is already paid
  const transactions = await Transaction.find({
    from: req.user.id,
    room: req.body.room,
  });
  if (transactions.length > 0) {
    return next(new AppError("This transaction is already paid", 400));
  }

  // If not, create a new transaction
  const transaction = await Transaction.create({
    ...req.body,
    from: req.user.id,
  });

  res.status(201).json({
    status: "success",
    data: {
      transaction,
    },
  });
});
