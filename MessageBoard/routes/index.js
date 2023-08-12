const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
router.post("/", function (req, res, next) {
  messages.push({
    text: req.body.input_message,
    user: req.body.input_user,
    added : new Date()
  })
  console.log(messages)
  res.redirect('/')
  next()
  
  });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", content: messages });
});



module.exports = router;
