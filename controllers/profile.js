const User = require("../models/User");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

exports.get = (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
    res.render("profile", {session: req.isAuthenticated()});
  } else {
    res.redirect("/login");
  }
};
