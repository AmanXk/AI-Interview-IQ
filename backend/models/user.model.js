import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    credits:{
        type:Number,
        default:100
    }
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema)

export default User