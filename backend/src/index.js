import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connection } from "./db/db.js";
import adminRouter from "./routes/adminRouter.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json({ limit: "16kb" }));

//set routes
app.use("/admin", adminRouter);

//server comps
app.listen(port, () => {
  console.log("server listening at port " + port);
});
