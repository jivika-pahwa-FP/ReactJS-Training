var userDetails = {
    userName : "Employee 1",
    age : 23
};
debugger;
// var {userName : userName , age : age} = userDetails;

// var otherUser = userDetails;
// otherUser.age = 56;
// console.log(otherUser.age);
// console.log(userDetails.age);
// console.log(userName + age);


var otherUser = {...userDetails}; // create new object, doesnt affect the original one
otherUser.age = 89;
console.log(otherUser.age);
console.log(userDetails.age);
