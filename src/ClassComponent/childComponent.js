import { Component } from "react";

// export default  class ChildComponent extends Component{
//     render(){
//         return <p>Data coming from parent : {this.props.UserName}</p>
//     }
// }


export default function ChildComponent(props){
    return(
        <>
        <p>Data coming from parent : {props.userName}</p>
        </>
    )
}