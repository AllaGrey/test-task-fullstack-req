import { Request, Response } from "express";
import { CtrlWrapper } from "../utils";

const getRequests = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json("Req successfully");
};

export const getRequestsCtrl = CtrlWrapper(getRequests);
