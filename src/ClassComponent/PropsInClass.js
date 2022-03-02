import { Component } from "react";
import PropsInClassTwo from "./PropsInClassTwo";

export default class PropsInClass  extends Component{
        render(){
            return(
                <>
                <h2>Props In Class :: {this.props.compName}</h2>
                <PropsInClassTwo compName = "ChildClassProps"></PropsInClassTwo>
                </>
            )
        }
}