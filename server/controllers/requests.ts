import { Request, Response } from "express";
import { CtrlWrapper } from "../utils";

const getRequests = async (req: Request, res: Response): Promise<void> => {
  const { limit, interval, index } = req.query;

  res
    .status(200)
    .json(`Request ${limit}_${interval}_${index} was completed successfully`);
};

export const getRequestsCtrl = CtrlWrapper(getRequests);
