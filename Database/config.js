import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const mongoDB_url = process.env.MONGODB_URL;

const connectionDB = async (req,res)=>{
    try {

        const Connection = await mongoose.connect(mongoDB_url)
        console.log("MongoDB connected");
        return Connection;
    } 
    catch (error) {
        console.log(error);
        res.status(404).json({message:"MongoDB NOT Connect"})
        
    }
}

export default  connectionDB;