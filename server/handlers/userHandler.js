const User = require("../models/User");

module.exports = (io, socket) => {
  const checkAward = async () => {
    const currentUser = await User.findById(socket.request.user._id);
    // check if the clicks meet the criteria for an achievement
    // if it meets the required number, emit achievement
    if (currentUser.clicks % 100 === 0) {
      socket.emit("achievement", clicks / 100);
    }
  };
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
  const clickHandlers = () => {
    updateClick();
    // checkAward();
  };
  socket.on("click", clickHandlers);
};
