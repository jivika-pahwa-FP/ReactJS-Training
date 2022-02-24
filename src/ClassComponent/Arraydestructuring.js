var myArray = [10,20];
var [a,b] = [...myArray];
console.log(a + b);



var myObject = {
    Empname : "jivika",
    age : 23,
    designation : "intern"
};

var {Empname,designation} = {...myObject}
console.log(Empname + designation);