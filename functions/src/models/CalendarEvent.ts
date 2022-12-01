import { ObjectId } from "mongodb";

export default interface CalendarEvent {
  _id?: ObjectId;
  dtstart: string;
  summary: string;
  description: string;
  url: string;
}
