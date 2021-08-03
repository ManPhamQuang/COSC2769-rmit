const express = require("express");
const router = express.Router();
const { generateTwilioToken } = require("../controller/videoController");

router.post("/token", generateTwilioToken);

module.exports = router;
