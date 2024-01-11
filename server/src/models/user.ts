import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema(
    {
        _id:{
            type: String,
            required:[true , "Please enter ID"]
        },
        name:{
            type:String,
            required:[true , "Please enter Nmae"]
        },
        email:{
            type:String,
            unique:[true , "Email already exist"],
            required:[true , "Please enter email"],
            validator:validator.default.isEmail,
        },
        photo:{
            type: String,
            required:[true , "Please add photo"]
        },
        role:{
            type:String,
            enum:["admin" , "user"],
            default:"user",
        },
        gender:{
            type:String,
            enum:["male" , "female"],
            require:[true , "Please enter Gender"]
        },
        dob:{
            type:Date,
            required:[true , "Please enter Date of birth"]
        }
    },
    {
        timestamps:true,
    }
);

export const User = mongoose.model("User" , schema);

