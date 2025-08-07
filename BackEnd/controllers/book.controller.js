import Book from "../models/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createBook = async (req, res) => {
  try {
    const { name, title, userId } = req.body;
    const imageurl = req.file;

    if (!name) return res.status(400).json({ message: "Name is required!" });
    if (!title) return res.status(400).json({ message: "Title is required!" });
    if (!imageurl)
      return res.status(400).json({ message: "Image is required!" });
    if (!userId)
      return res.status(400).json({ message: "User ID is required!" });

    const newBook = await Book.create({
      name,
      title,
      image: `http://localhost:4001/uploads/${imageurl.filename}`,
      category: "free",
      price: 0,
      uploadedby: userId,
    });

    res.status(201).json({
      message: "Book created successfully",
      book: newBook,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserBooks = async (req, res) => {
  const { userId } = req.body;

  try {
    const books = await Book.find({ uploadedby: userId });
    res.status(200).json(books);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: "Failed to fetch books" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Book ID is required" });
    }

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    await Book.deleteOne({ _id: id });

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error while deleting book" });
  }
};
