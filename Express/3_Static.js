const express = require('express');
const app = express()

app.use(express.static("public"));
app.use('/media',express.static("public/media"));
app.listen(8000,()=>{console.log("The server is up and running!")});