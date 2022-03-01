export  function setEmployeeList(employeeData){
        return{
            type:"GET_EMPLOYEE",
            payload : employeeData
        }
}


export  function deleteOneEmployee(employeeID){
    return{
        type:"DELETE_SPECIFIC_EMPLOYEE",
        payload : employeeID // info
    }
}

export function deleteAllEmployee(employeeData){
    return{
        type:"DELETE_ALL_EMPLOYEE",
    }
}