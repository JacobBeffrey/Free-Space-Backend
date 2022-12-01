import { ObjectId } from "mongodb";

export default interface PictureOfTheDay {
  _id?: ObjectId;
  date: string;
  explanation: string;
  title: string;
  hdurl: string;
}
