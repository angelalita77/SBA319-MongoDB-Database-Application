import mongoose, { mongo } from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    director: {type: String, required: true},
    year: {type: Number, required: true},
    genre: {
        type: String,
        enum: ['Thriller',
            'Gore',
            'Kaiju',
            'Supernatural',
            'Possession',
            'Psychological',
            'Found Footage',
            'Cosmic'
        ],
        message:"{VALUE} is not supported"
    },

});

movieSchema.index({genre: 1});

export default mongoose.model('movies', movieSchema);