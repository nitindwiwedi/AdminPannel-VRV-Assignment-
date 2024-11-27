const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');
const { userRegister, userLogin, userLogout } = require('../controllers/authController');
const bcrypt = require('bcrypt');

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/logout", userLogout)

module.exports = router;