const express = require("express");
const router = express.Router();

// Require controller modules.
const homeController = require("../controllers/home");

// GET blog home page.
router.get("/", homeController.get);

module.exports = router;