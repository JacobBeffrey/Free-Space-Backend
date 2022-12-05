import express from "express";
import { getClient } from "../db";
import CalendarEvent from "../models/CalendarEvent";

const calendarEventRouter = express.Router();
const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};
calendarEventRouter.get("/all-events", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<CalendarEvent>("events").find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});
export default calendarEventRouter;
