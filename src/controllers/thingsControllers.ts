import type { Request, Response } from "express";

export const things = (req: Request, res: Response) => {
  console.log("A GET request has arrive to /things");
  res.status(200).json();
};
