const passport = require("passport");

exports.post= function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.render('logout', {session: req.isAuthenticated()});
  });
};