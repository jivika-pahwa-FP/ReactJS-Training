import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function GetStudentData() {
    
    var [getStudentData,setStudentData] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    var getData = () => {
        Axios.get("https://localhost:5001/api/Student/getAllData")
        .then((response)=>{
            setStudentData(getStudentData = response.data);
        })
    };

    var deleteData = (event) => {
        console.log("id envoked : "+event.target.id);
        Axios.delete(`https://localhost:5001/api/Student/Delete/${event.target.id}`)
        .then((response)=>{
            console.log("Deleted : "+event.target.id)
        });
        alert("Respective Student Deleted !!")
        getData();
    }

    return (
        <>
            <div className="container" style={{backgroundColor: 'whitesmoke'}}>
                <div className='text-right' style={{padding:'10px'}}>
                 <Link to='/PostStudentData'>
                 <button className='btn btn-dark'>Create Grade Card</button>
                 </Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Student Percentage</th>
                            <th>Action1</th>
                            <th>Action2</th>
                        </tr>
                    </thead>
                    <tbody>
                        
            {getStudentData.map((student)=>{
                return(
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.percentage}</td>
                            <td>
                            <Link to = {`/Update/${student.id}`} >
                                <button className="btn btn-warning">Update</button>
                            </Link>
                            </td>
                            <td>
                            <button id={student.id} className="btn btn-danger" onClick={deleteData}>Delete</button>
                                </td>
                        </tr>
                )
                        })}
                    </tbody>
                </table>
            </div>


        </>
    )
}