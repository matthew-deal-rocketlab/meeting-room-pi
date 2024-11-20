import { Router, Request, Response } from "express";
import { updateMeetingStatus } from "../controllers/meeting.controller";

const router = Router();

router.post("/status", (req: Request, res: Response) =>
  updateMeetingStatus(req, res)
);

export default router;
