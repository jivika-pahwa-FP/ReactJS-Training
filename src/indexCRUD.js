import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from 'react';
import './App.css';
import UserStateComponent from './component/userStateComponent';
import DataFetchUsingHook from './component/DataFetchUsingHook';
import GrandGrandParentComponent from './component/ContextApiComponent';
import CrudComponent from './component/CrudComponent';
import UpdateStudentData from './component/UpdateStudentData';
import PostStudentData from './component/PostStudentData';



export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<CrudComponent/>} ></Route>
      <Route exact path='/Update/:StudentID' element = {<UpdateStudentData/>} ></Route>
      <Route exact path='/PostStudentData' element={<PostStudentData/>}></Route>
    </Routes>
    </BrowserRouter>  
  )
}


ReactDom.render(<App></App>,document.getElementById("root"))





// using simple JavaScript

// function HeaderComponent(){
//     return React.createElement("div",{},[
//       React.createElement("h1",{},"This is the header for the session"),
//       React.createElement("h2",{},"This is other header"),
//       React.createElement("p",{},"This is sample Paragraph"),
//       React.createElement("div",{},[
//         React.createElement("section",{},[
//          React.createElement("h1",{},"This is React Component"),
//          React.createElement("div",{},[
//           React.createElement("h2",{},"This is Another Component")
//          ]),
//       ]),
//       React.createElement("article",{},[
//         React.createElement("h1",{},"This is React Component"),
//         React.createElement("div",{},[
//           React.createElement("h2",{},"This is Another Component")
//         ])
//       ]),
//     ]),
//   ])
// }