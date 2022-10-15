const mongoose = require("mongoose");
const User = require("./User");

module.exports = postSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  newTitle: {
    type: String,
    trim: true,
    required: true,
  },
  newContent: {
    type: String,
    trim: true,
    required: true,
  },
  newUrl: String,
  postDate: Object,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
