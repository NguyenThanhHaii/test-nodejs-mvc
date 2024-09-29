// userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Định nghĩa route để lấy danh sách người dùng
router.get("/", userController.getUsers);

module.exports = router;
