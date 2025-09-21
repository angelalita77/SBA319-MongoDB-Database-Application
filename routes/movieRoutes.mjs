import express from "express";
import MovieSchema from "../models/movieSchema.mjs"
const router = express.Router();
import { movies } from "../data/movies.mjs";


//Seed Route
//Path: /api/horror/movies
router
    .route("/seed")
    .get(async (req, res) => {
        try {
           // await MovieSchema.deleteMany({});  //optional
            await MovieSchema.create(movies);
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
            let result = await MovieSchema.find({});
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
            let newMovie = await MovieSchema.create(req.body);
            // Return Response
            res.json(newMovie)
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
            let updatedMovie = await MovieSchema.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true } // Option to allow newly updated object to be sent back
            );

            res.json(updatedMovie);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❗️Update Error❗️ - ${err.message}` });
        }
    })
    // Deleted
    .delete(async (req, res) => {
        try {
            let deleteMovie = await MovieSchema.findByIdAndDelete(req.params.id);
            res.json({ msg: 'DELETED:', deleteMovie });

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `Delete Error❗️ - ${err.message}` });
        }
    })

export default router;