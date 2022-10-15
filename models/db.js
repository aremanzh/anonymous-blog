const mongoose = require("mongoose");

exports.db = mongoose.connect(process.env.DB, function() {
    console.log("Successfully connected to database");
});