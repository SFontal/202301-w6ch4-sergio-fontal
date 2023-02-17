/* eslint-disable no-implicit-coercion */
import type { Request, Response } from "express";
import { things } from "../data/things.js";
import { type ThingStructure } from "../types.js";

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

export const createThing = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingStructure
  >,
  res: Response
) => {
  const newThing = req.body;

  things.things.push({ ...newThing, id: Date.now() });

  res.status(200).json(things);
};
