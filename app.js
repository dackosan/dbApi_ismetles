import express from "express";
import * as db from "./util/database.js";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.get("/cars", (req, res) => {
  const cars = db.getCars();
  res.status(200).json(cars);
});

app.get("/cars/:id", (req, res) => {
  const car = db.getCarById(+req.params.id);
  if (!car) {
    return res.status(404).json({ message: "Car not found!" });
  }

  res.status(200).json(car);
});

app.post("/cars", (req, res) => {
  const { name, brand } = req.body;
  if (!name || !brand) {
    return res.status(400).json({ message: "Missing some data!" });
  }

  const saveResult = db.createCar(name, brand);
  res.status(201).json({ id: saveResult.lastInsertRowid, name, brand });
});

app.put("/cars/:id", (req, res) => {
  let car = db.getCarById(+req.params.id);
  if (!car) {
    return res.status(404).json({ message: "Car not found!" });
  }

  const { name, brand } = req.body;
  if (!name || !brand) {
    return res.status(400).json({ message: "Missing some data!" });
  }

  db.updateCar(car.id, name, brand);
  car = db.getCarById(car.id);

  res.status(200).json(car);
});

app.delete("/cars/:id", (req, res) => {
  const car = db.getCarById(+req.params.id);
  if (!car) {
    return res.status(404).json({ message: "Car not found!" });
  }

  db.deleteCar(+req.params.id);

  res.status(200).json({ message: "Delete successful!" });
});

app.listen(PORT, () => {
  console.log(`Server runs on ${PORT}`);
});
