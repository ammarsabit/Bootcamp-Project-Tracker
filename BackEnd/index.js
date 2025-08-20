import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import router from "./routes/projects.js";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())
app.use(helmet());

app.use("/api/projects", router);

mongoose
  .connect("mongodb://localhost/project")
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.log("Couldnt connect to db ", err.message));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
