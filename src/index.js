import ReactDom from 'react-dom';
import React  from 'react';
import './App.css';
import Data from './Data/EmployeeData.js';
import DataBindingClassComponent from './ClassComponent/DataBindingClassComponent';
import FiterDataComponent from './ClassComponent/FilterDataComponent';

ReactDom.render(
  <div>
    {/* <DataBindingClassComponent></DataBindingClassComponent> */}
    <FiterDataComponent data = {Data}></FiterDataComponent>
  </div>,
  document.getElementById("root")
)





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