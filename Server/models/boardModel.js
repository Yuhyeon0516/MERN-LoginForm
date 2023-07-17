import mongoose, { Schema } from "mongoose";

const boardSchema = new Schema({
  writer: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imgPath: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const boardModel = mongoose.model("Board", boardSchema);

export default boardModel;
