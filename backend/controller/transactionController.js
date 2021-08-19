const Transaction = require("../model/Transaction");
const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError");

exports.getAllTransactions = catchAsync(async (req, res, next) => {
  const transactions = await Transaction.find({ from: req.user.id }).populate("room");

  res.status(200).json({
    status: "success",
    length: transactions.length,
    data: {
      transactions,
    },
  });
});

exports.createTransaction = catchAsync(async (req, res, next) => {
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