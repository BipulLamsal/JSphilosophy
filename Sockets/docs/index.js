const express = require('express');
const http = require('http');
const socketIO = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let pollOptions = [
    {
      id: 0,
      name: 'JavaScript',
      clicks: 0,
    },
    {
      id: 1,
      name: 'Python',
      clicks: 0,
    },
    {
      id: 2,
      name: 'C++',
      clicks: 0,
    },
    {
      id: 3,
      name: 'Clojure',
      clicks: 0,
    },
  ];

app.use(express.static(__dirname + '/scripts'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index');
})

io.on('connection',(socket)=>{
    console.log("a user is connected");

    socket.emit('pollOptions',pollOptions)
    socket.on('vote',(option)=>{
        pollOptions[option].clicks++;
        io.emit('results', pollOptions);
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
})
server.listen(3000,()=>{
    console.log("server running at port 3000");     
})