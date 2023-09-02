let animals = [
   { name:'Fluffy',species:'cat'},
   { name:'Hector',species:'dog'},
   { name:'Hama',species:'rabbit'},
   { name:'Chu',species:'cat'},
   { name:'Snowpy',species:'dog'},
   { name:'Jimmy',species:'fist'}
]

let dogs = animals.filter((animal)=>{
    return animal.species == 'dog'
})

let names = animals.map((animal)=>{
    return animal.name + ' is ' + animal.species;
})