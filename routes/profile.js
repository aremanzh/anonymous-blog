const express = require("express");
const multer = require("multer");

const storageConfig = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "images");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storageConfig });
const router = express.Router();

// Require controller modules.
const profileController = require("../controllers/profile");

// GET login page.
router.get("/profile", profileController.get);
router.post("/profile", upload.single("image"), profileController.post);

module.exports = router;