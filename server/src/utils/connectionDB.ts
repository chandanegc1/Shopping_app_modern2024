import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017", {
        dbName:"Ecommerce 2024",
    })
    console.log("chandan ok");
    } catch (error) {
        console.log("chandan");
    }
}
connectDB();
