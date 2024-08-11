import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import requestRouter from "./routes";
import { IHttpError } from "./utils/HttpError";

const app: Application = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.use("/api/request", requestRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err: IHttpError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ error: { message, status } });
});

export default app;
