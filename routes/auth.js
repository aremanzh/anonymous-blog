const express = require("express");
const router = express.Router();
const passport = require("passport");

// Require controller modules.
// const authController = require("../controllers/auth");

// GET blog home page.
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/auth/google/blog",
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/profile");
  }
);

module.exports = router;
