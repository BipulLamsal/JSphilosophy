const express = require('express')
const app = express();
const mongoose = require('mongoose');

mongoose.connect(('mongodb://localhost/urlshortner'),{
    useNewUrlParser:true, useUnifiedTopology:true
})

app.set('title','url-shortner');
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/shortURL',(req,res)=>{
    re
})
app.listen(process.env.PORT|| 3002);