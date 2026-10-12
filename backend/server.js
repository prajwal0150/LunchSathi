import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

const app=express()
dotenv.config();


const PORT=process.env.PORT;
app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("✅Database Connection Done.")
        app.listen(PORT, () => {
            console.log("Server is running at port: ", PORT)
        })
    }).catch((err) => {
        console.log("❌DateBase connection failed.", err)
    })