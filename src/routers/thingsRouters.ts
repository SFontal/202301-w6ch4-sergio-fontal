import { Router } from "express";
import {
  createThing,
  deleteThing,
  getThing,
  getThings,
} from "../controllers/thingsControllers.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/", getThings);
thingsRouter.get("/:id", getThing);
thingsRouter.delete("/:id", deleteThing);
thingsRouter.post("/", createThing);

export default thingsRouter;
