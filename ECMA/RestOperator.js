var [one,two,...combine] = ["apple","grapes","mango","shirt","jeans","tshirt"];
console.log(combine);

function checkForRest(first,second,...third){
        return third;
}

console.log(checkForRest("one","two","three","four","five","six","seven"));