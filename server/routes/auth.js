const router = require("express").Router();
const passport = require("passport");
const genPassword = require("../lib/passwordUtils").genPassword;
const User = require("../models/User");

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  console.log("login success");
  req.session.authenticated = true;

  res.status(201).json({ userId: req.session.passport.user });
  // console.log(req.session);
});

router.post("/register", async (req, res, next) => {
  console.log("register started");
  const saltHash = genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  //   create new user obj
  const newUser = new User({
    username: req.body.username,
    hash: hash,
    salt: salt,
    clicks: 0,
  });

  //   save user to mongodb or send error on failure
  try {
    const savedUser = await newUser.save();
    passport.authenticate("local")(req, res, function () {
      req.session.authenticated = true;
      res.status(201).json({ userId: req.session.passport.user });
      console.log(req.session.passport.user);
    });
    // res.status(201).json(savedUser);
    // console.log("register success");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
