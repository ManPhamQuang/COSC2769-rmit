const express = require("express");
const router = express.Router();
const {
  getAllTransactions,
  createTransaction,
  checkIfPaid,
} = require("../controller/transactionController");
const { isAuthenticated } = require("../controller/authController");

// Only login user can query transaction
router.use(isAuthenticated);
router.get("/", getAllTransactions);
router.post("/", createTransaction);
router.post("/checkIfPaid", checkIfPaid);

module.exports = router;
