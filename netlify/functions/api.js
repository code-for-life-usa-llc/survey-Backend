require("dotenv").config();

const express = require("express");
const serverless = require("serverless-http");
const mongoString = process.env.DATABASE_URL;
// const mongoose = require("mongoose");
const routes = require("../../routes");

// mongoose.connect(mongoString);
// const database = mongoose.connection;
const app = express();

// database.on("error", console.log("Connection Error"));

app.use(express.json());
app.use("/api/", routes);

// mongoose.connection.close();

export const handler = serverless(app);
