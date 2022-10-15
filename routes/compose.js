const express = require("express");
const router = express.Router();

// Require controller modules.
const composeController = require("../controllers/compose");

// GET blog home page.
router.get("/compose", composeController.get);
router.post("/compose", composeController.post);

module.exports = router;