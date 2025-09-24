import Database from "better-sqlite3";

const db = new Database("./data/database.sqlite");

db.prepare(
  `CREATE TABLE IF NOT EXISTS cars(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING, brand STRING)`
).run();

export const getCars = () => db.prepare("SELECT * FROM cars").all();
export const getCarById = (id) =>
  db.prepare("SELECT * FROM cars WHERE id = ?").get(id);
export const createCar = (name, brand) =>
  db.prepare("INSERT INTO cars (name, brand) VALUES (?,?)").run(name, brand);
export const updateCar = (id, name, brand) =>
  db
    .prepare("UPDATE cars SET name = ?, brand = ? WHERE id = ?")
    .run(name, brand, id);
export const deleteCar = (id) =>
  db.prepare("DELETE FROM cars WHERE id = ?").run(id);

//if (!db.getCars) {
//  createCar("Lada", "4x4");
//  createCar("Zastava", "101");
//  createCar("Fiat", "Sicento");
//}
