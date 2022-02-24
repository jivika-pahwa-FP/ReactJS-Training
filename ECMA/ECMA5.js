let arr = [2,4,6,8,10,12,14,16,18,20];

const filteredArray = arr.filter((ele,index,arr)=>{
        return ele > 15;
});

console.log(filteredArray); // creates a new array
console.log(arr);