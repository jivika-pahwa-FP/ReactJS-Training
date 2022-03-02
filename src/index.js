// import ReactDom from 'react-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React  from 'react';
// import './App.css';
// import CrudComponent from './component/CrudComponent';
// import UpdateStudentData from './component/UpdateStudentData';
// import PostStudentData from './component/PostStudentData';



// export default function App(){
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route exact path='/' element = {<CrudComponent/>} ></Route>
//       <Route exact path='/Update/:StudentID' element = {<UpdateStudentData/>} ></Route>
//       <Route exact path='/PostStudentData' element={<PostStudentData/>}></Route>
//     </Routes>
//     </BrowserRouter>  
//   )
// }


// ReactDom.render(<App></App>,document.getElementById("root"));




import ReactDom from 'react-dom';
import React  from 'react';
import './App.css';
// import FirstSPAComponent from './SinglePageApplication/FirstSPAComponent';
import {NewComponent , SecondComponent } from './component/HighOrderFunction';
import {HOC1,HOC2} from './component/HighOrderFunction2';
import PropsInClass from './ClassComponent/PropsInClass'
import ObjectDataComponent from './component/ObjectDataComponent';
import GrandGrandParentComponent from './component/ContextApiComponent';
import Data from './Data/EmployeeData';
import FilterDataComponent from './component/FilterDataComponent';


ReactDom.render(

<>
<FilterDataComponent data = {Data}></FilterDataComponent>

{/* <NewComponent></NewComponent>
<SecondComponent></SecondComponent> */}
{/* <HOC1 Name='Jivika' Id='101' Designation='Intern'></HOC1>
<HOC2 Name='Pooja' Id='102' Designation='Intern'></HOC2> */}
{/* <PropsInClass compName = "ParentClassProps"></PropsInClass> */}
{/* <ObjectDataComponent></ObjectDataComponent> */}
{/* <GrandGrandParentComponent></GrandGrandParentComponent> */}

</>,
document.getElementById("root")); 