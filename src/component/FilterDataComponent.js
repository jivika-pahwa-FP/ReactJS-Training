import { useEffect, useState } from "react";
import EmployeeDataComponent from "./EmployeeDataComponent";

export default function FiterDataComponent(props) {

    var [searchedInput, setSearchedInput] = useState("");
    var [employeeList, setemployeeList] = useState([]);
    var [filterEmployeeList, setfilterEmployeeList] = useState([]);

    useEffect(()=>{
        setemployeeList(employeeList=props.data);
        setfilterEmployeeList(filterEmployeeList=props.data);
        console.log(employeeList);
    },[]);


    function filterList(event){
        var updateList = employeeList.filter((employee)=>{
                // console.log(event.target.value);
                console.log(employee.EmployeeName.indexOf(event.target.value));
                return employee.EmployeeName.indexOf(event.target.value) > -1;
        })
        
        setSearchedInput(event.target.value)
        setfilterEmployeeList(updateList);
        
    }

    return (
        <>
            <h2> List Of Employees </h2>
            <input type='text' placeholder="search here.." value={searchedInput} onChange={filterList} />
            <br />
            <p>Searched Input : {searchedInput} </p>
             {/* {filterEmployeeList.map((ele) => {
                if (searchedInput) {
                    // if (ele.EmployeeName.toLowerCase() === filterEmployeeList || (ele.EmployeeDesignation).toLowerCase() === searchedInput)
                    return <EmployeeDataComponent key = {ele.EmployeeId} {...ele} ></EmployeeDataComponent>;
                }
                else {
                    return <EmployeeDataComponent key = {ele.EmployeeId} {...ele}></EmployeeDataComponent>
                }
            })} */}

            {filterEmployeeList.map((ele)=>{
                return <EmployeeDataComponent key = {ele.EmployeeId} {...ele}></EmployeeDataComponent>
            })}
        </>
    )

}