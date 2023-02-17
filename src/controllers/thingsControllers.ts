/* eslint-disable no-implicit-coercion */
import type { Request, Response } from "express";
import { things } from "../data/things.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json(things);
};

export const getThing = (req: Request, res: Response) => {
  const { id } = req.params;
  const thing = things.things.find((thing) => thing.id === +id);

  res.status(200).json(thing);
};

export const deleteThing = (req: Request, res: Response) => {
  const { id } = req.params;
  const newThings = things.things.filter((thing) => thing.id !== +id);

  res.status(200).json(newThings);
};
