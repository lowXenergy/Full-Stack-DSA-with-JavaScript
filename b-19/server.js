import "dotenv/config";
import app from "./src/app.js";
import connectToDatabase from "./src/config/database.js";

// The ?? operator is called the nullish coalescing operator.
// It uses the value on the right only if the value on the left is null or undefined. 
// undefined	3000
// null	3000
// "" (empty string)	""
const port = Number(process.env.PORT ?? 3000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535");
}

async function startServer() {
  await connectToDatabase();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exitCode = 1;
  //This line tells Node.js that the program should finish with an exit code of 1, indicating that it failed or encountered an error
});

// ### `process.exitCode = 1`

// - Sets the exit code for when the process naturally exits.
// - Allows pending asynchronous operations to finish.
// - Generally preferred when you want a failure status without abruptly stopping execution.

// ### `process.exit(1)`

// - Immediately terminates the Node.js process.
// - May interrupt pending operations, including output that hasn't been flushed.
// - Useful when immediate termination is explicitly required.