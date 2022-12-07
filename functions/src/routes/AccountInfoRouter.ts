import express from "express";
import { getClient } from "../db";
import AccountInfo from "../models/AccountInfo";

const accountInfoRouter = express.Router();
const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};
accountInfoRouter.get("/all-login", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<AccountInfo>("login").find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});
export default accountInfoRouter;
