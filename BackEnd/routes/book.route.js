import express from "express";
import { getBook } from "../controllers/book.controller.js";
import { createBook } from "../controllers/book.controller.js";
import { getUserBooks } from "../controllers/book.controller.js";
import upload from "../middleware/multer.middleware.js";
import { deleteBook } from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", getBook);

router.post("/", upload.single("image"), createBook);

router.post("/userbooks", getUserBooks);

router.delete("/:id", deleteBook); // ✅ must use :id

export default router;
