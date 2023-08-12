const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "world" });
});
app.get("/test", (req, res) => {
  res.status(200).json({ message: "Wonderful" });
});
// app.get('/download/images/:filename',(req,res)=>{
//     const filename = req.params.filename;
//     const filepath = "public/images/"+filename;
//     res.download(filepath);
// })
app.use("/download/images", express.static("public/images"));

const userRouter = require('./router/users')
app.use("/users",userRouter);

app.listen(3000, () => {
  console.log("The server is up and running");
});
