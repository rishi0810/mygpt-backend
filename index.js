import express from "express";
import dotenv from "dotenv";
import { query } from "./utils/query.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Get request initialized" });
});

app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;
  const response = await query(prompt);
  res.send({ response: response });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
