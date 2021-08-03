const catchAsync = require("../util/catchAsync");
const twilio = require("twilio");
const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant, ChatGrant } = AccessToken;

exports.generateTwilioToken = catchAsync(async (req, res, next) => {
  const identity = req.body.identity;
  const room = req.body.room;
  const token = generateTwilioToken(identity, room);

  res.status(200).json({
    status: "success",
    data: {
      token: token.toJwt(),
    },
  });
});

const generateTwilioToken = (identity, room) => {
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  // Video permission
  let videoGrant;
  if (typeof room !== "undefined") {
    videoGrant = new VideoGrant({ room });
  } else {
    videoGrant = new VideoGrant();
  }
  token.addGrant(videoGrant);
  token.identity = identity;

  // Chat permission
  const chatGrant = new ChatGrant({
    serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
  });
  token.addGrant(chatGrant);
  return token;
};
