
import Axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostStudentData() {

    var [getStudentID, setStudentID] = useState('');
    var [getStudentName, setStudentName] = useState('');
    var [getStudentPercentage, setStudentPercentage] = useState('');

    var OnIDChange = (event) => {
        setStudentID(event.target.value);
    };
    var OnNameChange = (event) => {
        setStudentName(event.target.value);
    };
    var OnPercentageChange = (event) => {
        setStudentPercentage(event.target.value);
    };

    var OnFormSubmit = (event) => {
        event.preventDefault();
        var studentData = {
            id: getStudentID,
            name: getStudentName,
            percentage: getStudentPercentage
        };
        Axios.post("https://localhost:5001/api/Student/AddData", studentData)
            .then((response) => { })
            .catch((error) => { });
        alert("Grade Card Created !!");
        setStudentID("");
        setStudentName("");
        setStudentPercentage("");

        window.onload(() => {
            console.log("window loaded");
        });

    }

    return (
        <>
            <div className="container" style={{ backgroundColor: 'black', padding: '50px' }}>

                <h3>Student Grade Card Form</h3>

                <br />
                <form className="form-horizontal" onSubmit={OnFormSubmit}>
                    <center>
                        <div className="form-group">
                            <div className="col-sm-4">
                                <input type="number" className="form-control" placeholder="Enter Student ID" value={getStudentID} onChange={OnIDChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-4">
                                <input type="text" className="form-control" value={getStudentName} onChange={OnNameChange} placeholder="Enter Student Name" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-4">
                                <input type="number" className="form-control" name="getStudentPercentage" value={getStudentPercentage} onChange={OnPercentageChange} placeholder="Enter Student Percentage" required />
                            </div>
                        </div>

                        <button className="btn btn-info" type="submit">Save Details</button>
                        
                        <div className='text-left' style={{ padding: '10px' }}>
                            <Link to='/'>
                                <button className='btn btn-danger'>Back to Home Page</button>
                            </Link>
                        </div>
                    </center>
                </form>
            </div>

        </>
    )
}