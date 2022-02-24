import { Component } from 'react';

import GrandGrandParentComponent from './GrandGrandParentComponent';
import GrandParentComponent from './GrandParentComponent';
import ParentComponent from './ParentComponent';
import ChildrenComponent from './ChildrenComponent';
import GrandChildrenComponent from './GrandChildrenComponent';

export default class ContextApiComponent extends Component{
    constructor(){
        super();
        this.state = {
        }

    }

    render(){
        
        return <p>The counter Value : {this.state.counter} </p>
    }

}