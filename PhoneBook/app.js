const express = require("express");
const app = express();
const port = 3001;
const external = require('./randomize')

const findNumber = () =>{
    return record.length;
} 
app.use(express.json());
app.get('/api/persons',(req,res)=>{
res.json(record);
})

app.get('/api/info',(req,res)=>{
    const numberOfRecords = findNumber();
    const currentDate =  new Date();
    res.send(`Number of records: ${numberOfRecords}</br>Current Data:${currentDate} `)
})

app.get('/api/persons/:id',(req,res)=>{
    const personId = req.params.id;
    const person = record.filter((item)=> personId ==item.id);
    if (person.length == 0)
    {
        console.log("hi")
        return res.status(404).send();
    }
    res.json(person);
})


app.post('/api/persons/',(req,res)=>{
const body = req.body;
if(!body.name)
{
  return res.status(400).json({
    error: "name missing"
  })
}
else if (!body.number)
{
  return res.status(400).json({
    error: "contact missing"
  })
}
else if (!body.number && !body.name)
{
  return res.status(400).json({
    error: "both name and contact missing."
  })
}
else
{
  const detail  = {
    id: external.randomizer(),
    name: body.name,
    number: body.number
  }
  record.push(detail);
res.json(detail)
}
})

app.delete('/api/persons/:id',(req,res)=>{
    const personId = Number(req.params.id);
    record = record.filter((item)=>{
        return item.id !== personId
    })
    res.status(204).send();
})
//starting the server
app.listen(port,(req,res)=>{
    console.log(`Server is running on http://localhost:${port}`);
})
let record = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
