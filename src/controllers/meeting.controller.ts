import { RequestHandler } from "express";
import { MeetingStatusUpdate, RoomStatus } from "../types/meeting.types";

const simulateLED = (status: RoomStatus) => {
  switch (status) {
    case RoomStatus.IN_PROGRESS:
      console.log("🔴 RED LED ON - Meeting in progress");
      break;
    case RoomStatus.AVAILABLE:
      console.log("🟢 GREEN LED ON - Room available");
      break;
    case RoomStatus.UPCOMING:
      console.log("🟡 YELLOW LED ON - Meeting upcoming");
      break;
  }
};

export const updateMeetingStatus: RequestHandler = (req, res, next) => {
  try {
    console.log("Received request at meeting status endpoint");
    console.log("Request path:", req.path);
    console.log("Request method:", req.method);
    console.log("Request headers:", req.headers);

    const update = req.body as MeetingStatusUpdate;

    if (!update || !update.status) {
      console.error("Invalid request body:", update);
      res.status(400).json({
        error: "Invalid request body",
        message: "Status is required",
      });
      return;
    }

    // Simulate LED behavior
    simulateLED(update.status);

    // Log detailed status information
    console.log("\n=== Meeting Room Status Update ===");
    console.log(`Status: ${update.status}`);

    if (update.currentMeeting) {
      console.log("\nCurrent Meeting Details:");
      console.log(`Title: ${update.currentMeeting.summary}`);
      console.log(`Ends at: ${update.currentMeeting.endsAt}`);
      console.log(
        `Minutes remaining: ${update.currentMeeting.minutesRemaining}`
      );
    }

    if (update.upcomingMeeting) {
      console.log("\nUpcoming Meeting Details:");
      console.log(`Title: ${update.upcomingMeeting.summary}`);
      console.log(`Starts at: ${update.upcomingMeeting.startsAt}`);
      console.log(
        `Minutes until start: ${update.upcomingMeeting.minutesUntil}`
      );
    }

    console.log("\n================================\n");

    res.status(200).json({
      message: "Status updated successfully",
      currentStatus: update.status,
    });
  } catch (error) {
    next(error);
  }
};
