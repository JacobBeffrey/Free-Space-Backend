import { ObjectId } from "mongodb";
import CalendarEvent from "./CalendarEvent";

export default interface AccountInfo {
  userName: string;
  email: string;
  loggedIn: boolean;
  _id?: ObjectId;
  uid: string;
  favorites: CalendarEvent[];
}
