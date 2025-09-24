import express from "express";
import * as db from "./util/database.js";

const PORT = 3000;

const app = express();
app.use(express.json());

app.get("/cars", (req, res) => {
  const cars = db.getCars();
  res.status(200).json(cars);
});

app.get("/cars/:id", (req, res) => {});
app.post("/cars", (req, res) => {});
app.put("/cars/:id", (req, res) => {});
app.delete("/cars/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server runs on ${PORT}`);
});
