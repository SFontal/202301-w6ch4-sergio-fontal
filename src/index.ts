import "./loadEnvirontment.js";
import express from "express";
import { getThing, getThings } from "./controllers/thingsControllers.js";
import morgan from "morgan";
import thingsRouter from "./routers/thingsRouters.js";

const app = express();
const port = process.env.PORT ?? 4000;

app.use(morgan("dev"));

app.use("/things", thingsRouter);

app.get("/", getThings);

app.get("/:id", getThing);

app.listen(port, () => {
  console.log(`Server is listening requests from ${port} port.`);
});
