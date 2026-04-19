const Book = require('../models/Book');
const Category = require('../models/Category');

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('category');
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Error fetching books" });
  }
};

// Add book
exports.addBook = async (req, res) => {
  const { title, author, category } = req.body;

  try {
    const book = new Book({ title, author, category });
    await book.save();
    res.json({ message: "Book added", book });
  } catch (err) {
    res.status(500).json({ message: "Error adding book" });
  }
};

// Delete book
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting book" });
  }
};