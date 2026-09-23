import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { registerValidation } from "../validation/auth.validation.js";

const authRouter = Router();

authRouter.post(
    "/register",
    registerValidation,
    registerUser
);

export default authRouter;