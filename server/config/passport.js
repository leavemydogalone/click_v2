const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const connection = require("./database");
const User = require("../models/User");

const customFields = {
  usernameField: "email",
};

const verifyCallback = (username, passowerd, done) => {
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        return cb(null, false);
      }

      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        return cb(null, user);
      } else {
        return cb(null, false);
      }
    })
    .catch((err) => {
      cb(err);
    });
};

// const strategy = new LocalStrategy();
