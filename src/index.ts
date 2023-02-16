import "./loadEnvirontment.js";
import express from "express";
import { getThings } from "./controllers/thingsControllers.js";
import morgan from "morgan";

const app = express();
const port = process.env.PORT ?? 4000;

app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`Server is listening requests from ${port} port.`);
});

app.get("/things", getThings);
