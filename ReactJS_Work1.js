
function employeeDetails(){
    let name = "Emp1";
    let age = 23;
    let designation = "Developer";
    let salary = 25000;

    return{
        getName : function(){
            console.log("Name of employee : "+name);
        },
        getAge : function(){
            console.log("Age of employee : "+age);
        },
        getDesignation : function(){
            console.log("Designation of employee : "+designation);
        },
        
        getSalary : function(){
            console.log("Salary with bonus : "+salary);
        },
    }
}

var emp_Detail = employeeDetails();

emp_Detail.getName();
emp_Detail.getAge();
emp_Detail.getDesignation();
emp_Detail.getSalary();

