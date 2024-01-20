import mongoose from "mongoose";
const connectDB = async () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017", {
        dbName: "Ecommerce_2024"
    })
        .then((c) => console.log("db connected...."))
        .catch((c) => console.log("db connected...."));
};
connectDB();
