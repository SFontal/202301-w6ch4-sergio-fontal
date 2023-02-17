import { Router } from "express";
import { getThing, getThings } from "../controllers/thingsControllers.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/", getThings);
thingsRouter.get("/:id", getThing);

export default thingsRouter;
