//special array like object
function showName()
{
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[0]['name']);
    console.log(...arguments); //spread operator
}
showName({name : {name: "Bipul Lamsal"}});

function sumAll(...rest)
{
    const sum = rest.reduce((accumulator,currentValue) =>{
        return accumulator + currentValue;
    },0)
    console.log(sum)
}
sumAll(1,2,3,4,5,6,7);