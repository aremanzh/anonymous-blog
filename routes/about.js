const express = require("express");
const router = express.Router();

// Require controller modules.
const aboutController = require("../controllers/about");

// GET blog home page.
router.get("/about", aboutController.get);

module.exports = router;