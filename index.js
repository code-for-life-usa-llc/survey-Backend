require("dotenv").config();

const mongoString = process.env.DATABASE_URL;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", () => {
  console.log("Connection Error");
});

app.use(express.json());
app.use("/api/", routes);

const server = app.listen(3000, () => {
  console.log("server started!");
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
