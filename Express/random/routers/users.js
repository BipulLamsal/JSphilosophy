const express = require('express');
const router = express.Router();
router.use(logger)
function logger (req,res,next){
    console.log("Message logged from users!");
    next()
}

router.post('/',(req,res)=>{
    res.send(req.body.firstName);
})
router.get('/:id',(req,res,next)=>{
    console.log(req.user);
    if (req.params.id != 'new')
    {
        res.send(req.params.id);
    }
    else
    {
        next()
    }
})
router.get('/new',(req,res)=>{
    res.render('new',{firstName : "Bipul Lamsal"})
})
router.post('/add',(req,res)=>{
    res.send(req.body.firstName);
})
const users = [{name:'Bipul'},{name:'Prameshor'},{name:'Rameshowr'}]
//param middleware
router.param('id',(req,res,next,id)=>{
req.user = users[id] || users[0];
next();
})

module.exports = router;