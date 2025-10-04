const express = require('express');
const Book = require('./BookModel');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require('./BookController');
//      const verifyAdminToken = require('../middleware/verifyAdminToken');
const router =  express.Router();

// create a book endpoint
router.post("/create-book", postABook);
//      router.post("/create-book", verifyAdminToken, postABook)

// all books endpoint
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit-book/:id", updateBook);
//      router.put("/edit/:id", verifyAdminToken, UpdateBook);

// delete a book endpoint
router.delete("/:id", deleteABook);

//      router.delete("/:id", verifyAdminToken, deleteABook)











module.exports = router;