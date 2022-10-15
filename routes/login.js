const express = require("express");
const router = express.Router();

// Require controller modules.
const loginController = require("../controllers/login");

// GET login page.
router.get("/login", loginController.get);
router.post("/login", loginController.post);

module.exports = router;