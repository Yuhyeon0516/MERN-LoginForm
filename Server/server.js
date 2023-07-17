import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import boardRoutes from "./routes/boardRoutes.js";
import cors from "cors";

const server = express();
const corsOption = {
  origin: true,
  credentials: true,
};
server.use(cors(corsOption));
server.use(express.json());
server.use("/api/user", userRoutes);
server.use("/api/board", boardRoutes);

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb Conneted");
    server.listen(4000, () => console.log("Express Server Start"));
  })
  .catch((err) => console.log("ERR: ", err));
