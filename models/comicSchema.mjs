import mongoose from "mongoose";

const comicSchema = new mongoose.Schema({
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
    filmAdaptation: {type: Boolean},
    typeComic: {type: String,
                 enum: ['Manga',
                     'Comic',
                     'Webtoon'],
                message: "{VALUE} is not supported"
            }

});

comicSchema.index({genre: 1});
comicSchema.index({typeComic: 1});

export default mongoose.model('comics', comicSchema);