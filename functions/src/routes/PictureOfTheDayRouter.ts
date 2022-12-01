import express from "express";
import { getClient } from "../db";
import PictureOfTheDay from "../models/PictureOfTheDay";

const PictureOfTheDayRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

PictureOfTheDayRouter.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client
      .db()
      .collection<PictureOfTheDay>("pictureOfTheDay")
      .find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default PictureOfTheDayRouter;
