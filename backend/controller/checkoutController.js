const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError");
const Room = require("../model/Room");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.getCheckoutUrl = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.params.roomId);
  if (!room) return next(new AppError("No room found with a given id", 404));
  console.log(room);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    client_reference_id: room.id,
    customer_email: req.user.email,
    success_url: `${req.get("origin")}/room/${room.id}?status=success`,
    cancel_url: `${req.get("origin")}`,
    line_items: [
      {
        name: room.title,
        description: room.description,
        amount: room.price * 100,
        quantity: 1,
        currency: "usd",
      },
    ],
  });

  res.status(200).json({
    status: "success",
    data: {
      url: session.url,
    },
  });
});

// Route will only go live when deploying to receive notification from Stripe
exports.handleWebHook = catchAsync(async (req, res, next) => {});
