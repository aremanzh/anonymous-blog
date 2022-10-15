const aboutContent = "This is a prototype project for blog web app. This website was develop using EJS, Express, NodeJs, MongoDB, Bootstrap. Hope you enjoy!";

exports.get = (req, res) => {
  res.render("about", { about: aboutContent, session: req.isAuthenticated() });
};
