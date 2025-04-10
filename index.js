import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/config.js';
import userRouter from "./routers/users.router.js";

dotenv.config();

const app = express();
const Port = process.env.PORT || 4000 ;
app.use(express.json());

connectDB();
app.use("/api/auth", userRouter);

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})

