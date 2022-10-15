const express = require("express");
const router = express.Router();

// Require controller modules.
const logoutController = require("../controllers/logout");

// Post blog home page.
router.get("/logout", logoutController.post);

module.exports = router;