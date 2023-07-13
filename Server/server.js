import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const server = express();
server.use(express.json());
server.use("/api/user", userRoutes);

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb Conneted");
    server.listen(4000, () => console.log("Express Server Start"));
  })
  .catch((err) => console.log("ERR: ", err));
