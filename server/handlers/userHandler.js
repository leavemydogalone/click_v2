const User = require("../models/User");

module.exports = (io, socket) => {
  const updateClick = async () => {
    try {
      const currentUser = await User.findByIdAndUpdate(
        socket.request.user._id,
        { $inc: { clicks: 1 } }
      );
      socket.emit("number", currentUser.clicks);
    } catch (err) {
      console.log(err);
    }
  };
  socket.on("click", updateClick);
};
