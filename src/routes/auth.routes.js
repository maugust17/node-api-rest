import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";

const router = express.Router();

router.post("/login", loginValidator, login);
router.post("/register", registerValidator, register);

export default router;