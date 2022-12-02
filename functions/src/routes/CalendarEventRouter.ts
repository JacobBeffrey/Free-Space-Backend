import express from "express";
import { getClient } from "../db";
import CalendarEvent from "../models/CalendarEvent";

const CalendarEventRouter = express.Router();
const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};
CalendarEventRouter.get("/calendar", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<CalendarEvent>("free_space").find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});
export default CalendarEventRouter;
