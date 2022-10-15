const _ = require("lodash");

exports.urlSlug = function (postUrl) {
    postUrl = _.lowerCase(postUrl)
      .replace(/\s+/g, "-")
      .replace(/[^\u0100-\uFFFF\w\-]/g, "-")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
    return postUrl;
  }