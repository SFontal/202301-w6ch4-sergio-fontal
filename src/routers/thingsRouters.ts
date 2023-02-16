import { Router } from "express";
import { getThings } from "../controllers/thingsControllers.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/", getThings);

export default thingsRouter;
