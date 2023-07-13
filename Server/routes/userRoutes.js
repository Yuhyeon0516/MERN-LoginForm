import { Router } from "express";
import { userSignInController, userSignUpController } from "../controllers/userContollers.js";

const router = Router();

router.post("/signup", (req, res) => userSignUpController);

router.post("/signin", (req, res) => userSignInController);

export default router;
