import mongoose, { Schema } from "mongoose";

const boardSchema = new Schema({
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

const boardModel = mongoose.model("Board", userSchema);

export default boardModel;
