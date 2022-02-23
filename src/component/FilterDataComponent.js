import { useState } from "react";
import EmployeeDataComponent from "./EmployeeDataComponent";

export default function FiterDataComponent(props) {

    var [searchedInput, setSearchedInput] = useState();
    var searchChange = (event) => {
        console.log(event.target.value);
        setSearchedInput(searchedInput = event.target.value)
    };

    return (
        <>
            {console.log(props.data[0])}
            <h2> List Of Employees </h2>
            <input type='text' placeholder="search here.." value={searchedInput} onChange={searchChange} />
            <br />
            {/* <p>Searched Input : {searchedInput} </p> */}
            {props.data.map((ele) => {
                if (searchedInput) {
                    if (ele.EmployeeName.toLowerCase() === searchedInput || (ele.EmployeeDesignation).toLowerCase() === searchedInput)
                        return <EmployeeDataComponent {...ele} ></EmployeeDataComponent>;
                }
                else {
                    return <EmployeeDataComponent {...ele}></EmployeeDataComponent>
                }
            })}
        </>
    )

}