const router = require('express').Router();
const bookModel = require('../models/booksModel')

//POST REQUEST
router.post("/add", async (req, res) => {
    try {
        const newBook = new bookModel(req.body);
        await newBook.save().then(() => {
            res.status(200).json({ message: "Book added successfully" });
        });
    } catch (err) {
        console.log(err)
    }
})

//GET REQUEST
router.get('/getBooks', async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({ books })
    } catch (err) {
        console.log(err)
    }

})

//GET REQUEST with ID
router.get('/getBook/:id', async (req, res) => {
    let book;
    const id = req.params.id;
    try {
        book = await bookModel.findById(id);
        res.status(200).json({ book })
    } catch (err) {
        console.log(err)
    }

})

//UPDATE BOOKS BY ID
router.put('/updateBook/:id', async (req, res) => {
    const id = req.params.id;
    const { bookname, description, author, image, price } = req.body;
    let book;
    try {
        book = await bookModel.findByIdAndUpdate(id, { bookname, description, author, image, price });
        await book.save().then(() => res.send(200).json({ message: "Data update successfully" }))
    } catch (err) {
        console.log(err)
    }
})

//DELETE  BOOK BY ID
router.delete("/deleteBook/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id).then(() => res.status(201).json({ "message": "Deleted successfully" }))
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;