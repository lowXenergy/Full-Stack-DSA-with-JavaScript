const express = require("express");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express();


// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start server
app.listen(3000, () => {
  console.log(`Server running on 3000`);
});