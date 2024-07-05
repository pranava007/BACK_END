import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connactDB from "./Database/config.js"
import router from "./Routers/EmpRouters.js";

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors({
    origin:"*",
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}))
connactDB();



app.get('/',(req,res)=>{
    res.status(200).send("HI Welcom to our API")
})

app.use("/api",router)

app.listen(process.env.PORT,(req,res)=>{
    console.log("App is run");
})
