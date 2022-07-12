const router = require("express").Router();
const User = require("../models/User");

router.get("/register", async (req, res) => {
  console.log("hi");
  res.send("hi");

  //   const newUser = new User({

  //   });
});

module.exports = router;
