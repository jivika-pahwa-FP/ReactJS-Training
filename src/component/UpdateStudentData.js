import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from "react-router-dom";


export default function UpdateStudentData(props) {

    let location = useLocation();
    let params = useParams();
    // console.log(location);
    // console.log(location.pathname.search);
    console.log("Params = " + params.StudentID);

    var [getStudentID, setStudentID] = useState('');
    var [getStudentName, setStudentName] = useState('');
    var [getStudentPercentage, setStudentPercentage] = useState('');


    var getDatabyID = () => {
        Axios.get(`https://localhost:5001/api/Student/Edit/${params.StudentID}`)
            .then((response) => {
                console.log(response.data);
                setStudentID(getStudentID = response.data.id);
                setStudentName(getStudentName = response.data.name);
                setStudentPercentage(getStudentPercentage = response.data.percentage);
            });
    }

    useEffect(() => {
        getDatabyID();
    }, []); // calling API only once ([])

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
        console.log(studentData);

        Axios.put(`https://localhost:5001/api/Student/Update/${params.StudentID}`, studentData)
            .then((response) => { console.log(response.data); })
            .catch((error) => { });

        alert("Grade Card Updated !!");

        setStudentID("");
        setStudentName("");
        setStudentPercentage("");
        window.location.href = "/";

    }

    return (
        <>
            <div className="container" style={{ backgroundColor: 'black', padding: '50px' }}>

                <h3>Update Student Grade Card</h3>

                <br />
                <form className="form-horizontal" onSubmit={OnFormSubmit}>
                    <center>
                        <div className="form-group">
                            <div className="col-sm-4">
                                <input type="text" className="form-control" placeholder="Enter Student ID" value={getStudentID} required readOnly />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-4">
                                <input type="text" className="form-control" value={getStudentName} onChange={OnNameChange} placeholder="Enter Student Name" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-4">
                                <input type="number" className="form-control" value={getStudentPercentage} onChange={OnPercentageChange} placeholder="Enter Student Percentage" required />
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