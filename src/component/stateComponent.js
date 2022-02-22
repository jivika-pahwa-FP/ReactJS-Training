import React, { useState } from 'react';

export default function StateComponent(){
    // var counter = 1
    // setInterval(()=>{
    //     counter++;
        
    // console.log(counter);
    // },500);
    var [ counter, setCounter ] = useState(1);
    setInterval(()=>{
        if(counter == 10){
            clearInterval(this);
        }
        else{
        setCounter(counter = counter + 1);
        // console.log(counter);
        }
    },1000);

    return (
        <>
        <button>{counter}</button>
        </>
    )
}