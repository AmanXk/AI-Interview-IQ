import express from "express";
import dotenv from "dotenv";
import  connectDb  from "./config/connectDb.js";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("Hello World! how are you bro");
});

app.listen(PORT, () => {
  console.log("Server is running on port 5000 at url http://localhost:5000");
  connectDb()
});