const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

// i will create separate controller for register and login for managing logic
router.post("/register", register);
router.post("/login", login);

module.exports = router;
