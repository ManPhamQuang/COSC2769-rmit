const catchAsync = require("../util/catchAsync");
const twilio = require("twilio");
const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant } = AccessToken;

exports.generateTwilioToken = catchAsync(async (req, res, next) => {
  const identity = req.body.identity;
  const room = req.body.room;
  const token = generateVideoToken(identity, room);

  res.status(200).json({
    status: "success",
    data: {
      token: token.toJwt(),
    },
  });
});

const generateToken = () => {
  return new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );
};

const generateVideoToken = (identity, room) => {
  let videoGrant;
  if (typeof room !== "undefined") {
    videoGrant = new VideoGrant({ room });
  } else {
    videoGrant = new VideoGrant();
  }
  const token = generateToken();
  token.addGrant(videoGrant);
  token.identity = identity;
  return token;
};
