import Board from "../models/boardModel.js";

export const boardDeleteController = async (req, res) => {
  try {
    await Board.deleteOne({ _id: req.body.id });
    res.status(200).json({ successes: [{ message: "게시물을 삭제하였습니다." }] });
  } catch (error) {
    return res.status(400).json({ errors: [{ message: erro.message }] });
  }
};
export const boardUpdateController = async (req, res) => {
  try {
    const { _id, title, content } = req.body;
    await Board.updateOne({
      _id,
      title,
      content,
    });
    res.status(200).json({ successes: [{ message: "게시물을 수정하였습니다." }] });
  } catch (error) {
    return res.status(400).json({ errors: [{ message: error.message }] });
  }
};
export const boardWriteController = async (req, res) => {
  try {
    const { writer, title, content } = req.body;
    const board = new Board({ writer, title, content });
    await board.save();
    res.status(200).json({ successes: [{ message: "게시물이 업로드 되었습니다." }] });
  } catch (error) {
    return res.status(400).json({ errors: [{ message: error.message }] });
  }
};
export const boardDetailController = async (req, res) => {
  const { _id } = req.body;
  const board = await Board.findById(_id);

  if (board) {
    res.status(200).json({ board: board });
  } else {
    res.status(400).json({ errors: [{ message: "현재 게시물을 찾을 수 없습니다." }] });
  }
};
export const boardListController = async (req, res) => {
  try {
    const board = await Board.find();
    res.status(200).json({ board: board });
  } catch (error) {
    return res.status(400).json({ errors: [{ message: error.message }] });
  }
};

export const myBoardListController = async (req, res) => {
  const { writer } = req.body;
  const board = await Board.find({ writer });
  if (board.length) {
    res.status(200).json({ board: board });
  } else {
    return res.status(400).json({ errors: [{ message: "해당 작성자의 게시물을 찾을 수 없습니다." }] });
  }
};
