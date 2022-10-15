const Post = require("../models/Post");
const date = require("../date");
const _ = require("lodash");

const post1 = new Post({
  newTitle: "This is your first Post",
  newContent: "Start sharing your story today!",
  newUrl: "first-post",
  postDate: date.getFullDate(),
});
const post2 = new Post({
  newTitle: "Anonymous story",
  newContent: "Worry free to share any story!",
  newUrl: "anon-story",
  postDate: date.getFullDate(),
});
const greet = {
  title: "You don't have any post!",
  content: "Create an account then start your anonymous blog!",
  url: "greet",
  postDate: date.getFullDate(),
};
const defaultPost = [post1, post2];

exports.get = (req, res) => {
  Post.find({}, function (err, posts) {
    if (posts.length === 0) {
      res.render("greet", {
        greetTitle: greet.title,
        greetContent: greet.content,
        greetUrl: greet.url,
        greetDate: greet.postDate,
      });
      /* Post.insertMany(defaultPost, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Succcessfully add post into a database!");
        }
        res.redirect("/");
      }); */
    } else {
      res.render("newHome", { ejsPost: posts, session: req.isAuthenticated() });
    }
  });
};