import { Router } from "express";
import healthRoutes from "./health.routes";
import meetingRoutes from "./meeting.routes";
import { notFoundHandler } from "../middleware/error.middleware";

const router = Router();

router.use("/health", healthRoutes);
router.use("/meeting", meetingRoutes);

// Handle 404 routes
router.use(notFoundHandler);

export default router;
