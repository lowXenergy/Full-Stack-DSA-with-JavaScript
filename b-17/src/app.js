import express, { Router } from "express";
import authRouter from "./routes/auth.routes.js";
import handleError from "./middleware/error.middleware.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth",authRouter)

app.use(handleError)

export default app