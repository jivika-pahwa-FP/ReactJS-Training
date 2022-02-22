import { Component } from 'react';

export default class ClassBasedComponent extends Component{
    constructor(){
        super();
        this.state = {
            counter : 1,
        }

        setInterval(()=>{
            this.setState({counter : this.state.counter + 1})
            console.log(this.state.counter)
        },1000)
    }

    render(){
        
        return <p>The counter Value : {this.state.counter} </p>
    }

}