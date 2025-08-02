import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser); // Assuming registerUser is imported from the controller

// router.route("/register").post(registerUser);

export default router;