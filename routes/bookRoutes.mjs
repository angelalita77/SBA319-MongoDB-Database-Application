import express from "express";
import BookSchema from "../models/bookSchema.mjs"
const router = express.Router();
import { Books } from "../data/Books.mjs";


// Read
router
    .route("/")
    .get(async (req, res) => {
        try {
            let result = await BookSchema.find({});
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
                let newBook = await BookSchema.create(req.body);
                // Return Response
                res.json(newBook)
            } catch (err) {
                console.error(err.message);
                res.status(500).json({ msg: `❗️Post Error❗️ - ${err.message}` });
            }
        });