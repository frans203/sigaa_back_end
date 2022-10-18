const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.post("/create-user", authController.postCreateUser);

module.exports = router;
