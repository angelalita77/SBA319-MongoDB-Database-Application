import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
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
    movieAdaptation: {type: Boolean}

});

bookSchema.index({genre: 1});

export default mongoose.model('bookSchema', bookSchema);