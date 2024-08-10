import { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils";

export const requestValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { requestIndex } = req.params;
  if (!Number.isInteger(parseInt(requestIndex, 10))) {
    return next(HttpError(400, "Invalid request index"));
  }
  if (Number(requestIndex) > 50) {
    return next(HttpError(429, "Too many requests"));
  }
  next();
};
