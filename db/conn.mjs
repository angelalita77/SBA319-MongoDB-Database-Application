import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//Save the connection string from MongoDB Compass into connectionStr
const connectionStr = process.env.MongoURI || "";

//function will connect to database or return an error if database is unavailable
async function connectionDB (){
    try {
        await mongoose.connect(connectionStr);
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
    }
}

export default connectionDB;