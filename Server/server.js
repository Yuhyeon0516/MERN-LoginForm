require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Mongodb Conneted"))
  .catch((err) => console.log("ERR: ", err));
