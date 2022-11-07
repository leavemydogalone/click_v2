const router = require("express").Router();
const passport = require("passport");
const genPassword = require("../lib/passwordUtils").genPassword;
const User = require("../models/User");

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  console.log("login success");
  req.session.authenticated = true;

  res.status(201).json({ userId: req.session.passport.user });
});

router.post("/register", async (req, res, next) => {
  const saltHash = genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  //   create new user obj
  const newUser = new User({
    username: req.body.username,
    hash: hash,
    salt: salt,
  });

  //   save user to mongodb or send error on failure
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
