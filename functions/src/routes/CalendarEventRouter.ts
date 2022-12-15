import express from "express";
import { getClient } from "../db";
import CalendarEvent from "../models/CalendarEvent";
import axios from "axios";

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
calendarEventRouter.get("/iss", async (req, res) => {
  try {
    const results = (await axios.get("http://api.open-notify.org/astros.json"))
      .data;
    res.status(200);
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});
export default calendarEventRouter;
