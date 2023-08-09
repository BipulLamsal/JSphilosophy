const events = require('events');
const eventEmitter = new events.EventEmitter();
// const eventEmitter = new EventEmitter();
// Alias for .on is eventEmitter.addListener()

eventEmitter.on('start',(name)=>{
    console.log(`Fired up the event ${name}!`);
})
eventEmitter.emit('start','clicker');

//multiple parameters
eventEmitter.on('Multiply',(start,end)=>{
    console.log(`${start * end}`);
})
const output = eventEmitter.emit('Multiply',2,4);
console.log(output);

console.log(eventEmitter.eventNames());
console.log(eventEmitter.getMaxListeners()); //default is 10
console.log(eventEmitter.listeners('start'));


