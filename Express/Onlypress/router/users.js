const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users Lists");
});

router.get("/new", (req, res) => {
  res.send("New user form");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with ID : ${req.params.id}`);
    console.log(req.user);
  })
  .put((req, res) => {
    res.send(`put user with ID : ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with ID : ${req.params.id}`);
  });

router.param("id",(req,res,next,id)=>{
  console.log(id);
  req.user = "Bipul";
  next()// if this is not called, the server goes in the infinite loop.
})

module.exports = router;
