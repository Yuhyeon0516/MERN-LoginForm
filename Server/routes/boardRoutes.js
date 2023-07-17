import { Router } from "express";
import {
  boardDeleteController,
  boardDetailController,
  boardListController,
  boardUpdateController,
  boardWriteController,
} from "../controllers/boardControllers";

const router = Router();

// 게시물 삭제
router.delete("/delete", (req, res) => {
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
router.get("/detail", (req, res) => {
  boardDetailController(req, res);
});

// 게시물 전체 가져오기
router.get("/getBoardList", (req, res) => {
  boardListController(req, res);
});

export default router;
