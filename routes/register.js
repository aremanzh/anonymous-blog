const express = require("express");
const router = express.Router();

// Require controller modules.
const registerController = require("../controllers/register");

// GET login page.
router.get("/register", registerController.get);
router.post("/register", registerController.post);

module.exports = router;