import { Component } from "react";

export default class PropsInClassTwo  extends Component{
        render(){
            return(
                <>
                <h2>Props In Child Class :: {this.props.compName}</h2>
                </>
            )
        }
}