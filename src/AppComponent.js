import Axios  from "axios";
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import EmployeeDetailsComponent from './EmployeeDetailsComponent';
import * as actions from './Actions/employeeActions';

class AppComponent extends Component{

    render(){
        return(
            <>
                <h1>Movie Count : {this.props.employees.length}</h1>
                <h1>Flight Count : {this.props.flights.length}</h1>
                <button style={{marginLeft: "10px"}} className="btn btn-warning" onClick={this.getEmployeeList}>Get Data</button> 
                <button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={this.deleteEmployeeList}>Delete All Data</button> 
                <br/>
                    {this.props.employees.map((data)=>{
                        return <EmployeeDetailsComponent key = {data.id} {...data} deleteSpecficEmployee={this.deleteSpecficEmployee}></EmployeeDetailsComponent>
                    })}
            </>
        )
    }


    getEmployeeList = () => {
        Axios.get("https://localhost:5001/api/Student/getAllData").then((response) => {
            // debugger;
            this.props.setEmployeeList(response.data);
            console.log(response.data);
        })
    }

    deleteSpecficEmployee = (event) => {
        alert(`deleted : ${event.target.id}`);
        this.props.deleteOneEmployee(event.target.id);
    }

    deleteEmployeeList = () => {
        this.props.deleteAllEmployee();
    }

}

function mapPropsToStore(store){
     return{
         employees : store.employees,
         flights : store.flights
     }
}

export default connect(mapPropsToStore,actions)(AppComponent)