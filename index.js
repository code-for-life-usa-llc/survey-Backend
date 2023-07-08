const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");

require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;

database.once("connected", () => {
  console.log("[DATABASE] The database has connected!");
});

database.on("error", () => {
  console.log("[DATABASE] The database had an error.");
});
app.use(cors());
app.use(express.json());
app.use("/api", routes);


app.listen(3001, () => {
  console.log("[SERVER] The server has started!");
});
