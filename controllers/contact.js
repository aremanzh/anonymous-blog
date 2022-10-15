const contactContent = "Any questions? Shoot us a message!"
exports.get = (req, res) => {
  res.render("contact", { contact: contactContent, session: req.isAuthenticated() });
};
