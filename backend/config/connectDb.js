import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongo db connected successfully")
    } catch (error) {
        console.log("mongo db error",error)
    }
}

export default connectDb