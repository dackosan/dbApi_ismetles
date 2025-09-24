import Database from "better-sqlite3";

const db = new Database("./data/database.sqlite");

db.prepare(
  `CREATE TABLE IF NOT EXISTS cars(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING, brand STRING)`
).run();

export const getCars = () => db.prepare("SELECT * FROM cars").all();
export const getCarById = (id) => db.prepare("SELECT * FROM cars WHERE id = ?").get(id);
export const createCar = () => db.prepare("INSERT INTO cars ").run();
export const updateCar = () => db.prepare("SELECT * FROM cars").run();
export const deleteCar = () => db.prepare("SELECT * FROM cars").run();

const cars = []