import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json({ limit: "16kb" }));

//set routes

//server comps
app.listen(port, () => {
  console.log("server listening at port " + port);
});

import { connectDB } from "./db/db.js";
connectDB();
