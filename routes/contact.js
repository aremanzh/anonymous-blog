const express = require("express");
const router = express.Router();

// Require controller modules.
const contactController = require("../controllers/contact");

// GET blog home page.
router.get("/contact", contactController.get);

module.exports = router;