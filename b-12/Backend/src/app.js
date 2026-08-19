const express = require("express");
const app = express();
app.use(express.json());//Data pd ke de de ga only if data raw format mai hua to
const cookieParser = require("cookie-parser");
const cors = require("cors")

app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))
app.use(cookieParser())

// Required routes
const authRoute = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const userRouter= require("./routes/user.routes")

// Using routes
app.use("/api/auth",authRoute);
app.use("/api/post",postRouter);
app.use("/api/users",userRouter);

module.exports = app;