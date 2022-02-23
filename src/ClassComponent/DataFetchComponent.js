import { Component } from "react";
import AccountDataComponent from '../component/AccountDataComponent';
import Axios from "axios";

export default class DataFetchComponent extends Component {
    constructor() {
        super();
        this.state = { 
            employeeList: []
         }
    }

     deletePromise = (event) => Axios.delete(`https://localhost:5001/api/Student/Delete/${event.target.id}`).then((response)=>{
        console.log("deleted Id : "+event.target.id);
        this.getData();
        });

    // deletePromise = () =>{
    //     console.log("clickeddd...");
    // }

    render() {
        return (
            <>
            <h2>Fetching Student Data from API</h2>
            {this.state.employeeList.map((employee)=>{
               return <AccountDataComponent key = {employee.id} {...employee} deleteBtn = {this.deletePromise} ></AccountDataComponent>
            })}
            </>
        )
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        var dataPromise = Axios.get("https://localhost:5001/api/Student/getAllData");
        dataPromise.then((response)=>{
            this.setState({
                employeeList : response.data
            })
        })
    };
}