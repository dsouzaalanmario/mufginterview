const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Welcome to Alan's Interview DEMO"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(5050, () => {
  console.log("Running on Port 5050!!!!!");
});
