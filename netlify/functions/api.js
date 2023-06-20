require("dotenv").config();

const express = require("express");
const serverless = require("serverless-http");
const mongoString = process.env.DATABASE_URL;
const mongoose = require("mongoose");
const routes = require("../../routes");
const app = express();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoString);
    const database = mongoose.connection;
    database.on("error", console.log("Connection Error"));
  } catch (error) {
    console.log("Connection Error");
  }
}

connectToDatabase().then(() => {
  app.use(express.json());
  app.use("/api/", routes);
  mongoose.connection.close();
});

export const handler = serverless(app);
