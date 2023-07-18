import { Router } from "express";
import {
  boardDeleteController,
  boardDetailController,
  boardListController,
  boardUpdateController,
  boardWriteController,
  myBoardListController,
} from "../controllers/boardControllers.js";

const router = Router();

// 게시물 삭제
router.post("/delete", (req, res) => {
  boardDeleteController(req, res);
});

// 게시물 수정
router.post("/update", (req, res) => {
  boardUpdateController(req, res);
});

// 게시물 올리기
router.post("/write", (req, res) => {
  boardWriteController(req, res);
});

// 게시물 하나 가져오기
router.post("/detail", (req, res) => {
  boardDetailController(req, res);
});

// 게시물 전체 가져오기
router.get("/BoardList", (req, res) => {
  boardListController(req, res);
});

// 나의 게시물 전체 가져오기
router.post("/MyBoardList", (req, res) => {
  myBoardListController(req, res);
});

export default router;
