import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from 'react';
import './App.css';
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


ReactDom.render(<App></App>,document.getElementById("root"));




// import ReactDom from 'react-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React  from 'react';
// // import './App.css';
// import FirstSPAComponent from './SinglePageApplication/FirstSPAComponent';


// ReactDom.render(<FirstSPAComponent></FirstSPAComponent>,document.getElementById("root"))