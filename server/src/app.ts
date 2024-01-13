import express from "express";
import "colors"
// importng routes
import userRoutes from "./routes/user.js";
import {connectDB }from "./utils/connectionDB.js";
connectDB();

const app = express();
const port = 4000;

app.use(express.json());
// app.get("/" ,(req , res)=>{
//     res.send("chandan");
// })


// using routes
app.use("/api/v1/user", userRoutes);



app.listen(port , ()=>{
    console.log(`server http://localhost:${port}` .green) ; 
}) 



