// Imports
import express from 'express';
import dotenv from 'dotenv';
import globalErr from './middleware/globalErr.mjs';
import log from "./middleware/loggingMiddleware.mjs"
import connectionDB from './db/conn.mjs';
import movieRoutes from './routes/movieRoutes.mjs'
import booksRoutes from './routes/bookRoutes.mjs'

// Env Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;


// DB Connection
connectionDB();

// Middleware
app.use(express.json());
app.use(log);

// Routes
app.use("/api/horror/movies", movieRoutes);
app.use("/api/horror/books", booksRoutes);

// Testing GlobalERR
// app.get('/test-error', (_req, _res, next) => {
//     const error = new Error('This is a test error!');
//     next(error); 
// });


//Err Handling Middleware
app.use(globalErr);

//Listener
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})

