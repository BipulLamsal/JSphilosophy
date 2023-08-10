const express = require("express");
const app = express();

// Middleware for /user/:id/details route
app.use("/user/:id/details", (req, res, next) => {
  console.log("The Highest order middleware");
  res.send(`Working with middleware order!`);
});

// Middleware for /user/:id route
app.use("/user/:id", (req, res, next) => {
  console.log("Requested Type", req.method);
  const userId = req.params.id;
  res.send(`This is the user no: ${userId}`);
  //next() this causes error as each each middleware or route handler should send a response only once.   
});

// Middleware that runs for any request
app.use((req, res, next) => {
  console.log("I am testing the middleware");
  next();
});

app.listen(8000, () => console.log("The server is up and running!"));
