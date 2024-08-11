import { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils";

export const requestValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { limit, interval, index } = req.query;

  if (!limit || !interval || !index) {
    return next(HttpError(400, "Invalid request index"));
  }
  if (Number(limit) > 50) {
    return next(HttpError(429, "Too many requests"));
  }
  next();
};
