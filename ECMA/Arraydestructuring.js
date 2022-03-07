
// Array Destructuring 
var myArray = [10,20];
var [a,b] = [...myArray];
console.log(a + b);

// object Destructuring 
var myObject = {
    name : "jivika",
    age : 23,
    designation : "intern"
};

var {name,designation} = {...myObject}
console.log(name + designation);