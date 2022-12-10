const User = require("../models/User");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

exports.get = (req, res) => {
  if (req.isAuthenticated()) {
    res.render("profile", {session: req.isAuthenticated(), profilPic: req.user.userProfilePath });
  } else {
    res.redirect("/login");
  }
};

exports.post = async (req, res) => {
  const uploadedImageFile = req.file;
  const userData = req.body;

  console.log(uploadedImageFile);
  await User.updateOne({_id: req.user.id}, {$set:{userProfilePath: uploadedImageFile.path}});

  res.redirect("/profile");
};