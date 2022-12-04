//jshint esversion:6
require("dotenv").config();
const express = require("express");
const _ = require("lodash");
const ejs = require("ejs");
const db = require("./models/db");
const passport = require("passport");
const session = require("express-session");
const Swal = require('sweetalert2')

const home = require("./routes/index");
const compose = require("./routes/compose");
const post = require("./routes/post");
const about = require("./routes/about");
const contact = require("./routes/contact");
const login = require("./routes/login");
const register = require("./routes/register");
const profile = require("./routes/profile");
const logout = require("./routes/logout");
const auth = require("./routes/auth");
const del = require("./routes/delete");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

db;

app.use("/", home);
app.use("/", compose);
app.use("/", post);
app.use("/", del);
app.use("/", about);
app.use("/", contact);
app.use("/", login);
app.use("/", register);
app.use("/", profile);
app.use("/", logout);
app.use("/", auth);

app.listen(process.env.PORT, function () {
  console.log("Server started");
});
