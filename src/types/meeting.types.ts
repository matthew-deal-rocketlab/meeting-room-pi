export enum RoomStatus {
  AVAILABLE = "AVAILABLE",
  IN_PROGRESS = "IN_PROGRESS",
  UPCOMING = "UPCOMING",
}

export interface MeetingStatusUpdate {
  status: RoomStatus;
  currentMeeting?: {
    summary: string;
    endsAt: string;
    minutesRemaining: number;
  };
  upcomingMeeting?: {
    summary: string;
    startsAt: string;
    minutesUntil: number;
  };
}
