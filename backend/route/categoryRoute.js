const express = require("express");
const router = express.Router();
const {
  getAllCategory,
  createCategory
} = require("../controller/categoryController");

router.get("/", getAllCategory);
router.post("/", createCategory);

module.exports = router;
