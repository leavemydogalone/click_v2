const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    // email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
    hash: { type: String },
    salt: { type: String },
    isAdmin: { type: Boolean, default: false },
    clicks: { type: Number, default: 0 },
    sessionTime: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
