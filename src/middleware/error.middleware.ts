import { Request, Response, NextFunction } from "express";
import config from "../config";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: config.nodeEnv === "development" ? err.message : undefined,
  });
};

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found" });
};
