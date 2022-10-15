const User = require("../models/User");
const passport = require("passport");

exports.get = (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
    res.render("profile", {session: req.isAuthenticated()});
  } else {
    res.render("login", {session: req.isAuthenticated()});
  }
};

exports.post = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    }
  });
};
