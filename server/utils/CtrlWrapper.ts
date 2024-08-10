import { Request, Response, NextFunction } from "express";
import { HttpError, IHttpError } from "./HttpError";

export const CtrlWrapper = (
  ctrl: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await ctrl(req, res, next);
    } catch (err) {
      const error = err as IHttpError;
      if (error.status) {
        next(error);
      } else {
        next(HttpError(500, "Internal Server Error"));
      }
    }
  };
};
