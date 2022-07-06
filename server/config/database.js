const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connection = mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
