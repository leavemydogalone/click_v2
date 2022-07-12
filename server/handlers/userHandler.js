const User = require("../models/User");

module.exports = (io, socket) => {
  const userRegister = (userObj) => {
    console.log(userObj);
  };
  const userSignIn = () => {};
  const userUpdateCredentials = () => {};
  const userUpdateClick = () => {};

  socket.on("userObj", userRegister);
};
