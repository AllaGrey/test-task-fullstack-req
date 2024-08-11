import { Request, Response } from "express";
import { CtrlWrapper } from "../utils";

const getRequests = async (req: Request, res: Response): Promise<void> => {
  const { limit, interval, index } = req.query;

  const delay = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() => {
    res
      .status(200)
      .json(`Request ${limit}_${interval}_${index} was completed successfully`);
  }, delay);
};

export const getRequestsCtrl = CtrlWrapper(getRequests);
