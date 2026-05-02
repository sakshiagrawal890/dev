const express = require('express');
const router = express.Router();

const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  getAvailableBooks
} = require('../controllers/bookController');

router.route('/')
  .post(createBook)
  .get(getAllBooks);

router.get('/available', getAvailableBooks);

router.route('/:id')
  .get(getBookById)
  .put(updateBook)
  .delete(deleteBook);

module.exports = router;
