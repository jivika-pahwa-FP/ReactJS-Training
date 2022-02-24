import { useState ,useEffect} from "react";

export default function UserStateComponent() {

    let [counter, setCounter] = useState(0);

    // function incrementCounter(){
    //     setCounter(counter = counter + 1);
    // }

    useEffect(()=>{
        console.log("first Effect")
    },[]); // calls only once

    useEffect(()=>{
        console.log("second Effect")
    }); // calls at every render - refresh

    debugger;

    setTimeout(() => {
        setCounter(counter = counter + 1);
    }, 1000)

    
    debugger;

    return (
        <>
            <h3> 'UseState()'  React Hook - Functional Component</h3>
            <h4 style={{ color: 'orange' }}>Counter Value : {counter}</h4>
            {/* <button type="submit" onClick={incrementCounter}>Click</button>  */}
        </>
    )

}