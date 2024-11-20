import { Router } from "express";
import { updateMeetingStatus } from "../controllers/meeting.controller";

const router = Router();

router.post("/status", updateMeetingStatus);

export default router;
