import { useState, useEffect } from "react";
import EmployeeDataComponent from "./EmployeeDataComponent"

export default function EmployeeList(props) {

    var [employeeList, setEmployeeList] = useState([]);
    var [filteredEmployeeList, setFilteredEmployeeList] = useState([]);
    var [filterValue, setFilterValue] = useState("");

    useEffect(() => {
            setEmployeeList(props.data);
            setFilteredEmployeeList(props.data);
    }, []) 

    function filterList(event) {
        debugger;
        var updatedList = employeeList.filter((employee) => {
            return employee.EmployeeName.indexOf(event.target.value) > -1;
        })

        setFilterValue(event.target.value);
        setFilteredEmployeeList(updatedList);
    }

    return (
        <div>
            <FilterList filterValue={filterValue} filterList={filterList}></FilterList>
            <h1>Employee List is given Below</h1>
            {filteredEmployeeList.map((employee) => {
                return <EmployeeDataComponent key={employee.EmployeeId} {...employee}></EmployeeDataComponent>
            })}
        </div>
    )
}

function FilterList(props) {
    return (
        <div>
            Filter List <input value={props.filterValue} onChange={props.filterList} type="text" /><br/><br/>
        </div>
    )
}