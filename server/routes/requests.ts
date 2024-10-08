import express, { Router } from "express";
import { requestValidation } from "../middlewares/requestValidation";
import { getRequestsCtrl } from "../controllers/requests";

const requestRouter = express.Router();

requestRouter.get("/", requestValidation, getRequestsCtrl);

export default requestRouter;
