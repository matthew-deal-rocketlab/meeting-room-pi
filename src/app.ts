import express, { Express } from "express";
import cors from "cors";
import routes from "./routes";
import { errorHandler } from "./middleware/error.middleware";
import { requestLogger } from "./middleware/logger.middleware";

const app: Express = express();

// CORS configuration
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? process.env.ALLOWED_ORIGIN
      : "http://localhost:3001",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

// Parse JSON and URL-encoded bodies first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Then add other middleware
app.use(cors(corsOptions));
app.use(requestLogger);

// Routes
app.use("/api", routes);

// Error handling
app.use(errorHandler);

export default app;
