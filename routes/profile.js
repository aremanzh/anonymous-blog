const express = require("express");
const router = express.Router();

// Require controller modules.
const profileController = require("../controllers/profile");

// GET login page.
router.get("/profile", profileController.get);

module.exports = router;