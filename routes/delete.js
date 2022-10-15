const express = require("express");
const router = express.Router();

// Require controller modules.
const deleteController = require("../controllers/delete");

// POST blog item.
router.post("/delete", deleteController.post);

module.exports = router;