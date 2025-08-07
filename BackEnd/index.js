import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_DB_URI;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/api/book", bookRoute);
app.use("/user", userRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const startServer = async () => {
  try {
    await mongoose.connect(`${URI}/test`);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

startServer();
