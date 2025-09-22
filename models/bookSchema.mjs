import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    year: {type: Number, required: true},
    genre: {
        type: String,
        enum: ['Thriller',
            'Slasher',
            'Kaiju',
            'Supernatural',
            'Possession',
            'Psychological',
            'Found Footage',
            'Cosmic Horror',
            'Paranormal'
        ],
        message:"{VALUE} is not supported"
    },
    filmAdaptation: {type: Boolean}

});

bookSchema.index({genre: 1});

export default mongoose.model('books', bookSchema);