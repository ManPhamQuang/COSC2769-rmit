const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError");
const Room = require("../model/Room");
const Transaction = require("../model/Transaction");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.getCheckoutUrl = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.params.roomId);
  if (!room) return next(new AppError("No room found with a given id", 404));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    client_reference_id: `${req.user.id} ${room.id} ${room.createdBy}`,
    customer_email: req.user.email,
    success_url: `${req.get("origin")}/my-rooms?purchase=succeed&user=${
      req.user.email
    }`,
    cancel_url: `${req.get("origin")}/room/${room.id}`,
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
exports.handleWebHook = catchAsync(async (req, res, next) => {
  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_SIGN;
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event when checkout succeed
  if (event.type === "checkout.session.completed") {
    const sessionInfo = event.data.object;
    const [fromUserId, roomId, toUserId] =
      sessionInfo.client_reference_id.split(" ");
    await Transaction.create({
      from: fromUserId,
      to: toUserId,
      room: roomId,
      amount: sessionInfo.amount_total,
    });
  }

  // Return a response to acknowledge receipt of the event
  res.json({ received: true });
});
