const passport = require("passport");

exports.get =
  ("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }));

exports.callback =
  ("/auth/google/blog",
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/profile");
  });
