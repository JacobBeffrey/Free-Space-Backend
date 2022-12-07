import { ObjectId } from "mongodb";

export default interface AccountInfo {
  userName: string;
  email: string;
  loggedIn: boolean;
  _id?: ObjectId;
  uid: string;
}
