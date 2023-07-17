import { Router } from "express";
import { userSignInController, userSignUpController } from "../controllers/userContollers.js";

const router = Router();

router.post("/signup", (req, res) => {
  userSignUpController(req, res);
});

router.post("/signin", (req, res) => {
  userSignInController(req, res);
});

export default router;
