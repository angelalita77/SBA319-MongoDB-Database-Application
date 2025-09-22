import express from "express";
import books from "../models/bookSchema.mjs"
const router = express.Router();
import { booksData } from "../data/books.mjs";


//Seed Route
//Path: /api/horror/movies
router
    .route("/seed")
    .get(async (req, res) => {
        try {
           // await books.deleteMany({});  //optional way to delete all documents in collection
            await books.create(booksData);
            res.send("Data Successfully seeded");

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `Seed Error❗️ - ${err.message}` });
        }
    })

// Read
router
    .route("/")
    .get(async (req, res) => {
        try {
            let result = await books.find({});
            console.log(result)
            if (result == '[]')
                res.json({ msg: 'There are no documents found'})
            else
                res.json(result);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `GET Error❗️ - ${err.message}` });
        }
    })

//Create
    .post(async (req, res) => {
        try {
            let newBook = await books.create(req.body);
            // Return Response
            res.json(newBook)
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❗️Post Error❗️ - ${err.message}` });
        }
    });

//Update
router
    .route("/:id")
    .put(async (req, res) => {
        try {
            let updatedBooks = await books.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true } // Option to allow newly updated object to be sent back
            );

            res.json(updatedBooks);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❗️Update Error❗️ - ${err.message}` });
        }
    })
    // Deleted
    .delete(async (req, res) => {
        try {
            let deleteBook = await books.findByIdAndDelete(req.params.id);
            res.json({ msg: 'DELETED:', deleteBook });

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `Delete Error❗️ - ${err.message}` });
        }
    })

export default router;
