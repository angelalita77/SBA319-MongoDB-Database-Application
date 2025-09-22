import express from "express";
import comics from "../models/comicSchema.mjs"
const router = express.Router();
import { comicsData } from "../data/comics.mjs";


//Seed Route
//Path: /api/horror/movies
router
    .route("/seed")
    .get(async (req, res) => {
        try {
           // await comics.deleteMany({});  //optional way to delete all documents in collection
            await comics.create(comicsData);
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
            let result = await comics.find({});
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
            let newcomic = await comics.create(req.body);
            // Return Response
            res.json(newcomic)
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
            let updatedComics = await comics.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true } // Option to allow newly updated object to be sent back
            );

            res.json(updatedComics);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❗️Update Error❗️ - ${err.message}` });
        }
    })
    // Deleted
    .delete(async (req, res) => {
        try {
            let deleteComic = await comics.findByIdAndDelete(req.params.id);
            res.json({ msg: 'DELETED:', deletecomic });

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `Delete Error❗️ - ${err.message}` });
        }
    })

export default router;
