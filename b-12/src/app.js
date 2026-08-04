const express = require("express");
const app = express();
app.use(express.json());//Data pd ke de de ga only if data raw format mai hua to
const cookieParser = require("cookie-parser");
const authRoute = require("../src/routes/auth.routes");
app.use(cookieParser())
const postRouter = require("../src/routes/post.routes")
app.use("/api/auth",authRoute);
app.use("/api/post",postRouter);
module.exports = app;