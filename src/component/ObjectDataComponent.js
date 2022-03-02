import { useState } from "react"

export default function ObjectDataComponent(){

    var [StudentDetails,setStudentDetails] = useState({
        id:"",
        name:"",
        percentage:""
    });

    var HandleInputFunc = (event) =>{
        setStudentDetails({
        ...StudentDetails,
        [event.target.name] : event.target.value
        })
    }



    return(
        <>
        <h3>Student Registeration Form</h3>
                <br />
                <div class="container">
                    <form class="form-horizontal">
                        <center>
                            <div class="form-group">
                                <div class="col-sm-4">
                                    <input type="number" class="form-control" placeholder="Enter Student ID" name = "id" value={StudentDetails.id} onChange={HandleInputFunc} required />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" placeholder="Enter Student Name" name = "name"  value={StudentDetails.name} onChange={HandleInputFunc} required />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-4">
                                    <input type="number" class="form-control" placeholder="Enter Student Percentage" name = "percentage"  value={StudentDetails.percentage} onChange={HandleInputFunc} required />
                                </div>
                            </div>

                        </center>
                    </form>
                </div>
                
        <p>Student ID : {StudentDetails.id} </p>
        <p>Student Name : {StudentDetails.name} </p>
        <p>Student Percentage : {StudentDetails.percentage} </p>
            </>

    )
}