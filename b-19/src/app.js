import cookieParser from "cookie-parser";
import express from "express";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Health check
app.get("/", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth",authRouter);

export default app;