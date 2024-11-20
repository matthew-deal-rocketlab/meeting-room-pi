import { Request, Response, NextFunction } from "express";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;

    console.log(`\n📥 [${timestamp}] Incoming ${method} request to ${url}`);

    // Only try to log body if it exists and after json parsing
    if (req.body && Object.keys(req.body).length > 0) {
      console.log("Request body:", JSON.stringify(req.body, null, 2));
    }

    // Log when response is sent
    res.on("finish", () => {
      console.log(
        `📤 [${timestamp}] Response sent with status: ${res.statusCode}\n`
      );
    });

    next();
  } catch (error) {
    console.error("Error in request logger:", error);
    next(); // Continue to next middleware even if logging fails
  }
};
