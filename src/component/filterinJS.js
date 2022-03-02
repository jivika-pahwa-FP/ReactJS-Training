var employeeData = [
    {
        EmployeeId : 1,
        EmployeeName : "Aman",
        EmployeeAvatar : "https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",
        EmployeeDesignation : "Developer"    
    },{
        EmployeeId : 2,
        EmployeeName : "Riya",
        EmployeeAvatar : "https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg",
        EmployeeDesignation : "Tester"    
    },{
        EmployeeId : 3,
        EmployeeName : "Mayank",
        EmployeeAvatar : "https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",
        EmployeeDesignation:"Manager"    
    },{
        EmployeeId : 4,
        EmployeeName : "Manvi",
        EmployeeAvatar : "https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg",
        EmployeeDesignation : "Intern"    
    },{
        EmployeeId : 5,
        EmployeeName : "Ajay",
        EmployeeAvatar : "https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",
        EmployeeDesignation : "Engineer"    
    },{
        EmployeeId : 6,
        EmployeeName : "Seeta",
        EmployeeAvatar : "https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg",
        EmployeeDesignation : "Tester"    
    }
];

let search = "an";

var updateData = employeeData.filter((emp)=>{
        return emp.EmployeeName.indexOf(search) > -1 ;
        // return emp.EmployeeId > 4;
})
console.log(updateData);
console.log(updateData.length);