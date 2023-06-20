require("dotenv").config();

const express = require("express");
const serverless = require("serverless-http")
const mongoString = process.env.DATABASE_URL;
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", () => {
  console.log("connected");
});

const app = express();
app.use(express.json());
app.use("/api/", routes);

export const handler = serverless(app);
