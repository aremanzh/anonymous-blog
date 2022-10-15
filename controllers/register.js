const User = require("../models/User");
const passport = require("passport");

exports.get = (req, res) => {
  res.render("register", {session: req.isAuthenticated()});
};

exports.post = (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
      } else {
        const authenticate = User.authenticate();
        authenticate("username", "password", function (err, result) {
          if (err) {
            console.log(err);
            res.redirect("/register");
          } else {
            passport.authenticate("local")(req, res, function () {
              res.redirect("/profile");
            });
          }
        });
      }
    }
  );
};
