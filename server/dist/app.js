import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import "colors";
// importng routes
import userRoutes from "./routes/user.js";
import "./utils/connectionDB.js";
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());
// using routes
app.use("/api/v1/user", userRoutes);
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`server http://localhost:${port}😎😎`.blue);
});
