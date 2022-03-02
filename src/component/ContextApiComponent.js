import React, { useState , useEffect, useContext } from 'react';
var AppContext = React.createContext();


   export default  function GrandGrandParentComponent(){
       var [nativeVillage] = useState("Delhi");
        return(
            <>
            <AppContext.Provider value={nativeVillage}>
                <h3> This is Grand Grand Parent Component {nativeVillage}</h3>
                 <GrandParentComponent></GrandParentComponent>
            </AppContext.Provider>
            </>
        )
    }
    
    function GrandParentComponent(props){
        return(
            <>
                <h3> This is  Grand Parent Component {props.village}</h3>
                <ParentComponent></ParentComponent>
            </>
        )
    }
    
    function ParentComponent(){
        return(
            <>
                <h3> This is Parent Component</h3>
                <ChildrenComponent></ChildrenComponent>
            </>
        )
    }
    function ChildrenComponent(){
        return(
            <>
                <h3> This is Children Component</h3>
                <GrandChildrenComponent ></GrandChildrenComponent>
            </>
        )
    }
    
    function GrandChildrenComponent(){
        var dataConsumer = useContext(AppContext);
        return(
            <>
                <h3> This is Grand Children Component {dataConsumer} </h3>
            </>
        )
    }



// import React, { useState , useEffect, useContext } from 'react';
// var AppContext = React.createContext;


//    export default  function GrandGrandParentComponent(){
//        var [nativeVillage] = useState("Delhi");
//         return(
//             <>
//             <AppContext.Provider value={nativeVillage}>
//                 <h3> This is Grand Grand Parent Component</h3>
//                 <GrandParentComponent village={nativeVillage}></GrandParentComponent>
//                 </AppContext.Provider>
//             </>
//         )
//     }

//     function GrandParentComponent(props){
//         return(
//             <>
//                 <h3> This is  Grand Parent Component {props.village}</h3>
//                 <ParentComponent></ParentComponent>
//             </>
//         )
//     }

