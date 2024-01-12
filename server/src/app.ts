import express from "express";
import "colors"

const app = express();
const port = 4000;

app.listen(port , ()=>{
    console.log(`server http://localhost:${port}` .green) ; 
}) 



