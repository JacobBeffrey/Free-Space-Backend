import express from "express";
import { getClient } from "../db";
import AccountInfo from "../models/AccountInfo";

const accountInfoRouter = express.Router();
const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};
accountInfoRouter.get("/:uid", async (req, res) => {
  const uidParams = req.params.uid;
  try {
    const client = await getClient();
    const cursor = client
      .db()
      .collection<AccountInfo>("login")
      .findOne({ uid: uidParams });
    const results = await cursor;
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

accountInfoRouter.post("/", async (req, res) => {
  const newUserAccount: AccountInfo = req.body;
  try {
    const client = await getClient();
    const cursor = client
      .db()
      .collection<AccountInfo>("login")
      .insertOne(newUserAccount);
    const results = await cursor;
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});
export default accountInfoRouter;
