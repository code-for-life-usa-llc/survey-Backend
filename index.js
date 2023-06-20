require("dotenv").config();

const express = require("express");
const mongoString = process.env.DATABASE_URL;
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", () => {
  console.log("connected");
});

app = express();
app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => {
  console.log("server started!");
});
