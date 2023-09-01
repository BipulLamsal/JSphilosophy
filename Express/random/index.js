const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res) => {
    // res.sendStatus(500)
    // res.status(500).send("Internal Server Error");
    res.status(500).json({ 'error': 'Internal Server Error' });
    // res.download('index.js');
});
app.get('/page',logger,(req,res)=>{
    res.render('index' ,{value : "I am being passed"});
})
const userRouter = require('./routers/users');
app.use('/users',userRouter)

function logger (req,res,next){
    console.log("Message logged!");
    next()
}

app.listen(8888, () => {
    console.log("Application running at port 8888");
});
