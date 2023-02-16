import type { Request, Response } from "express";
import { things } from "../data/things.js";

export const getThings = (req: Request, res: Response) => {
  console.log("A GET request has arrive to /things");
  res.status(200).json(things);
};
