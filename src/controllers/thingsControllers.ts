import type { Request, Response } from "express";
import { things } from "../data/things.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json(things);
};

export const getThing = (req: Request, res: Response) => {
  const { id } = req.params;
  // eslint-disable-next-line no-implicit-coercion
  const thing = things.things.find((thing) => thing.id === +id);

  res.status(200).json(thing);
};
