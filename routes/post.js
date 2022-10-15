const express = require("express");
const router = express.Router();

// Require controller modules.
const postController = require("../controllers/post");

// GET blog home page.
router.get("/post/:postId", postController.get);

module.exports = router;