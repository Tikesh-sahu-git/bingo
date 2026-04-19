const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.get('/books', bookController.getBooks);
router.post('/books', bookController.addBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;