// Imports
import express from 'express';
import dotenv from 'dotenv';
import globalErr from './middleware/globalErr.mjs';
import log from "./middleware/loggingMiddleware.mjs"

// Env Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;


// DB Connection


// Middleware
app.use(log);

// Routes

// Testing GlobalERR
app.get('/test-error', (_req, _res, next) => {
    const error = new Error('This is a test error!');
    next(error); 
});


//Err Handling Middleware
app.use(globalErr);

//Listener
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})

