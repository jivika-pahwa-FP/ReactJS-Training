import AccountDataComponent from './AccountDataComponent';
import { useState,useEffect } from 'react';
import Axios from "axios";

export default function DataFetchUsingHook() {

    var [employeeList,setemployeeList] = useState([]);

    var getData = () => {
        Axios.get("https://localhost:5001/api/Student/getAllData")
        .then((response)=>{
            setemployeeList(employeeList = response.data)
        })
    };
    
    var deletePromise = (event) => Axios.delete(`https://localhost:5001/api/Student/Delete/${event.target.id}`).then((response)=>{
        console.log("deleted Id : "+event.target.id);
        getData();
        });

    useEffect(()=>{
        Axios.get("https://localhost:5001/api/Student/getAllData")
        .then((response)=>{
            setemployeeList(employeeList = response.data)
        })
    },[]);

        return (
            <>
            <h2>Fetching Student Data from API</h2>
            {console.log(employeeList)}
            {employeeList.map((employee)=>{
               return <AccountDataComponent key = {employee.id} {...employee} deleteBtn = {deletePromise} ></AccountDataComponent>
            })}
            </>
        )

}