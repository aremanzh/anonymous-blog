const mongoose = require("mongoose");
const Post = require("../models/Post");
const User = require("../models/User");
const Swal = require("sweetalert2");

exports.post = async (req, res) => {
  const PostId = mongoose.Types.ObjectId(req.body.delete);
  const user = req.user;

  for (let i = 0; i < user.posts.length; i++) {
    const Owner = user.posts[i]._id;

    const postOwner = String(Owner);
    const selectedPostId = String(PostId);

    console.log(Owner);

    if (postOwner === selectedPostId) {
      console.log("found owner!");
      Post.findByIdAndRemove(selectedPostId, function (err) {
        if (!err) {
          res.redirect("/");
        }
      });
      break;
    } else {
      console.log("wrong user");
      res.render("error", { session: req.isAuthenticated(), error: "You are trying to delete a post by other user!" });
      break;
    }
  }
};
