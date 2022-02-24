
debugger;

var employeeData = [{
        EmployeeId : 1,
        EmployeeName : "Aman",
        EmployeeDesignation : "Developer"    
    },{
        EmployeeId : 2,
        EmployeeName : "Vishal",
        EmployeeDesignation : "Intern"    
    }];



debugger;
let data = [{...employeeData}];
// console.log(data);
console.log(data[0][0]);
console.log(data[0][0].EmployeeName);

console.log("*********************");

console.log(data[0][1]);
console.log(data[0][1].EmployeeName);