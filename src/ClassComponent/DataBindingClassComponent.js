import { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class DataBindingClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            inputVal : "",
        }
    }
         changeInput = (event) => {
             this.setState({
                 inputVal : event.target.value
             })
         }

    render(){
        return (
            <>
            <h2>Data Binding using Class Component</h2>
            <label>Enter Your Name : </label>
            <input type="text" value={this.state.inputVal} onChange={this.changeInput} />
            <p>Name entered is : {this.state.inputVal} </p>
            <ChildComponent userName={this.state.inputVal}></ChildComponent>
            </>
        )
    }
}


