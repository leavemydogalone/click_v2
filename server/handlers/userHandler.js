const User = require("../models/User");

module.exports = (io, socket) => {
  const updateClick = async () => {
    try {
      // increment user clicks by 1
      const currentUser = await User.findByIdAndUpdate(
        socket.request.user._id,
        { $inc: { clicks: 1 } }
      );
      // after user is updated, send the user clicks
      // back to client to update counter
      socket.emit("number", currentUser.clicks);
    } catch (err) {
      console.log(err);
    }
  };
  socket.on("click", updateClick);
};
