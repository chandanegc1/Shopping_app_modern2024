import express from "express";
import { newUser } from "../controllers/user.js";


const app = express.Router();

// "/api/v1/user/"

app.post("/new", newUser);

export default app;
