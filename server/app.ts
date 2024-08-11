import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import requestRouter from "./routes";

const app: Application = express();

dotenv.config();

app.use(cors());

app.use(express.json());

// app.get("/api/request", (req: Request, res: Response) => {
//   res.json({ message: "Hello, World!" });
// });

app.use("/api/request", requestRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

export default app;
