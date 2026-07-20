const express = require("express");
const app = express();
app.use(express.json());
const cookieParser = require("cookie-parser");
const authRoute = require("../src/routes/auth.routes");
app.use(cookieParser())

app.use("/api/auth",authRoute);

module.exports = app;