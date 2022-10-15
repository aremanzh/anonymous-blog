const mongoose = require("mongoose");
const Post = require("../models/Post");

exports.post = (req,res) => {
    const selectedPostId = mongoose.Types.ObjectId(req.body.delete);
  
    Post.findByIdAndRemove(selectedPostId, function(err){
      if(!err) {
        res.redirect("/");
        console.log("Successfully deleted post!");
      }
    })
  };