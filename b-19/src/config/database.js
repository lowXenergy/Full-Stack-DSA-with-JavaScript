import mongoose from "mongoose";

export default async function connectToDatabase() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI environment variable is required");
  }

  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB");
}
