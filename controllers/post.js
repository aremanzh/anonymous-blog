const { urlSlug } = require("../handlers/urlSlug");
const Post = require("../models/Post");

let postId = "";

exports.get = (req, res) => {
    postId = urlSlug(req.params.postId);
  
    Post.findOne({ newUrl: postId }, function (err, post) {
      if (!err) {
        console.log("Match found!");
        res.render("post", {
          title: post.newTitle,
          content: post.newContent,
          id: post._id,
          date: post.postDate,
          session: req.isAuthenticated()
        });
      } else {
        console.log("No match found!! :(");
      }
    });
  };