let arr = ["mango","apple","banana","cherry","banana","mango","guava","kiwi","banana"];

// console.log(arr.lastIndexOf("banana"));

// console.log(arr.indexOf("banana"));

// for(let i of arr){
//     console.log(i);
// }

// for(let i in arr){
//     console.log(` ${i} : ${arr[i]} `);
// }

if(arr.includes("cherry")){
    console.log("Found !! ");
}

if(arr.includes("banana")){
    console.log("Last Index Of : "+arr.lastIndexOf("banana"));
}else{
    console.log("not found");
}
console.log("found At : "+arr.lastIndexOf("yyuyu"));

// arr.forEach((value,index,arr) => {
//     // console.log(` ${value} ==> ${index} `);
// });

var result = arr.find((ele,ind) => {
    return ele == "apple";
});

console.log("founded element : "+result);


var resultIndex = arr.findIndex((ele,ind) => {
    return ele == "apple";
});

console.log("founded element Index : "+resultIndex);