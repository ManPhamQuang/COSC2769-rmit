const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../controller/authController");
const { getCheckoutUrl } = require("../controller/checkoutController");

router.get("/:roomId", isAuthenticated, getCheckoutUrl);

module.exports = router;
