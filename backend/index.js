import express from "express";
import dotenv from "dotenv";
import  connectDb  from "./config/connectDb.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import authRouter from "./routes/auth.route.js";
dotenv.config()

const app = express();
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000


app.use('/api/auth',authRouter)
app.listen(PORT, () => {
  
  connectDb()
  console.log("Server is running on port 5000 at url http://localhost:5000");

});