const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;

database.once("connected", () => {
  console.log("[DATABASE] The database has connected!");
});

database.on("error", () => {
  console.log("[DATABASE] The database had an error.");
});

const routes = require("./routes");
const app = express();
app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => {
  console.log("[SERVER] The server has started!");
});
