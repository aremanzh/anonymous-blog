const Post = require("../models/Post");
const coolImages = require("cool-images");
const date = require("../date");
const _ = require("lodash");
const { urlSlug } = require("../handlers/urlSlug");
const User = require("../models/User");

exports.get = (req, res) => {
  if (req.isAuthenticated()) {
    res.render("compose", {session: req.isAuthenticated()});
  } else {
    res.redirect("/login");
  }
};

exports.post = async (req, res) => {
  console.log(req.user);

  const post = new Post({
    owner: req.user.id,
    newTitle: req.body.title,
    newContent: req.body.content,
    newUrl: urlSlug(req.body.title),
    postDate: date.getFullDate(),
    imageUrl: coolImages.one(600, 800),
  });

  post.newTitle = _.upperFirst(post.newTitle);
  post.newContent = _.upperFirst(post.newContent);

  const user = await User.findOne({ _id: req.user.id });
  const userPost = user.posts;
  userPost.push(post);
  await user.save()

  post.save();
  res.redirect("/");
};
