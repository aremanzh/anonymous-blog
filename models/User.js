const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const encrypt = require("mongoose-encryption");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const Post = require("./Post");
const date = require("../date");

const userSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   trim: true,
  // },
  username: {
    type: String,
    trim: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
  },
  googleId: String,
  posts: {
    type: mongoose.Schema.Types.Array,
    ref: "Post",
  },
  createdAt: {
    type: String,
    default: date.getFullDate(),
  },
  userProfilePath: String,
});

userSchema.plugin(encrypt, {
  secret: process.env.SECRET,
  encryptedFields: ["password"],
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

/* passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); */

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/blog",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {

      /* User.findOne ({ googleId: profile.id }, function(err, user) {
        if(err) {
          return cb(err);
        } if (user) {
          return cb(null, user);
        } else {
          var newUser = new User();
          newUser.googleId    = profile.id;
          newUser.googleToken = profile.token;
          newUser.googleName  = profile.displayName;
          newUser.googleUname = profile.emails; // pull the first email
          newUser.googleDp    = profile._json.picture;

          newUser.save(function(err) {
            if(err) {
              throw err;
            }
            return cb (null, newUser);
          });
        }
      }); */

      

      console.log(profile);
      console.log(cb);
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

module.exports = User;
