const express = require("express");
const extmod = require("./module.js");
const router = express.Router();
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send(extmod.name());
});

app.get("/shop", function (req, res) {
  res.send("This is a shopping page");
});

app.get("*", function (req, res) {
  res.send("Error 404");
});

app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});

app.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});
app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

app.listen(port, function () {
  console.log("The server is up and running!");
});

